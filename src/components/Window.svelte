<script>
	import Fa from 'svelte-fa';
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
	export let title = '';
	export let date = '00-00-0000';
	export let tags = ['default'];
	export let expanded = true;
</script>

<article>
	<div on:click={() => (expanded = !expanded)}>
		<Fa icon={faAngleRight} rotate={expanded ? '90' : '0'} />
		<h2>
			{title}
			<span class="important date">@ {date}</span>
		</h2>
	</div>
	{#if expanded}
		<hr />
		<div class="window-content">
			<slot />
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	{/if}
</article>

<style>
	article {
		border-radius: var(--radius);
		background-color: var(--black);
		margin: var(--spacing);
	}
	article :global(img),
	article :global(audio),
	article :global(iframe),
	article :global(video) {
		display: flex;
		justify-self: center;
		width: clamp(calc(var(--minWidth) / 2), 100%, var(--maxWidth));
	}
	article :global(img),
	article :global(iframe),
	article :global(video) {
		height: auto;
	}
	article :global(iframe),
	article :global(video) {
		aspect-ratio: 1/1;
	}
	article > div:first-child {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr;
		gap: var(--spacing);
		padding: calc(var(--spacing) / 2);
		cursor: pointer;
	}
	article > div:first-child > :global(svg) {
		display: flex;
		align-self: center;
		font-size: 2em;
	}
	article > div:first-child > h2 > span {
		display: block;
		font-size: 0.5em;
		font-weight: normal;
	}
	div.window-content {
		padding: calc(var(--spacing) / 2);
	}
	div.window-content > :global(*) {
		margin: 0 auto calc(var(--spacing) / 2) auto;
	}
	article > div > h2 {
		width: 90%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	div.tags {
		display: flex;
		overflow: scroll;
		padding: 0 calc(var(--spacing) / 2);
		-webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 1) 98%, transparent 100%);
		mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 1) 98%, transparent 100%);
	}
	div.tags::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	span.tag {
		margin: 0 5px;
		text-align: center;
		white-space: nowrap;
		width: fit-content;
		padding: 5px;
		border-radius: var(--radius);
		background-color: var(--green);
	}
</style>
