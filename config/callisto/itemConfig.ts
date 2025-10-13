import type { ItemConfig } from "../index";
import { DISPLAY_TABLE, DISPLAY_DETAILS } from "../index";
import { INFORMATION_TYPE_TEXT, INFORMATION_TYPE_HTML } from "../../types/item";

export const itemConfig: ItemConfig = {
  title: {
    apiCriteria: "Titre",
  },
  subtitle: {
    apiCriteria: "Id",
    prefix: "Fiche N°",
  },
  dates: {
    apiCriteriaFrom: "DatationDebut",
    apiCriteriaTo: "DatationFin",
    separator: "–",
    bceLabel: "av. J.-C.",
    ceLabel: "apr. J.-C.",
  },
  images: [],
  informations: [
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Description",
        apiCriteria: "Description",
        display: [DISPLAY_DETAILS],
      },
    ],
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Période",
        apiCriteria: "Periode",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Matériau",
        apiCriteria: "Materiau",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Catégorie",
        apiCriteria: "Categorie",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Forme",
        apiCriteria: "Forme",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Sujets",
        apiCriteria: "Sujets",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Dimensions",
        apiCriteria: "Dimensions",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Lieu de découverte",
        apiCriteria: "LieuDeDecouverte",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Lieu de conservation",
        apiCriteria: "LieuDeConservation",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Centre producteur",
        apiCriteria: "CentreProducteur",
        display: [DISPLAY_DETAILS],
      },
    ],
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Sources",
        apiCriteria: "Sources",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Bibliographie",
        apiCriteria: "Bibliographie",
        display: [DISPLAY_DETAILS],
      },
    ],
  ],
};
