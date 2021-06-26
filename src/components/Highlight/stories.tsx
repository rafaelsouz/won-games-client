import { Story, Meta } from '@storybook/react/types-6-0';
import Highlight, { HighLightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead its back',
    subtitle: 'Come see Johns new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta;

export const Default: Story<HighLightProps> = (args) => <Highlight {...args} />;
