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
		padding: 0.75rem calc(10% + 1rem) 0.75rem;
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
</style>
