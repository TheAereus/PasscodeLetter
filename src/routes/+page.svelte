<script lang="ts">
</script>

<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
	<title>Password</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mainBox">
	Yes, there's a password.
	<input type='text' placeholder='You better get this right...' />
	<button type="submit"><img src="eyes.png" alt="Let's see..."></button>
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
		font-size: 25px;
		font-weight: 600;
	}

	.mainBox input {
		margin-top: 50px;
		margin-bottom: 25px;
		height: 80px;
		font-size: 30px;
		font-family: 'Lato', sans-serif;
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
		padding: 10px;
		font-size: 30px;
		font-family: 'Lato', sans-serif;
		border: none;
		cursor: pointer;
		box-shadow: 0 10px 0  #035d5c;
		background-color: #038180;
		transition-duration: 0.2s;
	}

	.mainBox button:active {
		margin-top: 10px;
		box-shadow: 0 0 #035d5c;
	}

	.mainBox button img {
		width: 50px;
		height: 50px;
	}

	@media screen and (max-width: 800px) {
		.mainBox {
			width: 100%;
			border-radius: 0;
		}

		.mainBox input {
			font-size: 25px;
		}
	}
</style>
