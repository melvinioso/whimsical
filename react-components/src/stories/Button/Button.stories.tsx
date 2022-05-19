import styled from 'styled-components';
import _Button from '../../components/Button';

import theme from '../../styles/theme';

export default {
  title: 'Button',
};

const Button = styled(_Button)`
  margin-bottom: 10px;
  display: block;
`;

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 25%;
    justify-content: space-between;
  }
`;

const COLORS = Object.keys(theme.colors.whimsical);

// prettier-ignore
export const basic = () => {
  return (
    <Container>
      <div>
        <Button sm>Button</Button>
        <Button>Button</Button>
        <Button lg>Button</Button>
      </div>
      <div>
        <Button sm white>White</Button>
        <Button white>White</Button>
        <Button lg white>White</Button>
      </div>
      <div>
        <Button sm smoke>Smoke</Button>
        <Button smoke>Smoke</Button>
        <Button lg smoke>Smoke</Button>
      </div>
      <div>
        <Button sm gray>Gray</Button>
        <Button gray>Gray</Button>
        <Button lg gray>Gray</Button>
      </div>
      <div>
        <Button sm slate>Slate</Button>
        <Button slate>Slate</Button>
        <Button lg slate>Slate</Button>
      </div>
      <div>
        <Button sm blue>Blue</Button>
        <Button blue>Blue</Button>
        <Button lg blue>Blue</Button>
      </div>
      <div>
        <Button sm indigo>Indigo</Button>
        <Button indigo>Indigo</Button>
        <Button lg indigo>Indigo</Button>
      </div>
      <div>
        <Button sm purple>Purple</Button>
        <Button purple>Purple</Button>
        <Button lg purple>Purple</Button>
      </div>
      <div>
        <Button sm pink>Pink</Button>
        <Button pink>Pink</Button>
        <Button lg pink>Pink</Button>
      </div>
      <div>
        <Button sm mint>Mint</Button>
        <Button mint>Mint</Button>
        <Button lg mint>Mint</Button>
      </div>
      <div>
        <Button sm green>Green</Button>
        <Button green>Green</Button>
        <Button lg green>Green</Button>
      </div>
      <div>
        <Button sm brown>Brown</Button>
        <Button brown>Brown</Button>
        <Button lg brown>Brown</Button>
      </div>
      <div>
        <Button sm crimson>Crimson</Button>
        <Button crimson>Crimson</Button>
        <Button lg crimson>Crimson</Button>
      </div>
      <div>
        <Button sm red>Red</Button>
        <Button red>Red</Button>
        <Button lg red>Red</Button>
      </div>

      <div>
        <Button sm orange>Orange</Button>
        <Button orange>Orange</Button>
        <Button lg orange>Orange</Button>
      </div>
      <div>
        <Button sm yellow>Yellow</Button>
        <Button yellow>Yellow</Button>
        <Button lg yellow>Yellow</Button>
      </div>
    </Container>
  );
};

// prettier-ignore
export const outline = () => {
  return (
    <Container>
      <div>
        <Button outline sm>Button</Button>
        <Button outline>Button</Button>
        <Button outline lg>Button</Button>
      </div>
      <div>
        <Button outline sm white>White</Button>
        <Button outline white>White</Button>
        <Button outline lg white>White</Button>
      </div>
      <div>
        <Button outline sm smoke>Smoke</Button>
        <Button outline smoke>Smoke</Button>
        <Button outline lg smoke>Smoke</Button>
      </div>
      <div>
        <Button outline sm gray>Gray</Button>
        <Button outline gray>Gray</Button>
        <Button outline lg gray>Gray</Button>
      </div>
      <div>
        <Button outline sm slate>Slate</Button>
        <Button outline slate>Slate</Button>
        <Button outline lg slate>Slate</Button>
      </div>
      <div>
        <Button outline sm blue>Blue</Button>
        <Button outline blue>Blue</Button>
        <Button outline lg blue>Blue</Button>
      </div>
      <div>
        <Button outline sm indigo>Indigo</Button>
        <Button outline indigo>Indigo</Button>
        <Button outline lg indigo>Indigo</Button>
      </div>
      <div>
        <Button outline sm purple>Purple</Button>
        <Button outline purple>Purple</Button>
        <Button outline lg purple>Purple</Button>
      </div>
      <div>
        <Button outline sm pink>Pink</Button>
        <Button outline pink>Pink</Button>
        <Button outline lg pink>Pink</Button>
      </div>
      <div>
        <Button outline sm mint>Mint</Button>
        <Button outline mint>Mint</Button>
        <Button outline lg mint>Mint</Button>
      </div>
      <div>
        <Button outline sm green>Green</Button>
        <Button outline green>Green</Button>
        <Button outline lg green>Green</Button>
      </div>
      <div>
        <Button outline sm brown>Brown</Button>
        <Button outline brown>Brown</Button>
        <Button outline lg brown>Brown</Button>
      </div>
      <div>
        <Button outline sm crimson>Crimson</Button>
        <Button outline crimson>Crimson</Button>
        <Button outline lg crimson>Crimson</Button>
      </div>
      <div>
        <Button outline sm red>Red</Button>
        <Button outline red>Red</Button>
        <Button outline lg red>Red</Button>
      </div>

      <div>
        <Button outline sm orange>Orange</Button>
        <Button outline orange>Orange</Button>
        <Button outline lg orange>Orange</Button>
      </div>
      <div>
        <Button outline sm yellow>Yellow</Button>
        <Button outline yellow>Yellow</Button>
        <Button outline lg yellow>Yellow</Button>
      </div>
    </Container>
  );
};

// prettier-ignore
export const link = () => {
  return (
    <Container>
      <div>
        <Button link sm>Button</Button>
        <Button link>Button</Button>
        <Button link lg>Button</Button>
      </div>
      <div>
        <Button link sm white>White</Button>
        <Button link white>White</Button>
        <Button link lg white>White</Button>
      </div>
      <div>
        <Button link sm smoke>Smoke</Button>
        <Button link smoke>Smoke</Button>
        <Button link lg smoke>Smoke</Button>
      </div>
      <div>
        <Button link sm gray>Gray</Button>
        <Button link gray>Gray</Button>
        <Button link lg gray>Gray</Button>
      </div>
      <div>
        <Button link sm slate>Slate</Button>
        <Button link slate>Slate</Button>
        <Button link lg slate>Slate</Button>
      </div>
      <div>
        <Button link sm blue>Blue</Button>
        <Button link blue>Blue</Button>
        <Button link lg blue>Blue</Button>
      </div>
      <div>
        <Button link sm indigo>Indigo</Button>
        <Button link indigo>Indigo</Button>
        <Button link lg indigo>Indigo</Button>
      </div>
      <div>
        <Button link sm purple>Purple</Button>
        <Button link purple>Purple</Button>
        <Button link lg purple>Purple</Button>
      </div>
      <div>
        <Button link sm pink>Pink</Button>
        <Button link pink>Pink</Button>
        <Button link lg pink>Pink</Button>
      </div>
      <div>
        <Button link sm mint>Mint</Button>
        <Button link mint>Mint</Button>
        <Button link lg mint>Mint</Button>
      </div>
      <div>
        <Button link sm green>Green</Button>
        <Button link green>Green</Button>
        <Button link lg green>Green</Button>
      </div>
      <div>
        <Button link sm brown>Brown</Button>
        <Button link brown>Brown</Button>
        <Button link lg brown>Brown</Button>
      </div>
      <div>
        <Button link sm crimson>Crimson</Button>
        <Button link crimson>Crimson</Button>
        <Button link lg crimson>Crimson</Button>
      </div>
      <div>
        <Button link sm red>Red</Button>
        <Button link red>Red</Button>
        <Button link lg red>Red</Button>
      </div>

      <div>
        <Button link sm orange>Orange</Button>
        <Button link orange>Orange</Button>
        <Button link lg orange>Orange</Button>
      </div>
      <div>
        <Button link sm yellow>Yellow</Button>
        <Button link yellow>Yellow</Button>
        <Button link lg yellow>Yellow</Button>
      </div>
    </Container>
  );
};
