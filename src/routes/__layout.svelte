<script>
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<div>
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	div {
		width: clamp(var(--minWidth), 100%, var(--maxWidth));
		font-size: 1rem;
		color: white;
		padding: 25px 0;
		margin: 0 auto;
	}
</style>
