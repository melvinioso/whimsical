import styled from 'styled-components';
import _Button from '../../components/Button';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

export default {
  title: 'Whimsical Components/Button',
};

const Button = styled(_Button)`
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
  }
`;

// prettier-ignore
export const basic = () => {
  return (
    <Container>
      <div>
        <Button>Button</Button>
        <Button outline>Button</Button>
        <Button link>Button</Button>
      </div>
    </Container>
  )
}

// prettier-ignore
export const colors = () => {
  return (
    <Container>
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
    </Container>
  )
}

// prettier-ignore
export const sizes = () => {
  return (
    <Container>
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
    </Container>
  )
}

// prettier-ignore
export const withIcons = () => {
  return (
    <Container>
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
    </Container>
  )
}

// prettier-ignore
export const disabled = () => {
  return (
    <Container>
      <div>
        <Button disabled>Button</Button>
        <Button disabled outline>Button</Button>
        <Button disabled link>Button</Button>
      </div>
    </Container>
  )
}
