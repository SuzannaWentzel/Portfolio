<template>
	<div id="project-banner" class="banner content-container">
		<h1>Highlighted projects</h1>
		<div class="project-container">
			<div v-for="project of filteredProjects" :key=project.title class="project__item">
				<div @click="goToProject(project)">
					<project-card :project="project"></project-card>
				</div>
			</div>
		</div>
		<button class="btn btn-primary mt-3" @click="goToProjects()">See more projects</button>
	</div>
</template>

<script>
	import projects from '../../../public/data/projects';
	import ProjectCard from '../../components/projects/ProjectCard.vue'


	export default {
      name: "AboutBanner",
		components: {ProjectCard},
		data () {
			return {
				allProjects: projects.allProjects,
				filteredProjects: []
			}
		},
		created() {
			let count = 0;
			for (let project of this.allProjects) {
				if (project.starred && count !== 3) {
					this.filteredProjects.push(project);
					count += 1;
				}
			}
		},
		methods: {
			goToProjects() {
				this.$router.push('projects');
			},
			goToProject(project) {
				this.$router.push({name: 'Projects', params: { projectSlug: project.slug }});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-container {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	h1 {
		width: 100%;
		text-align: left;
	}

	@media only screen and (max-width: 576px) {
		.content-container {
			padding: 0 1rem;

			.project-container {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				width: 100%;
			}
		}
	}

	@media only screen and (min-width: 576px) {
		.content-container {
			min-height: 100vh;
			padding: 0 1rem;

			button {
				display: block;
				width: max-content;
				align-self: end;
			}

			h1 {
				margin-bottom: 3rem;
			}
		}

		.project-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;

			.project__item:last-of-type {
				display: none;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		.project-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1rem;

			.project__item:last-of-type {
				display: block;
			}
		}

	}

	@media only screen and (min-width: 992px) {
		.content-container {
			padding: 0;
			.project-container {
				gap: 2rem;
			}
		}
	}

	@media only screen and (min-width: 1200px){

	}
</style>
