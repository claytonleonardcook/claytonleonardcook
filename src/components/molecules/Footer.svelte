<script lang="ts">
  import type {CollectionEntry} from 'astro:content';
  export let className: string = '';
  export let links: CollectionEntry<'links'>[];

  const usefulLinks = links.filter(({slug}) => /useful/i.test(slug));
  const socialLinks = links.filter(({slug}) => /social/i.test(slug));
</script>

<footer class={className}>
  <section class="links">
    <section class="useful">
      <h1 class="fs-md">Useful Links</h1>
      <ul>
        {#each usefulLinks as { data: { title, url } }}
          <li>
            <a href={url} target="_blank">{title}</a>
          </li>
        {/each}
      </ul>
    </section>
    <section class="social">
      <h1 class="fs-md">Social Media</h1>
      <ul>
        {#each socialLinks as { data: { title, url } }}
          <li>
            <a href={url} target="_blank">{title}</a>
          </li>
        {/each}
      </ul>
    </section>
  </section>
  <section class="information">
    <span>Clayton Leonard Cook</span>
    <br />
    <span>Software Engineer</span>
  </section>
</footer>

<style lang="scss">
  footer {
    display: flex;
    gap: 16px;
    flex-direction: column;
    background: var(--primary);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 8px 16px;

    section {
      display: flex;
    }

    > .links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      > section {
        display: flex;
        flex-direction: column;
        > ul {
          list-style: none;
        }
      }
    }

    > .information {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
</style>
