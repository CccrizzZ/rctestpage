<template>
	
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<DripHub msg="ROBERTO CAVALLI"/>
		<SideBar/>


	</div>

</template>


<script>
	import DripHub from './components/DripHub.vue'
	import SideBar from './components/SideBar.vue'

	export default {
		name: 'App',
		components: {
			DripHub,
			SideBar
		}
	}
</script>


<style>
	body {
		margin: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
	}

	.voices{
		margin-top: 5vh;
	}
	.modal.show .modal-dialog {
		margin-top: 10vh;
	}
	.modal-body{
		background-color: #111111;
	}
	.modal-header{
		background-color: #111111;
	}

</style>
