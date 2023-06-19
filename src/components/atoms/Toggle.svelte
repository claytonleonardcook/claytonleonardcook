<script lang="ts">
  export let className: string = '';
  export let disabled: boolean = false;
  export let checkedIcon: string;
  export let uncheckedIcon: string;
  export let checked: boolean = true;
</script>

<input
  class={`toggle ${className}`}
  type="checkbox"
  style:--checkedIcon={`url(${checkedIcon})`}
  style:--uncheckedIcon={`url(${uncheckedIcon})`}
  {disabled}
  {checked}
/>

<style lang="scss">
  input {
    all: unset;
    pointer-events: all;
    display: inline-block;
    background: var(--secondary);
    height: 24px;
    aspect-ratio: 2 / 1;
    border-radius: 24px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(100%) contrast(50%);
    }

    &:focus::before {
      outline: solid var(--white) 2px;
      outline-offset: 1px;
    }

    &:checked::before {
      content: var(--checkedIcon);
      filter: invert(100%);
      transform: translateX(100%);
    }

    &::before {
      content: var(--uncheckedIcon);
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--white);
      height: inherit;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      transform: translateX(0px);
      transition: transform 0.2s ease;
      outline: none;
    }
  }
</style>
