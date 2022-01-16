<template>
	<div class="projects">
		<div class="container">
			<div class="category-container">
				<div class="row">
					<div class="col">
						<h1>Projects</h1>
					</div>
				</div>
				<div class="row">
					<div :id="'project-card-' + project.slug" v-for="project of allProjects" :key="project.title" v-scroll-to="'#project-card-' + project.slug" @click="enlargeCard(project)" class="pointer project-container col-12" :class="project.enlarged? 'col-md-12': 'col-md-3'">
						<project-card v-if="!project.enlarged" :project="project"></project-card>
						<big-project-card v-if="project.enlarged" :project="project"></big-project-card>
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
	import BigProjectCard from '../components/projects/BigProjectCard.vue';

	export default {
      name: "Projects",
		components: {Footer, ProjectCard, BigProjectCard},
		data () {
			return {
				allProjects: projects.allProjects,
			}
		},
		methods: {
			enlargeCard(project) {
				let index;
				// Remove previously set properties that enlarge those projects of other sections
				for (let i in this.allProjects) {
					Vue.set(this.allProjects[i], 'enlarged', false);
				}

				// set correct project to enlarge
				index = this.allProjects.findIndex(item => item.title == project.title);
				Vue.set(this.allProjects[index], 'enlarged', true);

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
		margin-bottom: 2rem;
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
