<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="App">
	<Navbar />
	<slot />
	<footer>
		<span>Clayton Leonard Cook</span>
		<span>Software Engineer & Digital Artist</span>
		<a href="tel:+19897983815">(989)798-3815</a>
		<a href="mailto:claytonleonardcook@protonmail.com">claytonleonardcook@protonmail.com</a>
	</footer>
</div>

<style>
	.App {
		width: clamp(var(--minWidth), 100%, var(--maxWidth));
		font-size: 1rem;
		color: white;
		margin: 0 auto;
	}
	footer {
		margin-top: var(--spacing);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
	}
</style>
