import type { Tone } from '../data/creami'

// Full class strings so Tailwind can see them at build time.
export const TONES: Record<Tone, { solid: string; soft: string; text: string; fill: string; gradient: string }> = {
  strawberry: {
    solid: 'bg-strawberry',
    soft: 'bg-strawberry-soft',
    text: 'text-raspberry',
    fill: 'fill-strawberry',
    gradient: 'from-strawberry-soft via-strawberry-soft to-strawberry',
  },
  pistachio: {
    solid: 'bg-pistachio',
    soft: 'bg-pistachio-soft',
    text: 'text-pistachio-deep',
    fill: 'fill-pistachio',
    gradient: 'from-pistachio-soft via-pistachio-soft to-pistachio',
  },
  mango: {
    solid: 'bg-mango',
    soft: 'bg-mango-soft',
    text: 'text-mango-deep',
    fill: 'fill-mango',
    gradient: 'from-mango-soft via-mango-soft to-mango',
  },
  blueberry: {
    solid: 'bg-blueberry',
    soft: 'bg-blueberry-soft',
    text: 'text-blueberry-deep',
    fill: 'fill-blueberry',
    gradient: 'from-blueberry-soft via-blueberry-soft to-blueberry',
  },
  vanilla: {
    solid: 'bg-vanilla',
    soft: 'bg-vanilla-soft',
    text: 'text-vanilla-deep',
    fill: 'fill-vanilla',
    gradient: 'from-vanilla-soft via-vanilla-soft to-vanilla',
  },
}
