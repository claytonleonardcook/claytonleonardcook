<script>
	import { blogs } from '../blog.json';
	import BlogLink from '../components/BlogLink.svelte';
</script>

<svelte:head>
	<title>Clayton Leonard Cook | Blog</title>
</svelte:head>

{#each blogs as { title, date, tags }, i}
	<BlogLink title={title} date={date} tags={tags} link={i} />
{/each}
