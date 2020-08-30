<template>
	<div class="projects">
		<div class="container">
			<div class="category-container">
				<div class="row">
					<div class="col">
						<h1>University Projects</h1>
					</div>
				</div>
				<div class="row">
					<div v-for="project of universityProjects" :key="project.title" class="project-container col-12 col-md-3">
						<project-card :project="project"></project-card>
					</div>
				</div>
			</div>
			<div class="category-container">
				<div class="row">
					<div class="col">
						<h1>Personal coding projects</h1>
					</div>
				</div>
				<div class="row">
					<div v-for="project of personalCodingProjects" :key="project.title" class="project-container col-12 col-md-3">
						<project-card :project="project"></project-card>
					</div>
				</div>
			</div>
			<div class="category-container">
				<div class="row">
					<div class="col">
						<h1>Personal creative projects</h1>
					</div>
				</div>
				<div class="row">
					<div v-for="project of personalCreativeProjects" :key="project.title" class="project-container col-12 col-md-3">
						<project-card :project="project"></project-card>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/Footer'
	import projects from '../../public/data/projects';
	import ProjectCard from '../components/projects/ProjectCard'

	export default {
      name: "Projects",
		components: {Footer, ProjectCard},
      data () {
			return {
				universityProjects: projects.universityProjects,
				personalCodingProjects: projects.personalCodingProjects,
				personalCreativeProjects: projects.personalCreativeProjects
			}
      }
	}
</script>

<style scoped lang="scss">
	.projects {
		width: 100%;
		background-image: url('../../public/images/splatters.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		padding-top: 5rem;
	}
	
	h1 {
		margin-bottom: 2rem;
		display: inline-block;
	}

	.project-container {
		margin-bottom: 1rem;
	}

	.category-container {
		margin-top: 5rem;
	}

	.container {
		padding-bottom: 2rem;
	}
	
	.col {
		text-align: left;
	}
</style>
