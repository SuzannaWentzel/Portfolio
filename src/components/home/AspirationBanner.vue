<template>
	<div id="aspiration-banner" class="aspiration-banner container-fluid">
		<img src="../../../public/images/splatter_2.png" class="splatter"/>
		<div class="row mx-0 align-items-center">
			<div class="col col-12 col-lg-6 aspiration">
				<img src="../../../public/images/aspirations_v2.png" />
			</div>
			<div class="col col-12 col-lg-6 px-3 aspiration">
				<h2>What will I become?</h2>
				<p>Not sure! These ideas are what linger in my head, but everything can change! I still have studies to finish and I already have a very interesting job, who knows?</p>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "AspirationBanner"
    }
</script>

<style lang="scss" scoped>
	.aspiration-banner {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	h2, p {
		width: 100%;
		text-align: left;
	}

	.row {
		height: 100%;
	}

	.splatter {
		height: 98%;
		position: absolute;
		top: 2%;
		left: -10%;
		z-index: -1;
	}

	@media only screen and (max-width: 576px) {
		.aspiration {
			& img {
				width: 50%;
			}

			h2 {
				text-align: center;
				margin-bottom: 0.7rem;
			}

			.row {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}

			.col {
				height: auto;
			}
		}
	}

	@media only screen and (min-width: 576px) {
		.aspiration {
			& img {
				width: 50%;
			}

			& p {
				margin-bottom: 3rem;
			}
		}
	}

	@media only screen and (min-width: 992px) {
		.aspiration {
			& img {
				width: 80%;
			}

			& p {
				text-align: left;
				padding-right: 3rem;
				margin-bottom: 0;
			}

			& h2 {
				text-align: left;
				margin-bottom: 1.2rem;
			}
		}
	}

	@media only screen and (min-width: 1200px){
		.aspiration{
			& p {
				padding-right: 7rem;
			}
		}
	}
</style>
