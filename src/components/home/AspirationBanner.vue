<template>
	<div id="aspiration-banner" class="aspiration-banner container-fluid">
		<div class="row mx-0">
			<div class="col-lg-6 col-sm-12 aspiration">
				<img src="../../../public/images/aspirations_v2.png" />
			</div>
			<div class="col-lg-6 col-sm-12 px-3 aspiration">
				<h2>What will I become?</h2>
				<p>Not sure! The ideas here are what linger in my head, but everything can change! I still have studies to finish and I already have a very interesting job, who knows?</p>
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
	}

	.row {
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		position: relative;
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
	}

	@media only screen and (min-width: 1200px){
		.aspiration{
			& p {
				padding-right: 7rem;
			}
		}
	}
</style>
