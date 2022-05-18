export function radiusHandler(props: {}) {
  const re = new RegExp('^br-(.+)$');

  const propsKeys = Object.keys(props).filter((key) => re.test(key));

  if (!propsKeys.length) {
    return '';
  }

  const res = re.exec(propsKeys[0]);

  let css = '';
  if (res && res[1] && !isNaN(parseInt(res[1], 10))) {
    const radius = res[1];
    css += `border-radius: ${radius}px;`;
  }

  return css;
}
