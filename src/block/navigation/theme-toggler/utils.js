export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

const themeColors = {
  [THEME_LIGHT]: '#fff',
  [THEME_DARK]: '#282a36',
};

export function detectActualTheme() {
  if (typeof window !== 'undefined') {
    const state = localStorage.getItem('theme');

    if (state) {
      if (state === THEME_DARK || state === THEME_LIGHT) {
        return state;
      }

      localStorage.removeItem('theme');
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
  }

  return THEME_LIGHT;
}

export function toggleTheme(value) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem('theme', value);

  document.body.setAttribute('data-theme', value);

  const themeColor = document.querySelector('[name="theme-color"]');

  if (themeColor) {
    document.querySelector('[name="theme-color"]').setAttribute('content', themeColors[value]);
  }
}
