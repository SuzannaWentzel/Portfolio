<template>
	<div class="card container-fluid">
		<div class="row my-3">
			<div class="col-12 col-md-9">
				<h5><strong>{{ project.title }}</strong></h5>
			</div>
			<div class="col-12 col-md-3">
				<span class="badge" :class="project.type.toLowerCase()">{{ project.type }}</span>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-6 justify">
				<div v-if="project.longDescription" class="my-4">
					<p v-for="(alinea, index) in project.longDescription" v-bind:key="index">{{ alinea }}</p>
				</div>
				<div class="my-5 btn-container">
					<a v-if="project.url" class="btn btn-link website" :href="project.url" title="Link to website">
						<i class="fa-solid fa-globe"></i>
					</a>
					<a v-if="project.repository" class="btn btn-link code" :href="project.repository" title="Link to code">
						<i class="fa-solid fa-code"></i>
					</a>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<!-- TODO: ADD IMAGE/VIDEO HERE -->
			</div>
		</div>
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
		box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.5);
		border-left: 0.5rem solid transparent;

		p, h4 {
			background: none;
			box-shadow: none;
		}

		.btn-container {
			display: flex;
			justify-content: left;
			align-content: center;

			a:not(:first-child) {
				margin-left: 1rem;
			}
		}

		.btn.btn-link {
			background-color: var(--black);
			color: white;
			border-radius: 50%;
			box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.8);
			width: 3em;
			height: 3em;
			line-height: 2em;

			&:hover {
				background-color: rgba(5, 2, 3, 0.7);
				text-decoration: none;

				&.website {
					box-shadow: 2px -4px 8px 0 rgba(33, 231, 255, 0.8), -2px 4px 8px 0 rgba(255, 150, 71, 0.8);
				}

				&.code {
					box-shadow: -4px 0px 8px 0 rgba(127, 71, 255, 0.8), 4px 0px 8px 0 rgba(255, 243, 84, 0.8);
				}
			}
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
