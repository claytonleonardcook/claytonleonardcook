<script>
	import { page } from '$app/stores';
	import { blogs } from '../blog.json';
	import Window from '../components/Window.svelte';
	let link = $page.query.get('link');
	const { title, date, content, tags } = blogs[link];
</script>

<Window {title} {date} {tags}>
	{#each content as element}
		{@html element}
	{/each}
</Window>
