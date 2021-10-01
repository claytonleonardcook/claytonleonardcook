<script>
	import Fa from 'svelte-fa';
	import { faTimes } from '@fortawesome/free-solid-svg-icons';
	export let title = '';
	export let date = '00-00-0000';
	export let tags = ['default'];
	export let expanded = true;
</script>

<article class="Window">
	<span class="window-bar" on:click={() => (expanded = !expanded)}>
		<div>
			<Fa icon={faTimes} rotate={expanded ? '45' : '0'} />
		</div>
		{#if !expanded}
			<h2>{title}</h2>
		{/if}
	</span>
	{#if expanded}
		<hr />
		<div class="window-content">
			<div>
				<h2>{title}</h2>
				<span>by Clayton Cook <span class="important">@ {date}</span></span>
			</div>
			<slot />
			<ul>
				<li>Tags:</li>
				{#each tags as tag}
					<li class="tag">{tag}</li>
				{/each}
			</ul>
		</div>
	{/if}
</article>

<style>
	.Window {
		display: grid;
		border-radius: var(--radius);
		background-color: var(--black);
		margin: calc(var(--spacing)/3) 0;
	}
	.Window :global(img),
	.Window :global(audio),
	.Window :global(iframe),
	.Window :global(video) {
		display: block;
		width: clamp(250px, 100%, 500px);
		margin: 0 auto;
	}
	.Window :global(img),
	.Window :global(iframe),
	.Window :global(video) {
		height: auto;
	}
	.Window :global(iframe),
	.Window :global(video) {
		aspect-ratio: 1/1;
	}
	span.window-bar {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr;
		gap: 5px;
		padding: calc(var(--spacing) / 2);
	}
	span.window-bar > div {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		border-radius: 50%;
		height: var(--spacing);
		width: var(--spacing);
		padding: calc(var(--spacing) / 4);
		background-color: var(--green);
	}
	span.window-bar > h2 {
		display: flex;
		justify-content: right;
		align-self: center;
		height: -moz-fit-content;
		height: fit-content;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	div.window-content {
		padding: calc(var(--spacing) / 2);
	}
	div.window-content > :global(*) {
		margin: 0 auto calc(var(--spacing) / 2) auto;
	}
	div.window-content > div {
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
	div.window-content > ul {
		padding: 0;
		list-style: none;
	}
	li {
		display: inline-block;
		margin: 0 5px 5px 0;
		padding: 5px;
		width: -moz-fit-content;
		width: fit-content;
	}
	li.tag {
		height: -moz-fit-content;
		height: fit-content;
		border-radius: var(--radius);
		background-color: var(--green);
	}
</style>
