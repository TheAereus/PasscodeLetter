<script lang="ts">
	let isFlipped = false;
	let password = "";
	const correctPassword = "TEST";

	function toggleFlip() {
		if (password.toUpperCase() === correctPassword) {
			isFlipped = !isFlipped;
		}
	}
</script>

<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
</svelte:head>

<div class="box-container">
	<div class="box {isFlipped ? 'flipped' : ''}">
		<div class="box-content front">
			<p class="title">Yes, there's a password.</p>
			<input type="text" placeholder="You better get this right..." bind:value={password} />
			<p class="subtext"><i>not</i> case sensitive</p>
			<button on:click={toggleFlip} disabled={password.toUpperCase() !== correctPassword}>
				<img src="eyes.png" alt="Let's see...">
			</button>
		</div>
		<div class="box-content back">
			<!--<p>HAPPY FUCKING FIVE YEARS LOLLL
				I know this isn't much, but I hope this little gesture makes you happy for a long while. Asad. You fucking dumbass. I wish I could put into words just how much I feel for you. Just how damn much you mean to me. I wish you knew how every little thing in the world somehow makes me think of you. How you've been the muse for every piece of writing I've penned since I met you. For every word I've woven into shitty poetry, and for every little late night thought I've spilled onto paper. I wish you knew how much I want to hold your face, how much I crave to hear your heart beat in your chest again. I wish you knew how comfortable and off guard I can feel with you. How simple it is to talk to you. How much I want to keep you locked inside my heart forever. How much I want to look into your eyes and in that silence, just have you feel it all. The depth, the weight of feelings I don't know how to put in words.<br>
				<br>
				It's been five years. Half of a decade like the song said. That is a CRAZY long time if you think about it. You've been a constant in my life. You've watched me pretty much grow. You've stuck with me thru so so much. You were there before I got braces, during, and after. You were there when I moved schools, not once but twice. You were there when I moved cities. You were the one person who watched me make new friends and lose old ones. You were there for so much. For five years, I’ve shared everything with you. All day, every day. And somehow, no matter what was happening, you always listened. You're the one person I genuinely miss every time I'm having fun. You're the one person that knows every little detail, every little move I make. You know my every weakness. You know exactly what hurts me. And you know exactly what makes me happiest. And you're the one person in the world who I can trust with anything and everything.<br>
				<br>
				It's crazy to think how different things would have been if I just never interacted in that groupchat. If I never dmed you. We would have stayed nothing more than just names on a screen. Just two people who shared the same space but never truly crossed paths. But somehow, little things led to the other, and somehow we ended up here, five years later, intertwined in ways I never could have imagined back then. It's insane how these little moments shape the biggest parts of our lives. And I’m just really, really glad the universe let me have you.<br>
				<br>
				I was there when you got that birdie magneto. I was there when sneaking out in the middle of the night was the craziest thing for you. I was there when you got your green cycle. I was there when you were training to become the crazy tennis champion boy you are today. I was there when you got your first car. And I was there when you sold it. I was there when you graduated. I was there when you moved out. I was always there, I was always cheering you on. I will always be cheering you on. We know so much about each other. Not even intentionally, just through time, through love, through simply being. And I think that makes this, whatever we are, all the more special. You'll always have me, even in silence, even if we ever grow apart. I'll always be there, quietly hoping you're living the life that YOU want. I'll always be wishing on your happiness. I'll always remember you at 11:11.<br>
				<br>
				We've seen so many of each other’s stupid phases. You wouldn't used to go to bed until I "tucked you in" with that little goodnighty thing😭 I used to call you simba lmao. I've seen your :) phase. I've seen your Casey obsessed phase. You've seen god so many embarrassing phases of mine. Lol remember you used to do the boop thing to me after pissing me off on purpose? We went from nose boops to 5 second hugs to cheek kisses to some FREAKY shit lmao. And now for some reason you know exactly what my body looks like. And I do yours.<br>
				<br>
				I wonder how many hours we've spent talking. Time really does seem to fly with you lol. I wonder how many times you've looked at a pretty night sky and thought of me. And how many times I looked at an interesting vehicle and thought of you. I wonder how many nights we've stayed awake together. I wonder how much time I've spent waiting for you to text me back (lol). I wonder how many times you've randomly thought about me during the day. I wonder if you still miss me when it rains. If you think of me in quiet moments, or even in loud ones. I wonder how many times I've dreamt about you.<br>
				<br>
				I'll admit it, I've lost a shit ton of sleep over you. I chose you over sleep, I chose you over studying, but I think I still ended up just fine. I've pulled so many fucking strings to be able to keep talking to you LOL. I've talked to you on like 10 different devices over the years but it was so worth it man. Every night, every match of apex, every little hug, every shitty attempt at being nice. You make me really happy. You've been my safe space for the longest time. You understand me so so well. I've talked to you from SO MANY DIFFERENT PLACES. I remember I used to find a quiet corner in daawats just so I could text you in peace. I've talked to you from all these different corners of the world, I've talked to you from SO MANY DIFFERENT BATHROOMS. We've just talked about so much, haven't we? Somehow, we still haven't ran out. I hope we never do. You're just so much to me now, you're like part of my routine, part of every day, I literally cannot imagine a life with you not in it. I can't imagine a life where I don't have you to turn to, to share every little step I take.<br>
				<br>
				You're the reason I ever started playing apex. You're the reason I brush my teeth in the shower. You're the reason I even bother looking at number plates. You're the reason I've started to like my eyes and my hip dips. You're the one person I think of when I see pretty shades of green. You've been the reason for so many smiles on my face. You're my favorite. You're my favorite tennis champion. You're my favorite reckless driver and car geek. You're my favorite charsi. You're my favorite wannabe singer. You're my favorite coffee nerd. You're my favorite pinstripe enthusiast. You're my favorite night owl and you're my favorite anorexic. You're my favorite heightened olfactory senses boy. Whatever there is on the list, you fit the mark for being my favorite at it.<br>
				<br>
				When you said, 'I'll be here a while, for a few more birthdays if you don't mind,' I held onto that. I hope it’s true. I hope you stay. I hope I get to keep you for the longest while. I hope you keep making me smile the way you do right now, keep giving me butterflies the way you always have. I hope you keep messing with me and pissing me off, and then try making up for it afterwards. You stupid boy. I can't believe it's been so long, and yet somehow, never long enough. I can't believe how much is about to change in this next year, how much life will pull me forward, ready or not. But through it all, I hope I can keep holding on to you. I hope you’ll always be there to hear about my days, to laugh at my nonsense, to make my world feel a little less heavy.<br>
				<br>
				Happy five years, dumbass. Here’s to half a decade of you driving me insane, of me missing you more than I should, of making me blue, but the good kind.<br>
			</p>-->
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et cursus sapien. Nulla facilisi. Vestibulum fringilla dictum metus, in lobortis felis finibus quis. Donec et eros eu elit vulputate dictum. Curabitur scelerisque vehicula ullamcorper. Proin varius auctor velit, sit amet lobortis lectus maximus sed. Fusce et elementum eros, quis ornare nulla. Ut nec laoreet nisi. Vivamus eleifend justo vel lacinia semper. Vivamus quis diam et purus venenatis sollicitudin.<br>
				<br>
				Integer lacinia, odio quis faucibus ullamcorper, nisl sapien pretium lectus, sit amet tempus quam felis vel dui. Etiam mollis efficitur ante, et placerat metus placerat rutrum. Vivamus gravida molestie lacus, non viverra mauris. Phasellus justo turpis, rutrum sed eros nec, blandit blandit sem. Suspendisse et tristique justo, ut tincidunt mauris. Phasellus tempus, ligula ac placerat faucibus, tortor mauris rutrum dolor, in aliquet augue nisl ac sapien. Donec sed odio at massa fermentum aliquet et vel sem. Phasellus ut commodo nisl. Etiam lacinia vehicula nunc vitae fermentum. Nunc maximus ipsum metus, ac pulvinar nulla bibendum sit amet. Mauris sollicitudin metus consectetur fringilla varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam imperdiet leo et felis tincidunt, ut placerat arcu sollicitudin. Nulla pulvinar nulla ac nisi eleifend pulvinar.<br>
				<br>
				Quisque lacus ex, pretium non ex ut, iaculis luctus ligula. Pellentesque tincidunt nibh egestas efficitur ultricies. Proin at eros egestas, finibus nunc lacinia, bibendum tellus. Aliquam et enim arcu. Maecenas in efficitur turpis, et posuere lorem. Aenean malesuada nisi lectus, a hendrerit justo porttitor vitae. Mauris pretium magna vel ultricies faucibus. Pellentesque ac lacus at nisi suscipit pharetra vel eu risus. Suspendisse imperdiet tincidunt eros, id dictum tellus dignissim nec. Integer eros nisl, condimentum id nisi quis, bibendum euismod tortor.<br>
				<br>
				Quisque consequat felis rhoncus diam molestie ornare. Morbi commodo augue sit amet dolor auctor, at mattis libero aliquam. Etiam sed commodo purus. Nulla facilisi. Sed ullamcorper semper bibendum. Aenean rutrum tellus non lobortis ultrices. Vestibulum velit tortor, gravida et facilisis a, porta id eros. Nulla molestie ipsum et ante congue feugiat.<br>
				<br>
				Aliquam purus neque, bibendum nec orci vitae, tempor sagittis tellus. Nullam sed dapibus sem, sit amet efficitur purus. Integer id risus accumsan, efficitur urna id, tincidunt nunc. Donec mi eros, ultrices et sem eu, fringilla mollis urna. Sed suscipit purus suscipit, porttitor orci vitae, tempus massa. Vivamus semper enim nulla, id vehicula mauris dictum sagittis. Fusce quis tempor felis, in pulvinar odio. Sed vel est efficitur, faucibus tortor quis, vestibulum nulla. Sed pharetra fermentum molestie. Mauris porta posuere sagittis. Curabitur interdum tincidunt scelerisque.<br>
				<br>
				Nam turpis velit, consequat convallis odio at, pretium efficitur eros. Nullam mi turpis, mattis quis congue ac, tincidunt nec justo. Maecenas in mi vehicula, auctor est ac, viverra tortor. Nunc et sem purus. Praesent ac eros cursus, auctor risus at, rutrum libero. Maecenas elementum orci est, quis blandit nulla dapibus sit amet. Integer consectetur tempus mauris, eu dictum urna laoreet nec. Ut suscipit nec lectus quis pulvinar. Vivamus porta vel est et feugiat. Morbi gravida leo vel elit mattis, quis sagittis lacus bibendum. Vestibulum dolor dui, pellentesque et rhoncus et, egestas ut enim. Pellentesque in magna eu ante vulputate hendrerit.<br>
				<br>
				Integer ac nulla maximus, feugiat magna et, faucibus nisi. Nunc vestibulum consectetur tellus eget ultricies. Morbi in quam efficitur, laoreet odio eu, finibus quam. Pellentesque tincidunt leo vel convallis placerat. Vivamus ac nulla ullamcorper, eleifend turpis et, ultrices enim. Quisque enim purus, viverra sit amet scelerisque in, faucibus vel nulla. Etiam pretium cursus suscipit. Duis magna eros, cursus eget est sit amet, blandit pharetra arcu. Nunc fermentum leo ut malesuada aliquet. Proin sed tristique nisl, ut lacinia turpis.<br>
				<br>
				Suspendisse ac leo eget ligula convallis pulvinar quis vel augue. Morbi odio mi, pellentesque iaculis dolor ac, sagittis efficitur massa. Aliquam volutpat, enim sit amet mollis sollicitudin, nulla metus pulvinar erat, non finibus sem nisi sit amet arcu. Praesent lobortis suscipit ligula gravida imperdiet. Aliquam tellus nulla, dapibus sed arcu vitae, ultrices mollis ante. Praesent imperdiet blandit suscipit. Aenean risus ante, imperdiet vitae neque sit amet, viverra ullamcorper nulla. Aenean est metus, porta non tortor ut, varius tincidunt ligula. Nam fermentum fringilla mauris, id ultricies orci. Cras at magna et risus efficitur egestas eu ac enim. Etiam eu erat id justo congue tempor in at ipsum. Phasellus volutpat euismod orci, vel aliquet metus consectetur id. Ut sit amet sem iaculis, tempus diam ut, dapibus erat.<br>
			</p>
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
		display: flex;
		width: 680px;
		height: 400px;
		border-radius: 5px;
		position: relative;
		text-align: justify;
		font-size: 25px;
		font-weight: 600;
		transform-style: preserve-3d;
		transition: transform 0.8s ease-in-out;
		transform: rotateY(0deg);
	}

	.box.flipped {
		transform: rotateY(180deg);
	}

	.box.flipped {
		animation: grow 2s ease-in-out 0.8s forwards;
	}

	@keyframes grow {
		0% {
			height: 400px;
		}
		100% {
			height: 85vh;
		}
	}

	.front{
		background-color: #68b2b3;
	}

	.back{
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		border-radius: 10px;
		transition: height 0.6s ease-in-out 0.8s;
	}


	.box-content input {
		padding: 10px;
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
		margin-bottom: -10px;
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
		.box-container input {
			font-size: 25px;
		}

		.box-content {
			border-radius: 0;
		}
	}
</style>
