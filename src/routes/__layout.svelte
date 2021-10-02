<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="App">
	<Navbar />
	<slot />
	<footer>
		<p>
			Clayton Leonard Cook<br />
			Software Engineer & Digital Artist<br />
			<a href="tel:+19897983815">(989)798-3815</a><br />
			<a href="mailto:claytonleonardcook@protonmail.com">claytonleonardcook@protonmail.com</a>
		</p>
	</footer>
</div>

<style>
	.App {
		width: 90%;
		max-width: 650px;
		font-size: 1rem;
		color: white;
		padding: 25px 0;
		margin: 0 auto;
	}
	footer {
		margin-top: var(--spacing);
	}
</style>
