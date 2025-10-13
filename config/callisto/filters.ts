import type { Filter } from "../../types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT } from "../../types/filter"

export const filters: Filter[] = [
  {
    type: FILTER_TYPE_TEXT,
    title: "Titre",
    apiCriteria: "Titre"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Description",
    apiCriteria: "Description"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Période",
    apiCriteria: "Periode"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Matériau",
    apiCriteria: "Materiau"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Catégorie",
    apiCriteria: "Categorie"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Forme",
    apiCriteria: "Forme"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Sujet",
    apiCriteria: "Sujets"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Dimensions",
    apiCriteria: "Dimensions"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Lieu de découverte",
    apiCriteria: "LieuDeDecouverte"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Lieu de conservation",
    apiCriteria: "LieuDeConservation"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Centre producteur",
    apiCriteria: "CentreProducteur"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Sources / Bibliographie",
    apiCriteria: "SourcesBiblio"
  }
]