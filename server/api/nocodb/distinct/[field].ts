import axios from "axios"

export default defineEventHandler(async (event) => {
  const field = getRouterParam(event, 'field')
  if (typeof field !== 'string' || !field) {
    throw new Error("Invalid field parameter")
  }
  const { api } = useRuntimeConfig(event).public

  const options = {
    method: 'GET',
    url: `${api.url}/api/v2/tables/${api.collectionName}/records`,
    params: { 
      fields: field,
      limit: 1000,
      where: '(Publication,is,true)'
    },
    headers: { 'xc-token': `${api.token}` }
  }

  try {
    const res = await axios.request(options)
    // Extraire les valeurs uniques et non-nulles
    const uniqueValues = [...new Set(
      res.data.list
        .map((item: any) => item[field])
        .filter((value: any) => value !== null && value !== '')
    )].sort()
    
    return uniqueValues
  } catch (err) {
    console.error(err)
    return []
  }
})