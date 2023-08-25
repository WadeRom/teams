const convertToHex = (rgb) => {
  const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  const hex = rgb.match(regex);
  const [r, g, b] = [hex[1], hex[2], hex[3]];
  const colorHex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  return colorHex;
}

export const stylesUtilities = (element) => {
  const elementComputed = document.getElementById(element);
}
