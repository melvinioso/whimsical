import styled from 'styled-components';
import _Button from '../../components/Button';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

export default {
  title: 'Whimsical Components/Button/Disabled',
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
export const disabled = () => {
  return (
    <Container>
      <div>
        <Button disabled sm>Button</Button>
        <Button disabled>Button</Button>
        <Button disabled lg>Button</Button>
        <Button disabled lg>Button <ColorFill width={20} /></Button>
        <Button disabled lg><ColorFill width={20} /> Button</Button>
      </div>
      <div>
        <Button disabled sm white>White</Button>
        <Button disabled white>White</Button>
        <Button disabled lg white>White</Button>
        <Button disabled lg white>White <ColorFill width={20} /></Button>
        <Button disabled lg white><ColorFill width={20} /> White</Button>
      </div>
      <div>
        <Button disabled sm smoke>Smoke</Button>
        <Button disabled smoke>Smoke</Button>
        <Button disabled lg smoke>Smoke</Button>
        <Button disabled lg smoke>Smoke <ColorFill width={20} /></Button>
        <Button disabled lg smoke><ColorFill width={20} /> Smoke</Button>
      </div>
      <div>
        <Button disabled sm gray>Gray</Button>
        <Button disabled gray>Gray</Button>
        <Button disabled lg gray>Gray</Button>
        <Button disabled lg gray>Gray <ColorFill width={20} /></Button>
        <Button disabled lg gray><ColorFill width={20} /> Gray</Button>
      </div>
      <div>
        <Button disabled sm slate>Slate</Button>
        <Button disabled slate>Slate</Button>
        <Button disabled lg slate>Slate</Button>
        <Button disabled lg slate>Slate <ColorFill width={20} /></Button>
        <Button disabled lg slate><ColorFill width={20} /> Slate</Button>
      </div>
      <div>
        <Button disabled sm blue>Blue</Button>
        <Button disabled blue>Blue</Button>
        <Button disabled lg blue>Blue</Button>
        <Button disabled lg blue>Blue <ColorFill width={20} /></Button>
        <Button disabled lg blue><ColorFill width={20} /> Blue</Button>
      </div>
      <div>
        <Button disabled sm indigo>Indigo</Button>
        <Button disabled indigo>Indigo</Button>
        <Button disabled lg indigo>Indigo</Button>
        <Button disabled lg indigo>Indigo <ColorFill width={20} /></Button>
        <Button disabled lg indigo><ColorFill width={20} /> Indigo</Button>
      </div>
      <div>
        <Button disabled sm purple>Purple</Button>
        <Button disabled purple>Purple</Button>
        <Button disabled lg purple>Purple</Button>
        <Button disabled lg purple>Purple <ColorFill width={20} /></Button>
        <Button disabled lg purple><ColorFill width={20} /> Purple</Button>
      </div>
      <div>
        <Button disabled sm pink>Pink</Button>
        <Button disabled pink>Pink</Button>
        <Button disabled lg pink>Pink</Button>
        <Button disabled lg pink>Pink <ColorFill width={20} /></Button>
        <Button disabled lg pink><ColorFill width={20} /> Pink</Button>
      </div>
      <div>
        <Button disabled sm mint>Mint</Button>
        <Button disabled mint>Mint</Button>
        <Button disabled lg mint>Mint</Button>
        <Button disabled lg mint>Mint <ColorFill width={20} /></Button>
        <Button disabled lg mint><ColorFill width={20} /> Mint</Button>
      </div>
      <div>
        <Button disabled sm green>Green</Button>
        <Button disabled green>Green</Button>
        <Button disabled lg green>Green</Button>
        <Button disabled lg green>Green <ColorFill width={20} /></Button>
        <Button disabled lg green><ColorFill width={20} /> Green</Button>
      </div>
      <div>
        <Button disabled sm brown>Brown</Button>
        <Button disabled brown>Brown</Button>
        <Button disabled lg brown>Brown</Button>
        <Button disabled lg brown>Brown <ColorFill width={20} /></Button>
        <Button disabled lg brown><ColorFill width={20} /> Brown</Button>
      </div>
      <div>
        <Button disabled sm crimson>Crimson</Button>
        <Button disabled crimson>Crimson</Button>
        <Button disabled lg crimson>Crimson</Button>
        <Button disabled lg crimson>Crimson <ColorFill width={20} /></Button>
        <Button disabled lg crimson><ColorFill width={20} /> Crimson</Button>
      </div>
      <div>
        <Button disabled sm red>Red</Button>
        <Button disabled red>Red</Button>
        <Button disabled lg red>Red</Button>
        <Button disabled lg red>Red <ColorFill width={20} /></Button>
        <Button disabled lg red><ColorFill width={20} /> Red</Button>
      </div>

      <div>
        <Button disabled sm orange>Orange</Button>
        <Button disabled orange>Orange</Button>
        <Button disabled lg orange>Orange</Button>
        <Button disabled lg orange>Orange <ColorFill width={20} /></Button>
        <Button disabled lg orange><ColorFill width={20} /> Orange</Button>
      </div>
      <div>
        <Button disabled sm yellow>Yellow</Button>
        <Button disabled yellow>Yellow</Button>
        <Button disabled lg yellow>Yellow</Button>
        <Button disabled lg yellow>Yellow <ColorFill width={20} /></Button>
        <Button disabled lg yellow><ColorFill width={20} /> Yellow</Button>
      </div>
    </Container>
  );
};
