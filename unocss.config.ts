import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
  
  export default defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
          // ...
        },
      }),
      presetTypography(),
      presetWebFonts({
        provider: 'google',
        fonts: {
            sans: 'Open Sans',
            serif: 'Montserrat',
            mono: ['Fira Code', 'Fira Mono:400,700'],
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
  })