import type { FilterState } from "@/composables/states"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "@/types/filter"

export const nocoFilter = (filters: string[]): string => {
  const states = filters.map(filter => JSON.parse(filter)) as FilterState[]
  const rules = states
    .map(state => {
      switch (state.filter.type) {
        case FILTER_TYPE_TEXT:
          return filtersTextRule(state.filter.apiCriteria as string, state.model as string)
        case FILTER_TYPE_SELECT:
          return filtersSelectRule(state.filter.apiCriteria as string, state.model as string[])
        case FILTER_TYPE_RANGE:
          return filtersRangeRule(state.filter.apiCriteria as string[], state.model as string[])
        default:
          return ''
      }
    })
    .filter(rule => rule !== '')

  return rules.length > 0 ? `(${rules.join('~and')})~and(Publication,is,true)` : '(Publication,is,true)'
}

const filtersTextRule = (criteria: string, value: string) => {
  return value ? `(${criteria},like,${value})` : ''
}

const filtersSelectRule = (criteria: string, values: string[]) => {
  return values.length ? `(${criteria},anyof,${values.join(',')})` : ''
}

const filtersRangeRule = (criteria: string[], values: string[]) => {
  const fromInt = parseInt(values[0])
  const toInt = parseInt(values[1])
  const defaultMin = -9000
  const defaultMax = 9000

  const from = Number.isFinite(fromInt) ? fromInt : defaultMin
  const to = Number.isFinite(toInt) ? toInt : defaultMax

  if (from === defaultMin && to === defaultMax) {
    return ''
  }

  // Chaque condition de range doit être entre parenthèses
  const range1 = `(${criteria[0]},ge,${from})~and(${criteria[0]},le,${to})`
  const range2 = `(${criteria[1]},ge,${from})~and(${criteria[1]},le,${to})`
  
  // Le OR global englobe les deux ranges complets
  return `(${range1})~or(${range2})`
}