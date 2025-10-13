import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "@/types/filter"

export function useFilterInitialization() {
  const config = useAppConfig()

  const initializeFilters = async () => {

    return config.filters.map((filterConfig) => {
      const baseFilter = {
        filter: filterConfig,
        model: (() => {
          switch (filterConfig.type) {
            case FILTER_TYPE_TEXT:
              return ''
            case FILTER_TYPE_RANGE:
              return ['', '']
            case FILTER_TYPE_SELECT:
              return []
            default:
              return []
          }
        })()
      }

      return baseFilter
    })
  }

  return {
    initializeFilters
  }
}