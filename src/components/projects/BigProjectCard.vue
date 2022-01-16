<template>
	<div class="card container-fluid">
		<div class="row">
			<div class="col-12 col-md-9">
				<h5><strong>{{ project.title }}</strong></h5>
			</div>
			<div class="col-12 col-md-3">
				<span class="badge" :class="project.type.toLowerCase()">{{ project.type }}</span>
			</div>
		</div>
		<p v-if="project.shortDescription">{{ project.shortDescription }}</p>
	</div>
</template>

<script>
	export default {
		name: "BigProjectCard",
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
		border-left: 0.5rem solid transparent;

		&:hover {
			box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.7);
		}

		p, h4 {
			background: none;
			box-shadow: none;
		}

		.badge {
			font-weight: normal;
			// box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);
			padding: 0.25rem 0.5rem;

			&.personal {
				background-color: var(--cyan);
			}

			&.university {
				background-color: var(--magenta);
			}

			&.creative {
				background-color: var(--orange);
			}
		}
	}

	@media only screen and (max-width: 576px) {
		.badge {
			margin-bottom: 0.5rem;
		}
	}

	@media only screen and (min-width: 576px) {
		.badge {
			margin-bottom: 0.5rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.badge {
			float: right;
			margin-bottom: 0;
		}
	}
</style>
