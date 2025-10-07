import axios from "axios"

export default defineEventHandler(async (event) => {
  const { api } = useRuntimeConfig(event).public

  const options = {
    method: 'GET',
    url: `${api.url}/api/v2/tables/${api.collectionName}/records`,
    params: { fields: "Id", where: '(Publication,is,true)' },
    headers: { 'xc-token': `${api.token}` }
  }

  try {
    const res = await axios.request(options)
    return res.data.pageInfo?.totalRows || 0
  } catch (err) {
    console.error(err)
    return 0
  }
})