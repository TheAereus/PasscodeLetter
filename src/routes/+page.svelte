<script lang="ts">
	let isFlipped = false;
	let inputPassword = "";
	let wrongPW = false;
	const passwords = ["bounty", "waves", "simba"];
	const prompts = [{title:"Yes, there is a password", placeholder:"You better get this right...", hint:"my first pick from a minis bag"},
					 {title:"Yes, there is another password", placeholder:"You better get this right too!", hint:"first song you'd ever heard me sing"},
					 {title:"Yes, this is the last password", placeholder:"You better not get this wrong!!", hint:"g'nighty _____ ~💙"}];
	let currentScreen = 0;
	let showHint = false;
	let audio;

	function toggleHint(){
		showHint = !showHint;
	}

	function toggleFlip() {
		console.log(inputPassword);
		console.log(passwords[currentScreen]);
		if (inputPassword.toUpperCase() === passwords[currentScreen].toUpperCase()) {
			if (currentScreen < passwords.length - 1) {
				showHint = false;
				wrongPW = false;
				setTimeout(function () {
					currentScreen++;
					inputPassword = "";
				}, 600);
			} else {
				isFlipped = true;
			}
		} else {
			wrongPW = true;
		}
	}
</script>

<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
</svelte:head>

<div class="box-container">
	<div class="box {isFlipped ? 'flipped' : ''}">
		{#each passwords as _, index}
			<div class="box-content {currentScreen === index ? 'active' : ''}">
				<div class="hint {showHint ? 'active' : ''}">
					{prompts[index].hint}
				</div>
				<p class="title">{prompts[index].title}</p>
				<input type="text" placeholder={prompts[index].placeholder} bind:value={inputPassword} />
				<p class="subtext"><i>not</i> sensitive to capital letters</p>
				<div class="buttons">
					<button id="hint-button" on:click={toggleHint}>
						<img src="lightbulb.png" alt="hint">
					</button>
					<button on:click={toggleFlip}>
						▶
					</button>
				</div>
				<p class="error-message {wrongPW ? 'active' : ''}">no way you got it wrong bc</p>
			</div>
		{/each}
		<div class="box-content back">
			<p>
				HAPPY FUCKING FIVE YEARS MR PEANITS BOY<br>
				<br>
				Nice job getting past those stupid passwords lolll. I know this isn't much, but I hope this little gesture puts a huge smile on your face anyway.<br>
				<br>
				Asad. You fucking dumbass. I wish I could put into words just how much I feel for you. Just how damn much you mean to me. I wish you knew how every little thing in the world somehow makes me think of you. How you've been the muse for every piece of writing I've penned since I met you. For every word I've woven into shitty poetry, and for every little late night thought I've spilled onto paper. I wish you knew how much I want to hold your face; how much I crave to hear your heart beat in your chest again. I wish you knew how comfortable and off guard I can feel with you. How simple it is to talk to you. How much I want to keep you locked inside my heart forever. How much I want to look into your eyes and in that silence, just have you feel it all. The depth, the weight of feelings I don't know how to put in words.<br>
				<br>
				It's crazy to think how different things would have been if I just never interacted in that group chat. If I never dmed you. We would have stayed nothing more than just names on a screen. Just two people who shared the same space but never truly crossed paths. But somehow, little things led to the other, and somehow, we ended up here, five years later, intertwined in ways I never could have imagined back then. It's insane how these little moments shape the biggest parts of our lives. And I’m so glad that you were a product of one of these insane little moments. That the universe let me have you.<br>
				<br>
				Half of a decade. That is a CRAZY long time if you think about it. THATS 261 TOP OF THE JUMMAHS. You've been a constant in my life, watched me grow and stood by me through so so much. You were there before I got braces, during, and after. You were there when I moved schools, not once but twice. You were there when I moved cities. You were the one person who watched me make new friends and lose old ones. Hell, you watched me go from level 1 to fucking bazillion in apex. You were there for so much. For five years, I’ve shared everything with you. All day, every day. And somehow, no matter what was happening, you always listened. You're the one person I genuinely miss every time I'm having fun. You're the one person that knows every little detail, every little move I make. You know my every weakness. You know exactly what hurts me. And you know exactly what makes me happiest. And you're the one person in the world who I can trust with anything and everything.<br>
				<br>
				I was there when you got that birdie magneto. I was there when sneaking out in the middle of the night was the craziest thing for you. I was there when you got your green cycle. I was there when you were training to become the crazy tennis champion boy you are today. I was there when you got your first car. And I was there when you sold it. I was there when you graduated. I was there when you moved out. I was always there; I was always cheering you on. I will always be cheering you on. We know so much about each other. Not even intentionally, just through time, through love, through simply being. And I think that makes this, whatever we are, all the more special. You'll always have me, even in silence, even if we ever grow apart. I'll always be there, quietly hoping you're living the life that YOU want. I'll always be wishing on your happiness. I'll always remember you at 11:11.<br>
				<br>
				We've seen so many of each other’s stupid phases. You wouldn't used to go to bed until I "tucked you in" with that little g’nighty thing. I've seen your :) phase. I've seen your Casey obsessed phase. You've seen god so many embarrassing phases of mine. You’ve given me all these stupid nicknames. I’ll always be your wotr botl. Remember how you used to do the boop thing to me after pissing me off on purpose? We’ve gone from nose boops to 5 second hugs to cheek kisses to some FREAKY shit lmao. And now for some reason you know exactly what my body looks like. And I do yours.<br>
				<br>
				I wonder how many hours we've spent talking. Time really does seem to fly with you lol. I wonder how many times you've looked at a pretty night sky and thought of me. And how many times I looked at a nice car and thought of you. I wonder how many nights we've stayed awake together. I wonder how much time I've spent waiting for you to text me back (lol). I wonder how many times you've randomly thought about me during the day. I wonder if you still miss me when it rains. If you think of me in quiet moments, or even in loud ones. I wonder how many times I've dreamt about you.<br>
				<br>
				I'll admit it, I've lost a shit ton of sleep over you. I chose you over sleep, I chose you over studying, but I think I still ended up just fine. I've pulled so many fucking strings to be able to keep talking to you LOL. I've talked to you on like 10 different devices over the years but it was so worth it man. Every night, every match of apex, every little hug, every filmi line you'd send and instantly delete. I've talked to you from all these different places. I remember I used to find quiet corners in daawats so I could talk to you in peace. I've texted you from so many different corners of the world. And I've texted you from WAY too many bathrooms. You've always been the one stupid person I've found a way to sneak away for, just to get a little more time with you. You make me incredibly happy. For the longest time, you've been my safe space. You just get me in a way no one else does. We've just talked about so much, haven't we? Somehow, we still haven't ran out. I hope we never do. You're just so much to me now, you're like part of my routine, part of every day, I literally cannot imagine a life with you not in it. I can't imagine a life where I don't have you to turn to, to share every little step I take.<br>
				<br>
				You're the real reason I ever started playing apex. You're the reason I brush my teeth in the shower. You're the reason I even bother looking at number plates. You're the reason I've started to like my eyes and my hip dips. You're the one person I think of when I see pretty shades of green. You've been the reason for so many smiles on my face. You're my favorite. You're my favorite tennis champion. You're my favorite reckless driver and car geek. You're my favorite wannabe singer. You're my favorite pinstripe enthusiast and suspenders wearer. You're my favorite charsi. You're my favorite shawarma inhaler. You're my favorite coffee nerd. You're my favorite watch collector. You're my favorite night owl and you're my favorite anorexic. You're my favorite heightened olfactory senses boy. Whatever there is on the list, you fit the mark for being my favorite at it.<br>
				<br>
				When you said, 'I'll be here a while, for a few more birthdays if you don't mind,' I held onto that. I hope it’s true. I hope you stay. I hope I get to keep you for the longest while. I hope you keep making me smile the way you do right now, keep giving me butterflies the way you always have. I hope you keep messing with me and pissing me off, and then try making up for it afterwards. You stupid boy. I can't believe it's been so long, and yet somehow, never long enough. I can't believe how much is about to change in this next year, how much life will pull me forward, ready or not. But through it all, I hope I can keep holding on to you. I hope you’ll always be there to hear about my days, to laugh at my nonsense, to make my world feel a little less heavy.<br>
				और अगर रही ज़िंदगी, तो मिलेंगे दोबारा।.<br>
				<br>
				Happy five years, dumbass. Here’s to half a decade of you driving me insane, of me missing you more than I should, of making me blue, but the good kind.<br>
			</p>
			<button on:click={function () {audio.play()}}>
				here's a kiss on the cheek
			<audio src="kiss.mp3" bind:this={audio}></audio>
			</button>
		</div>
	</div>
</div>

<style>


	.box-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		perspective: 1000px;
	}

	.box {
		backface-visibility: hidden;
		display: flex;
		width: 680px;
		height: 400px;
		border-radius: 5px;
		position: relative;
		text-align: center;
		font-size: 25px;
		font-weight: 600;
		transform-style: preserve-3d;
		transition: transform 0.8s ease-in-out;
		transform: rotateY(0deg);
	}

	.box.flipped {
		transform: rotateY(180deg);
		animation: grow 2s ease-in-out 0.8s forwards;
	}

	.box.flipped button{
		width: auto;
		margin-top: -25px;
		margin-bottom: 25px;
		color: black;
	}

	.box.flipped button:active {
		margin-top: -15px;
		margin-bottom: 15px;
		box-shadow: 0 0 #035d5c;
	}

	@keyframes grow {
		0% {
			height: 400px;
		}
		100% {
			height: 85vh;
		}
	}

	.title{
		font-size: 30px;
		margin-bottom: 50px;
	}

	.subtext {
		margin: 5px;
		font-size: 15px;
		color: rgba(3, 129, 128, 0.75);
	}

	.box-content{
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		border-radius: 10px;
		transition: height 0.6s ease-in-out 0.8s;
	}

	.hint.active {
		top:-50px;
		transition: 0.6s ease-in-out;
	}

	.hint {
		display: block;
		position: absolute;
		top: 0;
		z-index: -1;
		transition: 0.6s ease-in-out;
		background: #014c4c;
		color: #fff;
		padding: 10px;
		border-radius: 10px;
	}


	.box-content input {
		padding: 10px;
		width: 500px;
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
		align-content: center;
		justify-content: center;
		padding: 5px;
		width: 60px;
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
		margin-bottom: -10px;
		box-shadow: 0 0 #035d5c;
	}

	.box-content button img {
		width: 50px;
		height: 50px;
	}

	#hint-button{
		position:absolute;
		top: 5px;
		left: 5px;
	}

	.error-message {
		opacity: 0;
		height: 0;
		width: 0;
		padding: 0;
		background-color: #ff6e6e;
		border-radius: 15px;
		border: 3px solid #ff3b3b;
		font-size: 15px;
		align-content: center;
		color: transparent;
		text-align: center;
		text-overflow: clip;
		white-space: nowrap;
		overflow: hidden;
		transition: opacity 0.2s ease, height 0.5s ease, width 1s ease 0.5s, color 0.5s 1s;
	}

	.error-message.active {
		opacity: 1;
		height: 30px;
		color: white;
		width: 70%;
	}

	.box-content.active {
		background-color: #68b2b3;
		display: flex;
	}

	.back{
		display: flex;
		background-color: #68b2b3;
		transform: rotateY(180deg);
	}

	.back p {
		overflow: scroll;
		overflow-x: hidden;
		background: white;
		padding: 20px;
		scrollbar-color: #038180 #68b2b3;
		scrollbar-width: thin;
	}

	@media (max-width: 800px) {
		.box-container input {
			font-size: 25px;
			width: 90vw;
		}

		.box-content {
			border-radius: 0;
		}

		.buttons{
			position: relative;
			width: 100%;
		}

		#hint-button{
			position: absolute;
			left: 5px;
			top: 10px;
			padding: 5px;
			box-shadow: 0 5px 0  #035d5c;
			margin: 0;
		}

		#hint-button img{
			width: 30px;
			height: 30px;
		}

		#hint-button:active {
			margin-top: 5px;
			margin-bottom: -5px;
			box-shadow: 0 0 #035d5c;
		}
	}
</style>
