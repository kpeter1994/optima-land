export const useSimpleHead = (title: string, description: string, ) => {

  const head = useHead({
    title: title,
    htmlAttrs: {
      lang: 'hu',
    },
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "charset",
        content: "UTF-8",
      }
    ],
    link: [
      { rel: 'icon', type: 'image/ico', href: 'favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '32x32', href: 'favicon/apple-touch-icon.svg' },

    ]
  })

  return { head }

}
