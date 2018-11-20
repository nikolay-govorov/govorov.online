export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

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

export function saveTheme(value) {
  localStorage.setItem('theme', value);
}
