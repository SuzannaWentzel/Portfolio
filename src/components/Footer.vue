<template>
	<p><span class="copyright">©</span> Suzanna Wentzel, 2022</p>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
	p {
		width: 100%;
		text-align: right;
		bottom: -30px;
		margin-bottom: 0;
		background-image: url('../../public/images/blobs/footer_light.png');
		background-size: cover;
		color: var(--black);
		border-radius: 0px;
		font-size: 0.9rem;
	}

	.copyright {
		font-family: Montserrat, sans-serif;
	}

	@media only screen and (max-width: 576px) { 
		p {
			padding: 0.75rem 1rem;

		}
	}

	@media only screen and (min-width: 576px) {
		p {
			padding: 0.75rem 1rem;
		}
	}

	@media only screen and (min-width: 768px) { }

	@media only screen and (min-width: 992px) { 
		p {
			padding: 0.75rem calc(10%);
		}
	}

	@media only screen and (min-width: 1200px) { }
</style>
