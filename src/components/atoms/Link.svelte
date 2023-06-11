<script lang="ts">
  export let className: string = '';
  export let isDisabled: boolean = false;
  export let variant: 'primary' | 'secondary';
  export let href: string = '';
  export let label: string = 'Slot';
</script>

<a
  class={`Link ${className}`}
  {href}
  target="_blank"
  data-variant={variant}
  aria-disabled={isDisabled}
  tabindex={isDisabled ? -1 : 0}
>
  {label}
</a>

<style lang="scss">
  .Link {
    display: inline-block;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 8px 16px;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    text-decoration: none;
    outline-offset: 2px;

    &[data-variant='primary'] {
      background: var(--primary);
      color: var(--white);

      &:focus-visible {
        outline-color: var(--primary);
      }
    }
    &[data-variant='secondary'] {
      background: var(--secondary);
      color: var(--black);

      &:focus-visible {
        outline-color: var(--secondary);
      }
    }

    &[aria-disabled='false'] {
      &:hover,
      &:focus {
        transform: scale(0.98);
      }

      &:focus-visible {
        outline-width: 2px;
        outline-style: solid;
      }
    }

    &[aria-disabled='true'] {
      pointer-events: none;
      background: var(--gray);
      color: var(--white);
    }
  }
</style>
