import styled from 'styled-components';
import _Button from '../../components/Button';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

export default {
  title: 'Whimsical Components/Button/Link',
};

const Button = styled(_Button)`
  margin-bottom: 10px;
`;

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-between;
  }
`;

// prettier-ignore
export const link = () => {
  return (
    <Container>
      <div>
        <Button link sm>Button</Button>
        <Button link>Button</Button>
        <Button link lg>Button</Button>
        <Button link lg>Button <ColorFill width={20} /></Button>
        <Button link lg><ColorFill width={20} /> Button</Button>
      </div>
      <div>
        <Button link sm white>White</Button>
        <Button link white>White</Button>
        <Button link lg white>White</Button>
        <Button link lg white>White <ColorFill width={20} /></Button>
        <Button link lg white><ColorFill width={20} /> White</Button>
      </div>
      <div>
        <Button link sm smoke>Smoke</Button>
        <Button link smoke>Smoke</Button>
        <Button link lg smoke>Smoke</Button>
        <Button link lg smoke>Smoke <ColorFill width={20} /></Button>
        <Button link lg smoke><ColorFill width={20} /> Smoke</Button>
      </div>
      <div>
        <Button link sm gray>Gray</Button>
        <Button link gray>Gray</Button>
        <Button link lg gray>Gray</Button>
        <Button link lg gray>Gray <ColorFill width={20} /></Button>
        <Button link lg gray><ColorFill width={20} /> Gray</Button>
      </div>
      <div>
        <Button link sm slate>Slate</Button>
        <Button link slate>Slate</Button>
        <Button link lg slate>Slate</Button>
        <Button link lg slate>Slate <ColorFill width={20} /></Button>
        <Button link lg slate><ColorFill width={20} /> Slate</Button>
      </div>
      <div>
        <Button link sm blue>Blue</Button>
        <Button link blue>Blue</Button>
        <Button link lg blue>Blue</Button>
        <Button link lg blue>Blue <ColorFill width={20} /></Button>
        <Button link lg blue><ColorFill width={20} /> Blue</Button>
      </div>
      <div>
        <Button link sm indigo>Indigo</Button>
        <Button link indigo>Indigo</Button>
        <Button link lg indigo>Indigo</Button>
        <Button link lg indigo>Indigo <ColorFill width={20} /></Button>
        <Button link lg indigo><ColorFill width={20} /> Indigo</Button>
      </div>
      <div>
        <Button link sm purple>Purple</Button>
        <Button link purple>Purple</Button>
        <Button link lg purple>Purple</Button>
        <Button link lg purple>Purple <ColorFill width={20} /></Button>
        <Button link lg purple><ColorFill width={20} /> Purple</Button>
      </div>
      <div>
        <Button link sm pink>Pink</Button>
        <Button link pink>Pink</Button>
        <Button link lg pink>Pink</Button>
        <Button link lg pink>Pink <ColorFill width={20} /></Button>
        <Button link lg pink><ColorFill width={20} /> Pink</Button>
      </div>
      <div>
        <Button link sm mint>Mint</Button>
        <Button link mint>Mint</Button>
        <Button link lg mint>Mint</Button>
        <Button link lg mint>Mint <ColorFill width={20} /></Button>
        <Button link lg mint><ColorFill width={20} /> Mint</Button>
      </div>
      <div>
        <Button link sm green>Green</Button>
        <Button link green>Green</Button>
        <Button link lg green>Green</Button>
        <Button link lg green>Green <ColorFill width={20} /></Button>
        <Button link lg green><ColorFill width={20} /> Green</Button>
      </div>
      <div>
        <Button link sm brown>Brown</Button>
        <Button link brown>Brown</Button>
        <Button link lg brown>Brown</Button>
        <Button link lg brown>Brown <ColorFill width={20} /></Button>
        <Button link lg brown><ColorFill width={20} /> Brown</Button>
      </div>
      <div>
        <Button link sm crimson>Crimson</Button>
        <Button link crimson>Crimson</Button>
        <Button link lg crimson>Crimson</Button>
        <Button link lg crimson>Crimson <ColorFill width={20} /></Button>
        <Button link lg crimson><ColorFill width={20} /> Crimson</Button>
      </div>
      <div>
        <Button link sm red>Red</Button>
        <Button link red>Red</Button>
        <Button link lg red>Red</Button>
        <Button link lg red>Red <ColorFill width={20} /></Button>
        <Button link lg red><ColorFill width={20} /> Red</Button>
      </div>

      <div>
        <Button link sm orange>Orange</Button>
        <Button link orange>Orange</Button>
        <Button link lg orange>Orange</Button>
        <Button link lg orange>Orange <ColorFill width={20} /></Button>
        <Button link lg orange><ColorFill width={20} /> Orange</Button>
      </div>
      <div>
        <Button link sm yellow>Yellow</Button>
        <Button link yellow>Yellow</Button>
        <Button link lg yellow>Yellow</Button>
        <Button link lg yellow>Yellow <ColorFill width={20} /></Button>
        <Button link lg yellow><ColorFill width={20} /> Yellow</Button>
      </div>
    </Container>
  );
};
