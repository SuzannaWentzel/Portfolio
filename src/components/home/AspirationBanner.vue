<template>
	<div id="aspiration-banner" class="aspiration-banner container-fluid">
		<img src="../../../public/images/splatter_2.png" class="splatter"/>
		<div class="row mx-0">
			<div class="col-lg-6 col-sm-12 aspiration">
				<img src="../../../public/images/aspirations_v2.png" />
			</div>
			<div class="col-lg-6 col-sm-12 px-3 aspiration">
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
	}

	.row {
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		position: absolute;
	}

	@media only screen and (max-width: 576px) {
		.aspiration {
			width: 100%;

			& img {
				width: 50%;
				margin-bottom: 2rem;
			}

			h2 {
				text-align: center;
				margin-bottom: 0.7rem;
			}
		}
	}

	@media only screen and (min-width: 576px) {
		.aspiration {
			& img {
				width: 50%;
				margin-bottom: 3rem;
			}

			& p {
				margin-bottom: 3rem;
			}
		}
	}

	@media only screen and (min-width: 992px) {
		.aspiration {
			& img {
				margin-top: -20%;
				margin-bottom: 0;
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

		.splatter {
			height: 98%;
			position: absolute;
			top: 2%;
			left: -10%;
			z-index: -1;
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
