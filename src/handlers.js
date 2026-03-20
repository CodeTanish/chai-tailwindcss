import { justifyMap, alignMap, flexDirection } from "./maps.js";

export const chaiHandlers = {
  flex: (el, value) => {
    el.style.display = "flex";
    if (value) el.style.flexDirection = flexDirection[value];
  },

  grid: (el, value, parts) => {
    el.style.display = "grid";

    if (parts[2] === "cols" && parts[3]) {
      el.style.gridTemplateColumns = `repeat(${parts[3]}, 1fr)`;
    }

    if (parts[2] === "rows" && parts[3]) {
      el.style.gridTemplateRows = `repeat(${parts[3]}, 1fr)`;
    }
  },

  j: (el, value) => {
    el.style.justifyContent = justifyMap[value] || value;
  },

  i: (el, value) => {
    el.style.alignItems = alignMap[value] || value;
  },
};