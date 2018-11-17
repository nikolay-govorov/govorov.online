const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

function sortBySections(items) {
  return items.reduce((acc, post) => {
    const section = post.node.fields.slug.match(/^\/([a-zA-Z]*)\//)[1];

    if (!acc[section]) {
      acc[section] = [];
    }

    acc[section].push(post);

    return acc;
  }, {});
}

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html

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
  const postsBySection = sortBySections(result.data.allMarkdownRemark.edges);

  Object.keys(postsBySection).forEach((section) => {
    const posts = postsBySection[section];

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const blogPost = path.resolve(`./src/modules/${section}/index.js`);

      createPage({
        path: path.resolve(section, post.node.fields.slug),
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    });
  })
}

function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

module.exports = { createPages, onCreateNode };
