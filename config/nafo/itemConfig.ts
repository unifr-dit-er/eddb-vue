import type { ItemConfig } from "../index";
import { DISPLAY_TABLE, DISPLAY_DETAILS } from "../index";
import { INFORMATION_TYPE_TEXT } from "../../types/item";

export const itemConfig: ItemConfig = {
  title: {
    apiCriteria: "NumeroInventaire",
  },
  subtitle: {
    apiCriteria: "Entite",
  },
  dates: {
    apiCriteriaFrom: "DatationDebut",
    apiCriteriaTo: "DatationFin",
    separator: "–",
    bceLabel: "av. J.-C.",
    ceLabel: "apr. J.-C.",
  },
  images: [
    {
      title: "Droit",
      apiCriteria: "Droit",
      apiCriteriaCaption: "DescriptionDroit",
    },
    {
      title: "Revers",
      apiCriteria: "Revers",
      apiCriteriaCaption: "DescriptionRevers",
    },
  ],
  informations: [
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Entité",
        apiCriteria: "Entite",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Autorité émettrice",
        apiCriteria: "Autorite",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Portrait",
        apiCriteria: "Portrait",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Atelier",
        apiCriteria: "Atelier",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Métal",
        apiCriteria: "Metal",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Dénomination",
        apiCriteria: "Denomination",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Poids",
        apiCriteria: "Poids",
        display: [DISPLAY_DETAILS],
        suffix: 'g',
        showEmpty: true,
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Diamètre",
        apiCriteria: "Diametre",
        display: [DISPLAY_DETAILS],
        suffix: 'mm',
        showEmpty: true,
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Axe",
        apiCriteria: "Axe",
        display: [DISPLAY_DETAILS],
        suffix: '°',
        showEmpty: true,
      },
    ],
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Commentaire",
        apiCriteria: ["Commentaire", "DatationExplication"],
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Référence",
        apiCriteria: "Reference",
        display: [DISPLAY_DETAILS],
        showEmpty: true,
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Bibliographie",
        apiCriteria: "Bibliographie",
        display: [DISPLAY_DETAILS],
      }
    ]
  ],
};
