<template>
	<div id="about-banner" class="container-fluid">
		<div class="row card-container d-flex align-items-center">
			<div class="col-12 card-sub-container">
				<div class="card">
					<div class="row d-flex card-content-container align-items-center">
						<div class="col-12 col-md-6 img-background">
						</div>
						<div class="col-12 col-md-6">
							<h2><strong>Suzanna Wentzel</strong></h2>
							<h5>(Web) developer</h5>
							<p class="pr-3 mt-5">Hi, I'm Suzanna. This is my portfolio website showing what I do. If you like my work or if you have any questions, please don't hesitate to contact me.</p>
							<p class="pr-3">I'm currently studying Interaction Technology and the educational master at University of Twente, and next to that I have a lot of passion for diy projects, baking, making music and gardening.</p>
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

	.img-background {
		// background-image: url('../../../public/images/me_lessbright.png');
		height: 100%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	

	.card-content-container {
		height: 100%;
	}

	@media only screen and (max-width: 576px) {
	}

	@media only screen and (min-width: 576px) {
	}

	@media only screen and (min-width: 768px) {
		.card-sub-container {
			height: 70%;

			.card {
				height: 100%;
			}
		}
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px){
	}
</style>
