<script>
	import { goto } from '$app/navigation';
	import Fa from 'svelte-fa';
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
	export let title = 'Title';
	export let date = '00-00-0000';
    export let link = 0;
</script>

<article on:click={() => goto(`/blog?link=${link}`)} svelte:prefetch>
	<Fa icon={faAngleRight} />
	<h2>
		{title}
		<span>by Clayton Cook <span class="important date">@ {date}</span></span>
	</h2>
</article>

<style>
    article {
		border-radius: var(--radius);
		background-color: var(--black);
		margin: var(--spacing);
	}

    article {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr auto;
		gap: var(--spacing);
		padding: calc(var(--spacing) / 2);
		cursor: pointer;
	}

    article > :global(svg) {
		display: flex;
		align-self: center;
		font-size: 2em;
	}
	article > h2 > span {
		display: block;
		font-size: 0.5em;
		font-weight: normal;
	}

	span.date {
		white-space: nowrap;
	}
</style>
