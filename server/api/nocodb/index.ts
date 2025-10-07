import axios from "axios"
import type { Item } from "@/types/item"
import { DISPLAY_TABLE, type ItemConfig } from "@/config/index"
import { nocoFilter } from "~/server/utils/nocoFilter"

export default defineEventHandler(async (event) => {
  const { api, itemConfig } = useRuntimeConfig(event).public
  const limit = api.limit as number || 50

  const query = getQuery(event)
  const sort = query.sort as string || 'Id'
  const page = query.page as number || 1
  const filters = query.filters as string[] || []

  const offset = (page - 1) * limit

  const options = {
    method: 'GET',
    url: `${api.url}/api/v2/tables/${api.collectionName}/records`,
    params: { sort: sort, offset: offset || 0, limit: limit, where: nocoFilter(filters) },
    headers: { 'xc-token': `${api.token}` }
  }

  console.log(options)

  try {
    const res = await axios.request(options)
    const items: Item[] = res.data.list?.map((item: any) => nocoTransform(item, itemConfig as ItemConfig, DISPLAY_TABLE)) || []
    return {
      items,
      pageInfo: res.data.pageInfo
    }
  } catch (err) {
    console.error(err)
    return {
      items: [] as Item[],
      pageInfo: null
    }
  }
})