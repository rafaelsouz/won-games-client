import { Story, Meta } from '@storybook/react/types-6-0';
import GameDetails, { GameDetailsProps } from '.';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['Windows', 'Linux', 'Mac'],
    releaseDate: '2020-11-21T23:00:00',
    rating: 'BR0',
    genres: ['Role-playing']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['Windows', 'Linux', 'Mac']
      }
    }
  }
} as Meta;

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
