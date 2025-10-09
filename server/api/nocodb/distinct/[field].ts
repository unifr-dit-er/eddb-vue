import axios from "axios"

export default defineEventHandler(async (event) => {
  const field = getRouterParam(event, 'field')
  if (typeof field !== 'string' || !field) {
    throw new Error("Invalid field parameter")
  }
  
  const { api } = useRuntimeConfig(event).public

  try {
    const allValues = new Set<string>()
    let offset = 0
    const limit = 1000
    let hasMore = true

    while (hasMore) {
      const options = {
        method: 'GET',
        url: `${api.url}/api/v2/tables/${api.collectionName}/records`,
        params: { 
          fields: field,
          limit,
          offset,
          where: '(Publication,is,true)'
        },
        headers: { 'xc-token': `${api.token}` }
      }

      const res = await axios.request(options)
      
      res.data.list
        .map((item: any) => item[field])
        .filter((value: any) => value !== null && value !== '' && value !== undefined)
        .forEach((value: string) => allValues.add(String(value).trim()))

      hasMore = res.data.pageInfo && !res.data.pageInfo.isLastPage
      offset += limit
    }
    
    return [...allValues].sort((a, b) => a.localeCompare(b))
  } catch (err) {
    console.error(err)
    return []
  }
})