<template>
	<div id="interests" class="container-fluid">
		<img src="../../../public/images/splatter_4.png" class="splatter"/>
		<div class="row">
			<div class="col-lg-4 col-sm-0"></div>
			<div class="col-lg-8 col-sm-12">
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
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
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
		left: -10%;
		z-index: -1;
	}
</style>
