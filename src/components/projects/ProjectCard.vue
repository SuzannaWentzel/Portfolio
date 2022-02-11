<template>
	<div class="card" :class="[{'border-left': !project.enlarged}, project.type.toLowerCase()]">
		<h5><strong>{{ project.title }}</strong></h5>
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
		box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.5);
		min-height: 8rem;

		&:hover {
			box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.9);
		}

		&.border-left {
			border-left: 0.5rem solid black !important;

			&.personal {
				border-color: var(--cyan) !important;
			}

			&.university {
				border-color: var(--magenta) !important;
			}

			&.creative {
				border-color: var(--orange) !important;
			}
		}
	}
</style>
