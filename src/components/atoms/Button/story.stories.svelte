<script>
  import {Meta, Story} from '@storybook/addon-svelte-csf';

  import Button from './index.svelte';
</script>

<Meta
  title="Atoms/Button"
  component={Button}
  argTypes={{
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
        labels: ['primary', 'secondary'],
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isCircle: {
      control: {
        type: 'boolean',
      },
    },
  }}
/>

<Story name="Primary" args={{variant: 'primary', isDisabled: false, isCircle: false}} let:args>
  <Button {...args}>Primary</Button>
</Story>

<Story name="Secondary" args={{variant: 'secondary', isDisabled: false, isCircle: false}} let:args>
  <Button {...args}>Secondary</Button>
</Story>

<Story name="Disabled" args={{variant: 'primary', isDisabled: true, isCircle: false}} let:args>
  <Button {...args}>Disabled</Button>
</Story>
