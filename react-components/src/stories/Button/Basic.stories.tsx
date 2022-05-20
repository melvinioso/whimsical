import styled from 'styled-components';
import _Button from '../../components/Button';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

export default {
  title: 'Whimsical Components/Button/Basic',
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
export const basic = () => {
  return (
    <Container>
      <div>
        <Button sm>Button</Button>
        <Button>Button</Button>
        <Button lg>Button</Button>
        <Button lg>Button <ColorFill width={20} /></Button>
        <Button lg><ColorFill width={20} /> Button</Button>
      </div>
      <div>
        <Button sm white>White</Button>
        <Button white>White</Button>
        <Button lg white>White</Button>
        <Button lg white>White <ColorFill width={20} /></Button>
        <Button lg white><ColorFill width={20} /> White</Button>
      </div>
      <div>
        <Button sm smoke>Smoke</Button>
        <Button smoke>Smoke</Button>
        <Button lg smoke>Smoke</Button>
        <Button lg smoke>Smoke <ColorFill width={20} /></Button>
        <Button lg smoke><ColorFill width={20} /> Smoke</Button>
      </div>
      <div>
        <Button sm gray>Gray</Button>
        <Button gray>Gray</Button>
        <Button lg gray>Gray</Button>
        <Button lg gray>Gray <ColorFill width={20} /></Button>
        <Button lg gray><ColorFill width={20} /> Gray</Button>
      </div>
      <div>
        <Button sm slate>Slate</Button>
        <Button slate>Slate</Button>
        <Button lg slate>Slate</Button>
        <Button lg slate>Slate <ColorFill width={20} /></Button>
        <Button lg slate><ColorFill width={20} /> Slate</Button>
      </div>
      <div>
        <Button sm blue>Blue</Button>
        <Button blue>Blue</Button>
        <Button lg blue>Blue</Button>
        <Button lg blue>Blue <ColorFill width={20} /></Button>
        <Button lg blue><ColorFill width={20} /> Blue</Button>
      </div>
      <div>
        <Button sm indigo>Indigo</Button>
        <Button indigo>Indigo</Button>
        <Button lg indigo>Indigo</Button>
        <Button lg indigo>Indigo <ColorFill width={20} /></Button>
        <Button lg indigo><ColorFill width={20} /> Indigo</Button>
      </div>
      <div>
        <Button sm purple>Purple</Button>
        <Button purple>Purple</Button>
        <Button lg purple>Purple</Button>
        <Button lg purple>Purple <ColorFill width={20} /></Button>
        <Button lg purple><ColorFill width={20} /> Purple</Button>
      </div>
      <div>
        <Button sm pink>Pink</Button>
        <Button pink>Pink</Button>
        <Button lg pink>Pink</Button>
        <Button lg pink>Pink <ColorFill width={20} /></Button>
        <Button lg pink><ColorFill width={20} /> Pink</Button>
      </div>
      <div>
        <Button sm mint>Mint</Button>
        <Button mint>Mint</Button>
        <Button lg mint>Mint</Button>
        <Button lg mint>Mint <ColorFill width={20} /></Button>
        <Button lg mint><ColorFill width={20} /> Mint</Button>
      </div>
      <div>
        <Button sm green>Green</Button>
        <Button green>Green</Button>
        <Button lg green>Green</Button>
        <Button lg green>Green <ColorFill width={20} /></Button>
        <Button lg green><ColorFill width={20} /> Green</Button>
      </div>
      <div>
        <Button sm brown>Brown</Button>
        <Button brown>Brown</Button>
        <Button lg brown>Brown</Button>
        <Button lg brown>Brown <ColorFill width={20} /></Button>
        <Button lg brown><ColorFill width={20} /> Brown</Button>
      </div>
      <div>
        <Button sm crimson>Crimson</Button>
        <Button crimson>Crimson</Button>
        <Button lg crimson>Crimson</Button>
        <Button lg crimson>Crimson <ColorFill width={20} /></Button>
        <Button lg crimson><ColorFill width={20} /> Crimson</Button>
      </div>
      <div>
        <Button sm red>Red</Button>
        <Button red>Red</Button>
        <Button lg red>Red</Button>
        <Button lg red>Red <ColorFill width={20} /></Button>
        <Button lg red><ColorFill width={20} /> Red</Button>
      </div>

      <div>
        <Button sm orange>Orange</Button>
        <Button orange>Orange</Button>
        <Button lg orange>Orange</Button>
        <Button lg orange>Orange <ColorFill width={20} /></Button>
        <Button lg orange><ColorFill width={20} /> Orange</Button>
      </div>
      <div>
        <Button sm yellow>Yellow</Button>
        <Button yellow>Yellow</Button>
        <Button lg yellow>Yellow</Button>
        <Button lg yellow>Yellow <ColorFill width={20} /></Button>
        <Button lg yellow><ColorFill width={20} /> Yellow</Button>
      </div>
    </Container>
  );
};
