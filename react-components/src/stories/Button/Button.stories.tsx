import Button from '../../components/Button';
import { Video as VideoIcon } from '@styled-icons/entypo/Video';

import { COLORS } from '../../components/colors';

export default {
  title: 'Button',
  component: Button,
};

export const Small = () => (
  <>
    <Button sm color={'indigo'}>Small Button</Button><br /><br />
    <Button outline sm color={'indigo'}>Small Button</Button><br /><br />
    <Button link sm color={'indigo'}>Small Button</Button><br /><br />
    <Button disabled sm color={'indigo'}>Small Button</Button><br /><br />
    <Button sm color={'indigo'}>Watch Video <VideoIcon width={16} /></Button><br /><br />
    <Button outline sm color={'indigo'}><VideoIcon width={16} />Small Button</Button><br /><br />
  </>
);

export const Medium = () => (
  <>
    <Button md color={'blue'}>Medium Button</Button><br /><br />
    <Button outline md color={'blue'}>Medium Button</Button><br /><br />
    <Button link md color={'blue'}>Medium Button</Button><br /><br />
    <Button disabled md color={'blue'}>Medium Button</Button><br /><br />
    <Button md color={'blue'}>Watch Video <VideoIcon width={20} /></Button><br /><br />
    <Button outline md color={'blue'}><VideoIcon width={20} />Medium Button</Button><br /><br />
  </>
);

export const Large = () => (
  <>
    <Button lg color={'orange'}>Large Button</Button><br /><br />
    <Button outline lg color={'orange'}>Large Button</Button><br /><br />
    <Button link lg color={'orange'}>Large Button</Button><br /><br />
    <Button disabled lg color={'orange'}>Large Button</Button><br /><br />
    <Button lg color={'orange'}>Watch Video <VideoIcon width={24} /></Button><br /><br />
    <Button outline lg color={'orange'}><VideoIcon width={24} />Large Button</Button><br /><br />
  </>
);

export const Outline = () => {
  return Object.keys(COLORS).map((color, idx) => (
    <>
      <Button key={idx} color={color} outline>
        Button
      </Button><br /><br />
    </>
  ));
};

export const Colors = () => {
  return Object.keys(COLORS).map((color, idx) => (
    <>
      <Button key={idx} color={color}>
        Button
      </Button><br /><br />
    </>
  ));
};
