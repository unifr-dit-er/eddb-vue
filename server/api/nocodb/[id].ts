import axios from "axios"
import type { Item } from "@/types/item"
import { DISPLAY_DETAILS, type ItemConfig } from "@/config/index"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const { api, itemConfig } = useRuntimeConfig(event).public

  const options = {
    method: 'GET',
    url: `${api.url}/api/v2/tables/${api.collectionName}/records/${id}`,
    headers: { 'xc-token': `${api.token}` }
  }

  try {
    const res = await axios.request(options)
    return nocoTransform(res.data, itemConfig as ItemConfig, DISPLAY_DETAILS) as Item
  } catch (err) {
    console.error(err)
    return null
  }
})