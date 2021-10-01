<script>
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';

	let hidden = false;
</script>

<nav class="Navbar">
	<ul>
		<li on:click={() => goto('/')}>Home</li>
		<li on:click={() => goto('/resume')}>Resume</li>
		<li on:click={() => goto('/blog')}>Blog</li>
		<li on:click={() => goto('https://calendly.com/claytonleonardcook/30min')}>Calendly</li>
	</ul>
</nav>

<style>
	.Navbar {
		cursor: pointer;
		margin-bottom: var(--spacing);
		width: 100%;
	}

	.Navbar > ul {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto auto auto auto;
		gap: 5px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.Navbar > ul > li {
		display: flex;
		justify-content: center;
		border-radius: 0 0 var(--radius) var(--radius);
		background-color: var(--green);
		padding: calc(var(--spacing) / 4);
		font-size: 1rem;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.Navbar > ul > li:hover {
		text-decoration: underline;
	}
</style>
