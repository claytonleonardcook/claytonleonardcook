<script lang="ts">
  export let className: string = '';
  export let isCircle: boolean = false;
  export let isDisabled: boolean = false;
  export let variant: 'primary' | 'secondary' = 'primary';
</script>

<button
  class={`Button ${className}`}
  data-isCircle={isCircle}
  data-variant={variant}
  disabled={isDisabled}
>
  <span>
    <slot />
  </span>
</button>

<style lang="scss">
  button {
    --background: #ffffff00;
    --overlay: #ffffff00;

    background: linear-gradient(var(--overlay), var(--overlay)),
      linear-gradient(var(--background), var(--background));
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 8px 16px;

    &[data-variant='primary'] {
      --background: var(--background-primary-background);
      color: var(--background-primary-text);
      &:hover {
        --overlay: var(--background-primary-overlay);
      }
    }
    &[data-variant='secondary'] {
      --background: var(--background-secondary-background);
      color: var(--background-secondary-text);
      &:hover {
        --overlay: var(--background-secondary-overlay);
      }
    }

    &[data-isCircle='true'] {
      border-radius: 50%;
      aspect-ratio: 1 / 1;
    }
  }
</style>
