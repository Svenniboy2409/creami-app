const MAX_SIDE = 1200
const QUALITY = 0.82

async function decode(file: File): Promise<CanvasImageSource & { width: number; height: number }> {
  try {
    return await createImageBitmap(file)
  } catch {
    // Some formats (or older Safari) only decode through an <img> element.
    const url = URL.createObjectURL(file)
    try {
      const img = new Image()
      img.src = url
      await img.decode()
      return img
    } finally {
      URL.revokeObjectURL(url)
    }
  }
}

/** Downscales a photo from the camera or gallery to a JPEG data URL small enough to keep in IndexedDB. */
export async function compressImage(file: File): Promise<string> {
  const source = await decode(file)
  const scale = Math.min(1, MAX_SIDE / Math.max(source.width, source.height))
  const width = Math.round(source.width * scale)
  const height = Math.round(source.height * scale)

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Could not process this image.')
  ctx.drawImage(source, 0, 0, width, height)
  if ('close' in source && typeof source.close === 'function') source.close()
  return canvas.toDataURL('image/jpeg', QUALITY)
}
