/**
 * From the home screen the app draws under a see-through status bar with a
 * white clock, like the cocktail app. On the cream pages that clock would
 * vanish, so a soft raspberry wash sits behind it. It is exactly as tall as
 * the status bar, which in a browser tab is nothing at all.
 */
export function StatusBarScrim({ visible = true }: { visible?: boolean }) {
  return (
    <div
      aria-hidden
      className={`status-scrim pointer-events-none fixed inset-x-0 top-0 z-40 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
