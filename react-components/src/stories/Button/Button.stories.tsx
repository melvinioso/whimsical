import styled from 'styled-components';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

import _Button from '../../components/Button';

export default {
  title: 'Whimsical Components/Button',
};

const Button = styled(_Button)`
  margin-bottom: 10px;
  margin-right: 10px;
`;

// prettier-ignore
export const basic = () => (
  <div>
    <Button>Button</Button>
    <Button outline>Button</Button>
    <Button link>Button</Button>
  </div>
);

// prettier-ignore
export const colors = () => (
  <div>
    <Button white>White</Button>
    <Button black>Black</Button>
    <Button smoke>Smoke</Button>
    <Button gray>Gray</Button>
    <Button slate>Slate</Button>
    <Button blue>Blue</Button>
    <Button indigo>Indigo</Button>
    <Button purple>Purple</Button>
    <Button pink>Pink</Button>
    <Button mint>Mint</Button>
    <Button green>Green</Button>
    <Button brown>Brown</Button>
    <Button crimson>Crimson</Button>
    <Button red>Red</Button>
    <Button orange>Orange</Button>
    <Button yellow>Yellow</Button>
  </div>
);

// prettier-ignore
export const sizes = () => (
  <>
    <div>
      <Button sm>Button</Button>
      <Button>Button</Button>
      <Button lg>Button</Button>
    </div>
    <div>
      <Button outline sm>Button</Button>
      <Button outline>Button</Button>
      <Button outline lg>Button</Button>
    </div>
    <div>
      <Button link sm>Button</Button>
      <Button link>Button</Button>
      <Button link lg>Button</Button>
    </div>
  </>
);

// prettier-ignore
export const withIcons = () => (
  <>
    <div>
      <Button><ColorFill width={20} />Button</Button>
      <Button outline><ColorFill width={20} />Button</Button>
      <Button link><ColorFill width={20} />Button</Button>
    </div>
    <div>
      <Button>Button<ColorFill width={20} /></Button>
      <Button outline>Button<ColorFill width={20} /></Button>
      <Button link>Button<ColorFill width={20} /></Button>
    </div>
  </>
);

// prettier-ignore
export const disabled = () => (
  <div>
    <Button disabled>Button</Button>
    <Button disabled outline>Button</Button>
    <Button disabled link>Button</Button>
  </div>
);
