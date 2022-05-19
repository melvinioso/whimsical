export function backgroundHandler(props: { theme?: any }) {
  if (!props.theme) {
    return '';
  }

  const re = new RegExp('^bg-(.+)$');

  const propsKeys = Object.keys(props).filter((key) => re.test(key));

  if (!propsKeys.length) {
    return '';
  }

  const res = re.exec(propsKeys[propsKeys.length - 1]);

  if (res && res[1]) {
    const color = res[1];

    const foundColor =
      props.theme.colors.whimsical[color] || props.theme.colors[color];

    if (foundColor) {
      return `background-color: ${foundColor};`;
    }
  }

  return '';
}
