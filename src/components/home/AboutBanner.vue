<template>
	<div id="about-banner" class="banner about-banner card-container">
		<div class="card">
			<div class="card-content-container">
				<div class="img-container">
					<img src="../../../public/images/me_topicus.jpeg"/>
				</div>
				<div class="text">
					<h2><strong>Suzanna Wentzel</strong></h2>
					<h5>(Web) developer</h5>
					<p>Hi, I'm Suzanna. This is my portfolio website showing what I do. If you like my work or if you have any questions, please don't hesitate to contact me.</p>
					<p>I'm currently a full-stack software developer at Topicus (Education). Next to that I have a lot of passion for small programming projects, diy projects, baking, making music, gardening, sporting, going outside and playing board games.</p>
					<p>What I love about development is overcoming challenges (it's like solving puzzles) and seeing the results immediately.</p>
					<!-- <button class="btn btn-primary mb-3">Send me a message</button> -->
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
	.card-container {
		min-height: 100vh;
		margin-right: 0;
	}

	.img-container {
		background-image: url('../../../public/images/blobs/blob_2.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		display: flex;
		justify-content: center;

		img {
			border-radius: 1.5rem;
			width: 100%;
			max-width: 250px;
			// box-shadow: 0 10px 30px -5px var(--lemon), 10px 0 30px -5px var(--orange), 0 -10px 30px -2px var(--magenta), -10px 0 30px 0 var(--cyan);
		}
	}

	.card-content-container {
		height: 100%;
	}

	.card {
		padding: 0;
	}

	@media only screen and (max-width: 576px) {
		.img-container {
			width: 100%;

			img {
				margin-top: 2rem;
				margin-bottom: 3rem;
			}
		}

		.text {
			padding: 1rem;
			margin-bottom: 2rem;
		}

		.card {
			box-shadow: none;
		}
	}

	@media only screen and (min-width: 576px) {
		.about-banner {
			display: flex;
			align-items: center;
			padding: 1rem;

			.img-container {
				padding: 2rem 1rem;
			}

			.text {
				padding: 2rem 1rem 1rem 1rem;

				p:first-of-type {
					margin-top: 1rem;
				}
			}
		}
	}

	@media only screen and (min-width: 768px) { 
		.card-content-container {
			display: flex;
			align-items: center;
			.img-container {
				width: 50%;
				img {
					width: 80%;
				}
			}
			.text {
				width: 50%;
				padding: 2rem 1rem;

				p:last-of-type {
					margin-bottom: 0;
				}

				p:first-of-type {
					margin-top: 3rem;
				}
			}
		}

	}

	@media only screen and (min-width: 992px) {
		.card-container {
			padding: 0;
			.text {
				padding: 2rem 3rem;
			}
			
			img {
				margin: 3rem 0;
			}
		}
	}

	@media only screen and (min-width: 1200px) {	}
</style>
