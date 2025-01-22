<script lang="ts">
	let isFlipped = false;

	function toggleFlip() {
		isFlipped = !isFlipped;
	}
</script>

<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
	<title>Password</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="box-container">
	<div class="box {isFlipped ? 'flipped' : ''}">
		<div class="box-content front">
			Yes, there's a password.
			<input type='text' placeholder='You better get this right...' />
			<button on:click={toggleFlip}><img src="eyes.png" alt="Let's see..."></button>
		</div>
		<div class="box-content back">
			<button on:click={toggleFlip}>Turn back</button>
		</div>
	</div>
</div>

<style>


	.box-container {
		align-self: center;
		border-radius: 5px;
		width: 680px;
		height: 400px;
		perspective: 1000px;
	}

	.box {
		width: 100%;
		height: 100%;
		position: relative;
		text-align: center;
		font-size: 25px;
		font-weight: 600;
		transform-style: preserve-3d;
		transition: transform 0.8s;
		transform: rotateY(0deg);
	}

	.box.flipped {
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}

	.box-content{
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		border-radius: 10px;
	}

	.front{
		background-color: #68b2b3;
	}

	.back{
		background-color: #68b2b3;
	}

	.box-content input {
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

	.box-content input:hover {
		border: 0 solid #038180;
	}

	.box-content input:focus {
		outline: none;
		border: none;
		height: 70px;
		border-bottom: 10px solid #038180;
		background-color: white;
	}

	.box-content button {
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

	.box-content button:active {
		margin-top: 10px;
		box-shadow: 0 0 #035d5c;
	}

	.box-content button img {
		width: 50px;
		height: 50px;
	}

	.back {
		transform: rotateY(180deg);
	}

	@media screen and (max-width: 800px) {
		.box-container {
			width: 100%;
			border-radius: 0;
		}

		.box-container input {
			font-size: 25px;
		}
	}
</style>
