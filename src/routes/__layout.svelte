<script>
	import Navbar from "../components/Navbar.svelte";
</script>

<div class="App">
	<Navbar />
	<slot />
	<footer>
		<span>Clayton Leonard Cook</span>
		<span>Software Engineer & Digital Artist</span>
		<span class="contacts">
			<a href="tel:+19897983815">(989)798-3815</a>
			<a href="mailto:claytonleonardcook@protonmail.com">claytonleonardcook@protonmail.com</a>
		</span>
	</footer>
</div>

<style>
	.App {
		width: clamp(280px, 100vw, 800px);
		margin: 0 auto;
		padding: 0 var(--spacing) calc(var(--spacing) / 2) var(--spacing);
		font-size: 1rem;
		color: white;
	}
	footer {
		padding: 0 calc(var(--spacing) / 3);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
</style>
