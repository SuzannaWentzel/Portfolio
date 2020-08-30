<template>
	<div class="card">
		<h4>{{ project.title }}</h4>
		<p v-if="project.shortDescription">{{ project.shortDescription }}</p>
	</div>
</template>

<script>
	export default {
		name: "ProjectCard",
		props: {
			project: Object
		}
	}
</script>

<style scoped lang="scss">
	.card {
		padding: 1rem;
		background: rgba(255, 255, 255, 0.8);
		border: none;
		box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);

		p, h4 {
			background: none;
			box-shadow: none;
		}
	}
</style>
