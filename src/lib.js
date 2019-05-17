/* eslint-disable import/prefer-default-export */

/**
 * Check if on save data mode
 *
 * @return {boolean} — the user is asked to save data
 */
export function isSaveData() {
  return ((navigator || {}).connection || {}).saveData;
}
