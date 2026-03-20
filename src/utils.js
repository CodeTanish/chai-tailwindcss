export function getBracketValue(value) {
  if (value?.startsWith("[") && value.endsWith("]")) {
    return value.slice(1, -1);
  }
  return null;
}

export function isColor(value) {
  return (
    value?.startsWith("#") ||
    value?.startsWith("rgb") ||
    value?.startsWith("hsl")
  );
}