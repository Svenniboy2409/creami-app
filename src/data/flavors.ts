import type { Flavor } from '../types/recipe'

type Bit = { color: string; shape: 'chip' | 'chunk' | 'speck' | 'crumb' }

export interface FlavorLook {
  /** The background, from its soft corner to its deeper one. */
  from: string
  to: string
  /** The ice cream itself. */
  scoop: string
  /** What is stirred through it: chocolate chips, cookie crumbs, vanilla specks… */
  bits?: Bit[]
}

const chips = (color: string): Bit => ({ color, shape: 'chip' })
const chunks = (color: string): Bit => ({ color, shape: 'chunk' })
const specks = (color: string): Bit => ({ color, shape: 'speck' })
const crumbs = (color: string): Bit => ({ color, shape: 'crumb' })

const DARK_CHOCOLATE = '#4a2c22'

/** Colours for the pint illustration of each flavour, so a list of recipes without photos isn't all one colour. */
export const FLAVORS: Record<Flavor, FlavorLook> = {
  'white-chocolate': { from: '#fdf8ee', to: '#efe0c4', scoop: '#fbf3e2', bits: [crumbs('#f4e6c8')] },
  'greek-yogurt': { from: '#f5f7f9', to: '#d3dce6', scoop: '#fdfefe' },
  'cottage-cheese': { from: '#fcf8f0', to: '#e9dcc3', scoop: '#fffbf2', bits: [crumbs('#efe2c9')] },
  coconut: { from: '#f7f4ee', to: '#d9c9b2', scoop: '#fefdfb', bits: [crumbs('#e8dfcf'), specks('#9a7b5c')] },
  chocolate: { from: '#f3e7df', to: '#c9a08a', scoop: '#7a4a35', bits: [chunks('#5a3324')] },
  vanilla: { from: '#fdf6e3', to: '#f3dc9c', scoop: '#fbf1cf', bits: [specks('#4a3428')] },
  strawberry: { from: '#fde4ec', to: '#f4a3bb', scoop: '#f7b3c6', bits: [chunks('#d6476a')] },
  'mint-chip': { from: '#e5f6ee', to: '#a9dcc4', scoop: '#c9eedb', bits: [chips(DARK_CHOCOLATE)] },
  'cookie-dough': { from: '#f8eedd', to: '#e3c79a', scoop: '#f3e3c1', bits: [chunks('#b0804f'), chips(DARK_CHOCOLATE)] },
  'cookies-cream': { from: '#f1efee', to: '#c9c2be', scoop: '#f7f4f1', bits: [crumbs('#2f2523')] },
  coffee: { from: '#f3e9df', to: '#cfae8d', scoop: '#c79f7a', bits: [specks('#6b4630')] },
  banana: { from: '#fff7d6', to: '#f7df7f', scoop: '#fbeaa6', bits: [crumbs('#dcb06a')] },
  'peanut-butter': { from: '#f8eadb', to: '#deb383', scoop: '#d9a771', bits: [chunks(DARK_CHOCOLATE), chunks('#b97a3e')] },
  'raspberry-cheesecake': { from: '#fde6ec', to: '#ef9fb4', scoop: '#fbe3ea', bits: [chunks('#c2416b'), crumbs('#d9a56b')] },
  mango: { from: '#fff1d6', to: '#ffc78a', scoop: '#ffd36b' },
  'chocolate-hazelnut': { from: '#f1e3da', to: '#bf9178', scoop: '#8f5b42', bits: [chunks('#c58b55')] },
}
