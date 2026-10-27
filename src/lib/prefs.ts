// Small display preferences, kept in localStorage so the very first render
// already looks the way you left it.

export type FolderView = 'grid' | 'list'

const FOLDER_VIEW_KEY = 'creami:folder-view'

export function getFolderView(): FolderView {
  try {
    return localStorage.getItem(FOLDER_VIEW_KEY) === 'list' ? 'list' : 'grid'
  } catch {
    return 'grid'
  }
}

export function storeFolderView(view: FolderView): void {
  try {
    localStorage.setItem(FOLDER_VIEW_KEY, view)
  } catch {
    // The choice just won't survive a reload.
  }
}

const ILLUSTRATIONS_KEY = 'creami:illustrations'

/** Whether the app's own recipes show their flavour illustration instead of a photo. Off unless chosen. */
export function getIllustrations(): boolean {
  try {
    return localStorage.getItem(ILLUSTRATIONS_KEY) === 'on'
  } catch {
    return false
  }
}

export function storeIllustrations(on: boolean): void {
  try {
    localStorage.setItem(ILLUSTRATIONS_KEY, on ? 'on' : 'off')
  } catch {
    // The choice just won't survive a reload.
  }
}
