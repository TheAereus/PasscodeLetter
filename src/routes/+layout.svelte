<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Password</title>
</svelte:head>

<div class="app">
	{@render children?.()}
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
		align-items: center;
		height: 100vh;
	}
</style>
