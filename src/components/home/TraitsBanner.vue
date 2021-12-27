<template>
	<div id="traits" class="traits-banner container-fluid">
		<img src="../../../public/images/splatter_3.png" class="splatter"/>
		<div class="row align-items-center">
			<div class="col-12 col-lg-8">
				<img class="mindmap" src="../../../public/images/traits.png">
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "TraitsBanner"
    }
</script>

<style scoped lang="scss">
	.mindmap {
		width: 70%;
		max-width: 575px;
	}

	.row {
		width: 100%;
		height: 100%;
	}

	.traits-banner {
		height: 100%;
		position: relative;
		overflow-x: hidden;
	}

	.splatter {
		height: 98%;
		position: absolute;
		top: 2%;
		left: 30%;
		z-index: -1;
	}

</style>
