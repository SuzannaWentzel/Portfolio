<template>
	<div id="about-banner" class="container-fluid">
		<div class="row card-container d-flex align-items-center">
			<div class="col-12 card-sub-container">
				<div class="card">
					<div class="row d-flex card-content-container align-items-center">
						<div class="col-12 col-md-6 img-container">
							<img src="../../../public/images/suzanna.jpeg"/>
						</div>
						<div class="col-12 col-md-6 justify">
							<h2><strong>Suzanna Wentzel</strong></h2>
							<h5>(Web) developer</h5>
							<p class="pr-3 mt-5">Hi, I'm Suzanna. This is my portfolio website showing what I do. If you like my work or if you have any questions, please don't hesitate to contact me.</p>
							<p class="pr-3">I'm currently studying Interaction Technology and the educational master at University of Twente, and next to that I have a lot of passion for diy projects, baking, making music, gardening, and playing board games.</p>
							<p class="pr-3">What I love about development is overcoming challenges (it's like solving puzzles) and seeing the results immediately.</p>
							<!-- <button class="btn btn-primary mb-3">Send me a message</button> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "AboutBanner"
    }
</script>

<style lang="scss" scoped>
	#about-banner {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	.card-container {
		height: 100%;
	}

	.img-container {
		img {
			border-radius: 0.25rem;
			width: 100%;
			margin-bottom: 1rem;
			box-shadow: 0 10px 30px -5px var(--lemon), 10px 0 30px -5px var(--orange), 0 -10px 30px -2px var(--magenta), -10px 0 30px 0 var(--cyan);
		}
	}

	.card-content-container {
		height: 100%;
	}

	@media only screen and (max-width: 576px) {
		.img-container {
			img {
				margin-top: 2rem;
				margin-bottom: 3rem;
			}
		}
	}

	@media only screen and (min-width: 576px) {
		.img-container {
			img {
				margin-top: 3rem;
				margin-bottom: 5rem;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		.card-sub-container {
			height: 70%;

			.card {
				height: 100%;
			}
		}

		.img-container{
			padding: 2rem;
		}
	}

	@media only screen and (min-width: 992px) {
		.img-container {
			padding: 3rem;
		}
	}

	@media only screen and (min-width: 1200px){
		.img-container {
			padding: 5rem;
		}
	}
</style>
