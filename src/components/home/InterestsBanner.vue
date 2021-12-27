<template>
	<div id="interests" class="container-fluid">
		<img src="../../../public/images/splatter_4.png" class="splatter"/>
		<div class="row align-items-center">
			<div class="col-0 col-lg-4"></div>
			<div class="col-12 col-lg-8">
				<img class="mindmap" src="../../../public/images/interests.png">
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "InterestsBanner"
    }
</script>

<style scoped lang="scss">
	.mindmap {
		width: 70%;
		max-width: 575px;
	}

	.row {
		height: 100%;
		width: 100%;
	}

	#interests {
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	.splatter {
		height: 98%;
		position: absolute;
		bottom: -10%;
		right: 10%;
		z-index: -1;
	}
</style>
