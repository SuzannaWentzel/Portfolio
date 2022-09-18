<template>
	<div id="about-banner" class="container-fluid">
		<div class="row content-container d-flex align-items-center">
			<div class="col-12">
				<div class="row">
					<div class="col-12">
						<h1>Highlighted projects</h1>
					</div>
				</div>
				<div class="row my-5">
					<div class="col-md-4 mb-3" v-for="project of filteredProjects" :key=project.title>
						<div @click="goToProject(project)">
							<project-card :project="project"></project-card>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 d-flex justify-content-end">
						<button class="btn btn-primary mb-3" @click="goToProjects()">See more projects</button>
					</div>
				</div>
			</div>
			
		</div>
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
	#about-banner {
		width: 100%;
		min-height: 100vh;
		position: relative;
		overflow: hidden;

		h1 {
			text-align: left;
		}
	}

	.content-container {
		min-height: 100vh;
		margin-right: 0;
	}

	@media only screen and (max-width: 576px) {

	}

	@media only screen and (min-width: 576px) {

	}

	@media only screen and (min-width: 768px) {
		button {

		}
	}

	@media only screen and (min-width: 992px) {

	}

	@media only screen and (min-width: 1200px){

	}
</style>
