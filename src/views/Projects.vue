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
					<div :id="'project-card-' + project.slug" v-for="project of universityProjects" :key="project.title" v-scroll-to="'#project-card-' + project.slug" @click="enlargeCard(project, 'university')" class="pointer project-container col-12" :class="project.enlarged? 'col-md-12': 'col-md-3'">
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
					<div :id="'project-card-' + project.slug" v-for="project of personalCodingProjects" :key="project.title" v-scroll-to="'#project-card-' + project.slug" @click="enlargeCard(project, 'personalCode')" class="pointer project-container col-12" :class="project.enlarged? 'col-md-12': 'col-md-3'">
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
					<div :id="'project-card-' + project.slug" v-for="project of personalCreativeProjects" :key="project.title" v-scroll-to="'#project-card-' + project.slug" @click="enlargeCard(project, 'personalCreative')" class="pointer project-container col-12" :class="project.enlarged? 'col-md-12': 'col-md-3'">
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
	import ProjectCard from '../components/projects/ProjectCard';
	import Vue from 'vue';

	export default {
      name: "Projects",
		components: {Footer, ProjectCard},
		data () {
			return {
				universityProjects: projects.universityProjects,
				personalCodingProjects: projects.personalCodingProjects,
				personalCreativeProjects: projects.personalCreativeProjects
			}
		},
		methods: {
			enlargeCard(project, type) {
				let index;
				// Remove previously set properties that enlarge those projects of other sections
				for (let i in this.universityProjects) {
					Vue.set(this.universityProjects[i], 'enlarged', false);
				}
				for (let i in this.personalCodingProjects) {
					Vue.set(this.personalCodingProjects[i], 'enlarged', false);
				}
				for (let i in this.personalCreativeProjects) {
					Vue.set(this.personalCreativeProjects[i], 'enlarged', false);
				}

				// set correct project to enlarge
				switch (type) {
					case 'university': 
						// Get index of project
						index = this.universityProjects.findIndex(item => item.title == project.title)
						// Set property of enlarging this project
						Vue.set(this.universityProjects[index], 'enlarged', true);
						break;
					case 'personalCode':
						// Get index of project
						index = this.personalCodingProjects.findIndex(item => item.title == project.title)
						// Set property of enlarging this project
						Vue.set(this.personalCodingProjects[index], 'enlarged', true);
						break;
					case 'personalCreative':
						// Get index of project
						index = this.personalCreativeProjects.findIndex(item => item.title == project.title)
						// Set property of enlarging this project
						Vue.set(this.personalCreativeProjects[index], 'enlarged', true);						
						break;
				}
				// TODO: CLEAN THIS FUNCTION
				// TODO: CREATE ENLARGED CARD WITH MORE INFO
				// TODO: MAKE SCROLLING LESS WONKY
				// TODO: ADD MORE DATA PER PROJECT
				// TODO: ADD MORE PROJECTS
				// TODO: UPDATE STYLE
				// TODO: LINK ONCLICK VIA CARD TO FIT BETTER
			}
		}
	}
</script>

<style scoped lang="scss">
	.projects {
		width: 100%;
		// background-image: url('../../public/images/splatters.png');
		// background-size: cover;
		// background-repeat: no-repeat;
		// background-position: center;
		// background-attachment: fixed;
		padding-top: 5rem;
	}
	
	h1 {
		margin-bottom: 3rem;
		display: inline-block;
	}

	.project-container {
		margin-bottom: 1rem;
	}

	.category-container {
		margin-top: 5rem;
		margin-bottom: 7rem;
	}

	.container {
		padding-bottom: 2rem;
	}
	
	.col {
		text-align: left;
	}
</style>
