import type { Filter } from "../../types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "../../types/filter"

export const filters: Filter[] = [
  {
    type: FILTER_TYPE_TEXT,
    title: "Numéro d'inventaire",
    info: "ex: CPS 1015",
    apiCriteria: "NumeroInventaire"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Entité",
    apiCriteria: "Entite"
  },
  {
    type: FILTER_TYPE_RANGE,
    title: "Datation",
    info: "Utilisez des valeurs négatives pour les dates av. J.-C.",
    apiCriteria: ["DatationDebut", "DatationFin"]
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Autorité émettrice",
    apiCriteria: "Autorite"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Portrait",
    apiCriteria: "Portrait"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Atelier",
    apiCriteria: "Atelier"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Métal",
    apiCriteria: "Metal"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Dénomination",
    apiCriteria: "Denomination"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Référence bibliographique",
    info: "ex: Alexandria 47",
    apiCriteria: "Reference"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Mots-clés",
    info: "ex: sanctuaire",
    apiCriteria: ["MotsCles"]
  }
]