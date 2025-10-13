import type { AppConfig } from "@/config/index"
import { sorters } from './sorters'
import { filters } from './filters'
import { itemConfig } from './itemConfig'

export default {
  name: "callisto",
  copyright: "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire",
  sorters,
  filters,
  api: {
    provider: "nocodb",
    url: "https://eddb.unifr.ch/noco",
    collectionName: "mzl90y8p2067uzf",
    limit: 50,
    token: "RVRaYpnATFe0bxbvIfpRKBU0pXBeFyd0XZNfRFR7" // read-only token
  },
  itemConfig
} as AppConfig