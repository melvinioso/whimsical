import styled from 'styled-components';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

import _Button from '../../components/Button';

export default {
  title: 'Whimsical Components/Button',
};

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(_Button)`
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const basic = () => (
  <>
    <Button>Button</Button>
    <Button outline>Button</Button>
    <Button link>Button</Button>
  </>
);

// prettier-ignore
export const colors = () => (
  <Container>
    <Row>
      <Button indigo>Indigo</Button>
      <Button outline indigo>Indigo</Button>
      <Button link indigo>Indigo</Button>
    </Row>
    <Row>
      <Button white>White</Button>
      <Button outline white>White</Button>
      <Button link white>White</Button>
    </Row>
    <Row>
      <Button black>Black</Button>
      <Button outline black>Black</Button>
      <Button link black>Black</Button>
    </Row>
    <Row>
      <Button smoke>Smoke</Button>
      <Button outline smoke>Smoke</Button>
      <Button link smoke>Smoke</Button>
    </Row>
    <Row>
      <Button gray>Gray</Button>
      <Button outline gray>Gray</Button>
      <Button link gray>Gray</Button>
    </Row>
    <Row>
      <Button slate>Slate</Button>
      <Button outline slate>Slate</Button>
      <Button link slate>Slate</Button>
    </Row>
    <Row>
      <Button blue>Blue</Button>
      <Button outline blue>Blue</Button>
      <Button link blue>Blue</Button>
    </Row>
    <Row>
      <Button purple>Purple</Button>
      <Button outline purple>Purple</Button>
      <Button link purple>Purple</Button>
    </Row>
    <Row>
      <Button pink>Pink</Button>
      <Button outline pink>Pink</Button>
      <Button link pink>Pink</Button>
    </Row>
    <Row>
      <Button mint>Mint</Button>
      <Button outline mint>Mint</Button>
      <Button link mint>Mint</Button>
    </Row>
    <Row>
      <Button green>Green</Button>
      <Button outline green>Green</Button>
      <Button link green>Green</Button>
    </Row>
    <Row>
      <Button brown>Brown</Button>
      <Button outline brown>Brown</Button>
      <Button link brown>Brown</Button>
    </Row>
    <Row>
      <Button crimson>Crimson</Button>
      <Button outline crimson>Crimson</Button>
      <Button link crimson>Crimson</Button>
    </Row>
    <Row>
      <Button red>Red</Button>
      <Button outline red>Red</Button>
      <Button link red>Red</Button>
    </Row>
    <Row>
      <Button orange>Orange</Button>
      <Button outline orange>Orange</Button>
      <Button link orange>Orange</Button>
    </Row>
    <Row>
      <Button yellow>Yellow</Button>
      <Button outline yellow>Yellow</Button>
      <Button link yellow>Yellow</Button>
    </Row>
  </Container>
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
  <>
    <Button disabled>Button</Button>
    <Button disabled outline>Button</Button>
    <Button disabled link>Button</Button>
  </>
);
