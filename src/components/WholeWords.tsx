import { Fragment, useLayoutEffect, useRef } from 'react'

// A lone "+" or "&" goes to the next line with the word after it: "Strawberry" / "+ Banana".
const JOINERS = /^[+&]$/

function words(text: string): string[] {
  const out: string[] = []
  for (const word of text.split(' ').filter(Boolean)) {
    const last = out.length - 1
    if (last >= 0 && JOINERS.test(out[last])) out[last] = `${out[last]} ${word}`
    else out.push(word)
  }
  return out
}

/**
 * Text, such as a recipe name, that wraps between whole words. With hyphenation
 * on for the whole text the browser also splits words that would fit on the next
 * line ("Strawberry + Ba-nana"), so only a word too wide for a line of its own,
 * like "Verjaardagstaartdroom" on a narrow card, may be broken and hyphenated. Its parent
 * sets the font and the width; give it `[overflow-wrap:anywhere]` too, for a
 * browser without a hyphenation dictionary for the language.
 */
export function WholeWords({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const root = ref.current
    const box = root?.parentElement
    if (!root || !box) return
    const spans = [...root.children] as HTMLElement[]
    const measure = () => {
      // Each word at its natural width, unbroken, in one layout pass.
      for (const span of spans) span.style.whiteSpace = 'nowrap'
      const widths = spans.map((span) => span.getBoundingClientRect().width)
      const line = box.clientWidth
      // A word that fits on a line stays in one piece, not even breaking at a
      // hyphen of its own ("pindakaas-cup-ijs"); a wider one may break and hyphenate.
      spans.forEach((span, index) => {
        const tooWide = widths[index] > line
        span.style.whiteSpace = tooWide ? '' : 'nowrap'
        span.style.hyphens = tooWide ? 'auto' : ''
        span.style.setProperty('-webkit-hyphens', tooWide ? 'auto' : '')
      })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(box)
    // The title font may still be loading on the first measure, and it is wider than the fallback.
    void document.fonts?.ready.then(measure)
    return () => observer.disconnect()
  }, [text])

  return (
    <span ref={ref}>
      {words(text).map((word, index) => (
        <Fragment key={index}>
          {index > 0 && ' '}
          <span>{word}</span>
        </Fragment>
      ))}
    </span>
  )
}
