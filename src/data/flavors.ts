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
  'salted-caramel': { from: '#fbeedd', to: '#e6b57f', scoop: '#e9c69c', bits: [chunks('#b4692c'), specks('#fffaf2')] },
  cheesecake: { from: '#fdf3ea', to: '#efc7b1', scoop: '#fcf3e3', bits: [chunks('#c8323f'), crumbs('#d4a15e')] },
  pistachio: { from: '#eef5e1', to: '#bcd69a', scoop: '#c8dc9c', bits: [chunks('#6f8f2f'), chunks('#8a5a3a')] },
  'strawberry-mango': { from: '#ffeae2', to: '#ffae94', scoop: '#f98f78', bits: [chunks('#f7b733'), chunks('#d9485f')] },
  watermelon: { from: '#ffe8ec', to: '#ffa3b1', scoop: '#f9909f', bits: [specks('#3b2a2a')] },
  biscoff: { from: '#f8ead8', to: '#d9a873', scoop: '#e7c495', bits: [crumbs('#a8642c'), chunks('#b8733a')] },
  'key-lime': { from: '#f1f8df', to: '#c6e08f', scoop: '#eef2c4', bits: [crumbs('#d1a35e'), specks('#6fa832')] },
  'banana-split': { from: '#fff4dc', to: '#f4c98a', scoop: '#fbf0d6', bits: [chips(DARK_CHOCOLATE), chunks('#d93a4a'), chunks('#f2cd4b')] },
  cinnamon: { from: '#f8ece0', to: '#d6a47c', scoop: '#e9cdb0', bits: [specks('#8a4f2a'), crumbs('#c9955a')] },
  brownie: { from: '#efe1d6', to: '#b8876b', scoop: '#6e4030', bits: [chunks('#3b2119'), chips('#2a1712')] },
  peach: { from: '#fff0e2', to: '#ffbe8f', scoop: '#fbe8c8', bits: [chunks('#f39a3e')] },
  blueberry: { from: '#eeeaf8', to: '#b3a5dc', scoop: '#b9a3d6', bits: [chunks('#3d3b7a'), chunks('#5b3f86')] },
  tiramisu: { from: '#f6ece2', to: '#cfa784', scoop: '#f0e1c8', bits: [chunks('#4a2c22'), specks('#7a4a35')] },
  blackberry: { from: '#f6e8f1', to: '#d4a2c4', scoop: '#e7bfd8', bits: [chunks('#3a1a3a'), chunks('#5b2457')] },
  cherry: { from: '#fde7ec', to: '#f2a0b3', scoop: '#f3b7c3', bits: [chunks('#a3122f')] },
  'birthday-cake': { from: '#fdf6e8', to: '#f6d9a8', scoop: '#fbf0d8', bits: [chips('#ef5a8a'), chips('#3fb6e6'), chips('#f7c331'), chips('#7ac943')] },
  hazelnut: { from: '#f7ecdf', to: '#d3a87c', scoop: '#e0bf97', bits: [chunks('#a8703f'), crumbs('#f0d9b5')] },
  'mixed-berry': { from: '#f4e6f3', to: '#cf9bc8', scoop: '#d9a1cb', bits: [chunks('#3d2f6e'), chunks('#c8344f')] },
  'panna-cotta': { from: '#fdf7ec', to: '#ecd2a6', scoop: '#fcf5e6', bits: [chunks('#c98a3d'), chunks('#d23a48')] },
  'iced-tea': { from: '#fbefe0', to: '#e3b37e', scoop: '#ecd2ad', bits: [specks('#5a3a24')] },
  elderflower: { from: '#fbfaec', to: '#e4e2b0', scoop: '#fbf6df', bits: [crumbs('#fffdf2'), specks('#c9c27a')] },
  pomegranate: { from: '#fde8ee', to: '#f0a1b6', scoop: '#f5c2cf', bits: [chunks('#a5122e')] },
  'butter-pecan': { from: '#fbf1e2', to: '#e2bf8c', scoop: '#f4e2bf', bits: [chunks('#8a4f24')] },
  matcha: { from: '#eef3e0', to: '#b9cf8e', scoop: '#a9c47c', bits: [specks('#5f7f36')] },
  marshmallow: { from: '#fdf6f4', to: '#f4d3db', scoop: '#fdf4e6', bits: [chunks('#ffffff'), chunks('#f6bfd0')] },
  'cotton-candy': { from: '#fdeaf3', to: '#bfe0f5', scoop: '#f7c2d9', bits: [chunks('#8fd0f2'), chips('#f48fb8')] },
  'passion-fruit': { from: '#f6ecf6', to: '#c9a0cf', scoop: '#f8e6b6', bits: [specks('#2b2118'), chunks('#9a4d93')] },
  lemon: { from: '#fffbe0', to: '#f8e27a', scoop: '#fcf0a8', bits: [specks('#f2c21b'), crumbs('#e8cf9a')] },
  'strawberry-banana': { from: '#fff0f0', to: '#f6c6a6', scoop: '#fbe9d6', bits: [chunks('#d6476a'), chunks('#f6dc8a')] },
  pear: { from: '#f9f8e6', to: '#dfe0a6', scoop: '#f6efd2', bits: [chunks('#e3d07a')] },
  pineapple: { from: '#fffbe0', to: '#ffe066', scoop: '#fbe36b', bits: [chunks('#f2b705')] },
  'aperol-spritz': { from: '#fff0e4', to: '#ffb27a', scoop: '#f9a26b', bits: [chunks('#e8590c')] },
  smores: { from: '#f7ece2', to: '#cfa17d', scoop: '#e6cfb5', bits: [chunks('#4a2c22'), crumbs('#c98d4e'), chunks('#fffaf2')] },
}
