import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false, backgroundSize = 'cover'): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  const style = {
    background: isColor
      ? background
      : undefined,
    color: (background && !isColor)
      ? 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize,
  }

  if (!style.background)
    delete style.background

  return style
}


export function handleBackgroundWithBlur(
  background?: string,
  dim = false,
  backgroundSize = 'cover',
  applyBlur = false // New parameter to control the blur effect
): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  const style: CSSProperties = {
    background: isColor ? background : undefined,
    color: (background && !isColor) ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : background
      ? dim
        ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
        : `url("${resolveAssetUrl(background)}")`
      : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize,
    filter: applyBlur ? 'blur(10px)' : undefined, // Apply blur if the flag is true
  }

  if (!style.background) delete style.background

  return style
}
