import type { AppConfig } from "@/config/index"
import { sorters } from './sorters'
import { filters } from './filters'
import { itemConfig } from './itemConfig'

export default {
  name: "nafo",
  copyright: "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire / Musée d’art et d’histoire de Fribourg",
  sorters,
  filters,
  api: {
    provider: "nocodb",
    url: "https://eddb.unifr.ch/noco",
    collectionName: "mxqtfvyud6xj5f4",
    limit: 50,
    token: "RVRaYpnATFe0bxbvIfpRKBU0pXBeFyd0XZNfRFR7" // read-only token
  },
  itemConfig
} as AppConfig