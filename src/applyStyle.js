import { globalChaiStyleObject, fontSizeMap, textAlignMap } from "./maps.js";
import { chaiHandlers } from "./handlers.js";
import { getBracketValue, isColor } from "./utils.js";

const processed = new WeakSet();

export function applyStyle(root = document) {
  const elements = root.querySelectorAll('[class*="chai-"]');

  elements.forEach((el) => {
    if (processed.has(el)) return;
    processed.add(el);

    const classes = el.className.split(" ");

    classes.forEach((cls) => {
      if (!cls.startsWith("chai-")) return;

      const parts = cls.split("-");
      const key = parts[1];
      const rawValue = parts.slice(2).join("-");

      let cssProp = globalChaiStyleObject[key];
      let finalValue;

      const bracketValue = getBracketValue(rawValue);

      // handlers
      if (chaiHandlers[key]) {
        chaiHandlers[key](el, rawValue, parts);
        return;
      }

      // position
      if (["relative", "absolute", "fixed", "sticky"].includes(key)) {
        el.style.position = key;
        return;
      }

      // text
      if (key === "text") {
        if (fontSizeMap[rawValue]) {
          el.style.fontSize = fontSizeMap[rawValue];
        } else if (textAlignMap[rawValue]) {
          el.style.textAlign = textAlignMap[rawValue];
        } else if (bracketValue) {
          el.style.fontSize = bracketValue;
        } else if (!isNaN(rawValue)) {
          el.style.fontSize = rawValue + "px";
        } else {
          el.style.color = rawValue;
        }
        return;
      }

      // border (improved)
      if (cssProp === "border") {
        const defaultColor = "orange";

        if (!rawValue) {
          finalValue = `1px solid ${defaultColor}`;
        } else if (["dashed", "solid", "dotted"].includes(rawValue)) {
          finalValue = `1px ${rawValue} ${defaultColor}`;
        } else if (!isNaN(rawValue)) {
          finalValue = `${rawValue}px solid ${defaultColor}`;
        } else if (bracketValue) {
          finalValue = bracketValue;
        } else {
          finalValue = `1px solid ${rawValue}`;
        }
      }

      else if (isColor(rawValue)) {
        finalValue = rawValue;
      }

      else if (bracketValue) {
        finalValue = bracketValue;
      }

      else if (!isNaN(rawValue)) {
        finalValue = `${Number(rawValue) * 10}px`;
      }

      else {
        finalValue = rawValue;
      }

      if (finalValue && cssProp) {
        el.style[cssProp] = finalValue;
      }
    });
  });
}