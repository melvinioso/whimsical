import { forEach } from 'lodash';
import Button from '../components/Button';

import { COLORS } from '../components/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Small = () => <Button sm>Button</Button>;

export const Medium = () => <Button md>Button</Button>;

export const Large = () => <Button lg>Button</Button>;

export const Color = () => <Button lg color={'red'}>Button</Button>;

export const Outline = () => {
  for (const key in COLORS) {
    return (
      <Button color={key} outline>
        Button
      </Button>
    );
  }
};

export const Link = () => <Button link>Button</Button>;
