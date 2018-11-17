const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/components/modules/notes/one/index.js');

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }

            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);

    return;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  });
}

function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

module.exports = { createPages, onCreateNode };
