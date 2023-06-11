import type {Meta, StoryObj} from '@storybook/svelte';

import Link from '@components/atoms/Link.svelte';

const meta = {
  title: 'Atoms/Link',
  component: Link,
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
} satisfies Meta<Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isDisabled: false,
    variant: 'primary',
    href: 'https://www.google.com',
    _slot: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    isDisabled: false,
    variant: 'secondary',
    href: 'https://www.google.com',
    _slot: 'Secondary',
  },
};
