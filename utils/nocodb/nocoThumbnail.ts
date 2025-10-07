export const nocoThumbnail = (id: string, preset?: string): string => {
  const config = useRuntimeConfig().public

  switch (preset) {
    // case 'collection-thumb':
    //   return `${config.api.url}`
    // case 'item-image':
    //   return `${config.api.url}`
    default:
      return `${config.api.url}/${id}`
  }
}