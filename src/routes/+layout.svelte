<script lang="ts">
	let { children } = $props();
</script>

<div class="app">
	<slot />
</div>

<style>
	:global(body) {
		background-color: #b5d9d7;
		color: #014b4c;
		padding: 0;
		margin: 0;
		overflow: hidden;
		font-family: 'Lato',sans-serif;
	}

	.app {
		display: flex;
		justify-content: center;
		height: 100vh;
	}
</style>
