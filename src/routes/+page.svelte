<script lang="ts">
</script>

<svelte:head>
	<title>Password</title>
	<meta name="description" content="Svelte demo app" />
	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
</svelte:head>

<div class="mainBox">
	Input the password
	<input type='text' placeholder='Password' />
	<button type="submit">Submit</button>
</div>

<style>

	.mainBox {
		display: flex;
		flex-direction: column;
		padding: 20px;
		align-self: center;
		background-color: #68b2b3;
		border-radius: 5px;
		width: 680px;
		height: 400px;
		text-align: center;
		font-size: 30px;
		font-weight: 600;
	}

	.mainBox input {
		margin-bottom: auto;
		margin-top: auto;
		height: 80px;
		font-size: 30px;
		font-family: 'Montserrat', sans-serif;
		border: 0 solid #038180;
		border-radius: 5px;
		background-color: #038180;
		transition-duration: 0.2s;
		transition-timing-function: ease-out;
	}

	.mainBox input:hover {
		border: 0 solid #038180;
	}

	.mainBox input:focus {
		outline: none;
		border: none;
		height: 70px;
		border-bottom: 10px solid #038180;
		background-color: white;
	}

	.mainBox button {
		align-self: center;
		width: 200px;
		height: 70px;
		font-size: 30px;
		font-family: 'Montserrat', sans-serif;
	}
</style>
