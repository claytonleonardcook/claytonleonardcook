<script>
	import { goto } from '$app/navigation';
</script>

<nav>
	<ul>
		<li on:click={() => goto('/')}>Home</li>
		<li on:click={() => goto('/resume')}>Resume</li>
		<li on:click={() => goto('/blogs')}>Blog</li>
		<li on:click={() => goto('https://calendly.com/claytonleonardcook/30min')}>Calendly</li>
	</ul>
</nav>

<style>
	nav {
		cursor: pointer;
		position: absolute;
		top: 0;
		width: clamp(var(--minWidth), 100%, var(--maxWidth));
	}

	nav > ul {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto auto auto auto;
		gap: 5px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	nav > ul > li {
		display: flex;
		justify-content: center;
		border-radius: 0 0 var(--radius) var(--radius);
		background-color: var(--green);
		padding: calc(var(--spacing) / 4);
		font-size: 1rem;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	nav > ul > li:hover {
		text-decoration: underline;
	}
</style>
