export function typographyHandler(props: { theme?: any }) {
  if (!props.theme) {
    return '';
  }

  const propsKeys = Object.keys(props);

  if (!propsKeys.length) {
    return '';
  }

  let css = '';

  propsKeys.forEach((key) => {
    const found = props.theme.typography[key];

    if (found) {
      css += found;
    }
  });

  return css;
}
