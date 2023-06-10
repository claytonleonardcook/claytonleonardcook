import type {Meta, StoryObj} from '@storybook/svelte';

import Button from '@components/atoms/Button.svelte';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      exclude: /^default*/,
      sort: 'alpha',
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isCircle: false,
    isDisabled: false,
    variant: 'primary',
    _slot: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    isCircle: false,
    isDisabled: false,
    variant: 'secondary',
    _slot: 'Secondary',
  },
};
