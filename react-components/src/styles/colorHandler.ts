export function colorHandler(props: { theme?: any }) {
  if (!props.theme) {
    return '';
  }

  const propsKeys = Object.keys(props);

  if (!propsKeys.length) {
    return '';
  }

  let css = '';

  propsKeys.forEach((key) => {
    const foundColor =
      props.theme.colors.whimsical[key] || props.theme.colors[key];

    if (foundColor) {
      css += `color: ${foundColor};`;
    }
  });

  return css;
}
