<script>
	import { education, jobs, projects } from '$assets/resume.json';
	import Window from '$components/Window.svelte';
</script>

<svelte:head>
	<title>Clayton Leonard Cook | Resume</title>
</svelte:head>

<h2>Job Experiences</h2>
{#each jobs as { company, client, location, date, duties, technologies }}
	<Window title={`${client}`} date={`${date} | ${location}`} tags={[...technologies, company]}>
		<ul>
			{#each duties as duty}
				<li>{duty}</li>
			{/each}
		</ul>
	</Window>
{/each}

<h2>Projects</h2>
{#each projects as { name, date, description, technologies }}
	<Window title={name} {date} tags={technologies}>
		<p>{description}</p>
	</Window>
{/each}

<h2>Education & Certifications</h2>
{#each education as { institute, date, classes }}
	<Window title={institute} {date} tags={classes} />
{/each}

<style>
	h2 {
		margin: var(--spacing);
	}
</style>
