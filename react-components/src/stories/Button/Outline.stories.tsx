import styled from 'styled-components';
import _Button from '../../components/Button';
import { ColorFill } from '@styled-icons/boxicons-solid/ColorFill';

export default {
  title: 'Whimsical Components/Button/Outline',
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
export const outline = () => {
  return (
    <Container>
      <div>
        <Button outline sm>Button</Button>
        <Button outline>Button</Button>
        <Button outline lg>Button</Button>
        <Button outline lg>Button <ColorFill width={20} /></Button>
        <Button outline lg><ColorFill width={20} /> Button</Button>
      </div>
      <div>
        <Button outline sm white>White</Button>
        <Button outline white>White</Button>
        <Button outline lg white>White</Button>
        <Button outline lg white>White <ColorFill width={20} /></Button>
        <Button outline lg white><ColorFill width={20} /> White</Button>
      </div>
      <div>
        <Button outline sm smoke>Smoke</Button>
        <Button outline smoke>Smoke</Button>
        <Button outline lg smoke>Smoke</Button>
        <Button outline lg smoke>Smoke <ColorFill width={20} /></Button>
        <Button outline lg smoke><ColorFill width={20} /> Smoke</Button>
      </div>
      <div>
        <Button outline sm gray>Gray</Button>
        <Button outline gray>Gray</Button>
        <Button outline lg gray>Gray</Button>
        <Button outline lg gray>Gray <ColorFill width={20} /></Button>
        <Button outline lg gray><ColorFill width={20} /> Gray</Button>
      </div>
      <div>
        <Button outline sm slate>Slate</Button>
        <Button outline slate>Slate</Button>
        <Button outline lg slate>Slate</Button>
        <Button outline lg slate>Slate <ColorFill width={20} /></Button>
        <Button outline lg slate><ColorFill width={20} /> Slate</Button>
      </div>
      <div>
        <Button outline sm blue>Blue</Button>
        <Button outline blue>Blue</Button>
        <Button outline lg blue>Blue</Button>
        <Button outline lg blue>Blue <ColorFill width={20} /></Button>
        <Button outline lg blue><ColorFill width={20} /> Blue</Button>
      </div>
      <div>
        <Button outline sm indigo>Indigo</Button>
        <Button outline indigo>Indigo</Button>
        <Button outline lg indigo>Indigo</Button>
        <Button outline lg indigo>Indigo <ColorFill width={20} /></Button>
        <Button outline lg indigo><ColorFill width={20} /> Indigo</Button>
      </div>
      <div>
        <Button outline sm purple>Purple</Button>
        <Button outline purple>Purple</Button>
        <Button outline lg purple>Purple</Button>
        <Button outline lg purple>Purple <ColorFill width={20} /></Button>
        <Button outline lg purple><ColorFill width={20} /> Purple</Button>
      </div>
      <div>
        <Button outline sm pink>Pink</Button>
        <Button outline pink>Pink</Button>
        <Button outline lg pink>Pink</Button>
        <Button outline lg pink>Pink <ColorFill width={20} /></Button>
        <Button outline lg pink><ColorFill width={20} /> Pink</Button>
      </div>
      <div>
        <Button outline sm mint>Mint</Button>
        <Button outline mint>Mint</Button>
        <Button outline lg mint>Mint</Button>
        <Button outline lg mint>Mint <ColorFill width={20} /></Button>
        <Button outline lg mint><ColorFill width={20} /> Mint</Button>
      </div>
      <div>
        <Button outline sm green>Green</Button>
        <Button outline green>Green</Button>
        <Button outline lg green>Green</Button>
        <Button outline lg green>Green <ColorFill width={20} /></Button>
        <Button outline lg green><ColorFill width={20} /> Green</Button>
      </div>
      <div>
        <Button outline sm brown>Brown</Button>
        <Button outline brown>Brown</Button>
        <Button outline lg brown>Brown</Button>
        <Button outline lg brown>Brown <ColorFill width={20} /></Button>
        <Button outline lg brown><ColorFill width={20} /> Brown</Button>
      </div>
      <div>
        <Button outline sm crimson>Crimson</Button>
        <Button outline crimson>Crimson</Button>
        <Button outline lg crimson>Crimson</Button>
        <Button outline lg crimson>Crimson <ColorFill width={20} /></Button>
        <Button outline lg crimson><ColorFill width={20} /> Crimson</Button>
      </div>
      <div>
        <Button outline sm red>Red</Button>
        <Button outline red>Red</Button>
        <Button outline lg red>Red</Button>
        <Button outline lg red>Red <ColorFill width={20} /></Button>
        <Button outline lg red><ColorFill width={20} /> Red</Button>
      </div>

      <div>
        <Button outline sm orange>Orange</Button>
        <Button outline orange>Orange</Button>
        <Button outline lg orange>Orange</Button>
        <Button outline lg orange>Orange <ColorFill width={20} /></Button>
        <Button outline lg orange><ColorFill width={20} /> Orange</Button>
      </div>
      <div>
        <Button outline sm yellow>Yellow</Button>
        <Button outline yellow>Yellow</Button>
        <Button outline lg yellow>Yellow</Button>
        <Button outline lg yellow>Yellow <ColorFill width={20} /></Button>
        <Button outline lg yellow><ColorFill width={20} /> Yellow</Button>
      </div>
    </Container>
  );
};
