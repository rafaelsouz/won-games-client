import { Story, Meta } from '@storybook/react/types-6-0';
import Showcase, { ShowcaseProps } from '.';
import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default {
  title: 'ShowCase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
};

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHighlight.args = {
  games: gamesMock
};
