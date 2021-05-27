
<template>
	<div class="page">

		<!-- main page content -->
		<div class="mainContent">

			<!-- bg video -->
			<video-background class="videobg" :src="require('../assets/loop.mp4')" :loop="true">
				<div class="videobg-content">
					<h1> {{ msg }} </h1>

					<vs-button id="centerbutton" transparent color="#ffffff">
						<h3>2021 F/W COLLECTION</h3>
		
					</vs-button>
					
					<!-- fragrance dialog -->
					<vs-button id="centerbutton" transparent color="#ffffff" @click="dialogactive=!dialogactive">
						<h3>SKIN : FRAGRANCE BY ROBERTO CAVALLI</h3>
					</vs-button>
					<vs-button id="centerbutton" transparent color="#ffffff" @click="dialogactive2=!dialogactive2">
						<h3>VOICES</h3>
					</vs-button>



					<div class="logs">

						<!-- perfume dialog -->
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="dialogactive">
							<video-background id="perfume-video" :src="require('../assets/perfume.mp4')" :loop="true"></video-background>
						
							
						</b-modal>

						
						<!-- voices dialog -->
						<b-modal class="voices" hide-footer scrollable style="margin-top:20;" id="modal-xl" size="xl" v-model="dialogactive2">
							<img src="../assets/0.jpg" alt="">
							<img src="../assets/1.jpg" alt="">
							<img src="../assets/2.jpg" alt="">
							<img src="../assets/3.jpg" alt="">
							<img src="../assets/4.jpg" alt="">
							
						</b-modal>

					</div>

				</div>
			</video-background>

			<!-- footer -->
			<div id="footer">
				<div id="socialmedia">
					<h5>FOLLOW US</h5>
					<vs-row justify="space-between">
						<vs-button icon color="#333333">
							<i class='bx bxl-facebook-square'></i>
						</vs-button>
						<vs-button icon color="#333333">
							<i class='bx bxl-linkedin-square'></i>
						</vs-button>
						<vs-button icon color="#333333">
							<i class='bx bxl-instagram'></i>
						</vs-button>
						<vs-button icon color="#333333">
							<i class='bx bxl-youtube'></i>
						</vs-button>
					</vs-row>
				</div>




			</div>

		</div>


		<!-- bars -->
		<div>
			<vs-navbar class="bars" text-white color="#111111" center-collapsed shadow v-model="activeSidebar">
				<template #left>
					<vs-button @click="activeSidebar = !activeSidebar" flat icon color="#ff202f">
						<i class='bx bx-menu'></i>

					</vs-button>
					<h5>Menu</h5>


				</template>


				<template #right>

					<vs-button icon color="#333333">
						<i class='bx bx-search-alt-2'></i>
						Search
					</vs-button>


					<vs-button transparent color="#ffffff">
						Contact
					</vs-button>
					<vs-button transparent color="#ffffff">
						Boutiques
					</vs-button>
					<vs-button transparent color="#ffffff">
						Sign In
					</vs-button>

					<vs-button icon color="#333333">
						<i class='bx bx-cart'></i>
					</vs-button>

				</template>
			</vs-navbar>


			<!-- sidebar -->
			<vs-sidebar
				class="bars"
				id="sidebar"
				background="#111111"
				textWhite
				absolute
				v-model="active"
				:open.sync="activeSidebar"
			>
				<template #logo>
				<!-- ...img logo -->
				</template>

				<!-- whats new -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
							WHAT'S NEW
						</vs-sidebar-item>
					</template>

					<vs-sidebar-item id="FRAGRANCE">
						FRAGRANCE OF RC
					</vs-sidebar-item>
					<vs-sidebar-item id="SKIN">
						SKIN VIDEO
					</vs-sidebar-item>
					<vs-sidebar-item id="VOICES">
						VOICES
					</vs-sidebar-item>
					<vs-sidebar-item id="2021 F/W COLLECTION">
						2021 F/W COLLECTION
					</vs-sidebar-item>
				</vs-sidebar-group>


				<!-- shop by looks -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
						<template #icon>
							<i class='bx bx-circle'></i>
						</template>
						SHOP BY LOOKS
						</vs-sidebar-item>
					</template>

					<vs-sidebar-item id="WOMEN">
						WOMEN
					</vs-sidebar-item>
					<vs-sidebar-item id="MEN">
						MEN
					</vs-sidebar-item>
					<vs-sidebar-item id="JUNIOR">
						JUNIOR
					</vs-sidebar-item>
				</vs-sidebar-group>
				

				<!-- women -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
						<template #icon>
							<i class='bx bx-circle'></i>
						</template>
						WOMEN
						</vs-sidebar-item>
					</template>

					<vs-sidebar-item id="CLOTHING">
						CLOTHING
					</vs-sidebar-item>
					<vs-sidebar-item id="BAGS">
						BAGS
					</vs-sidebar-item>
					<vs-sidebar-item id="SHOES">
						SHOES
					</vs-sidebar-item>
					<vs-sidebar-item id="ACCESSORIES">
						ACCESSORIES
					</vs-sidebar-item>
					<vs-sidebar-item id="JEWELRY">
						JEWELRY
					</vs-sidebar-item>
					<vs-sidebar-item id="WEDDING DRESSES">
						WEDDING DRESSES
					</vs-sidebar-item>
					<vs-sidebar-item id="FRAGRANCE">
						FRAGRANCE
					</vs-sidebar-item>
				</vs-sidebar-group>
				

				<!-- men -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
						<template #icon>
							<i class='bx bx-circle'></i>
						</template>
						MEN
						</vs-sidebar-item>
					</template>

					<vs-sidebar-item id="CLOTHING">
						CLOTHING
					</vs-sidebar-item>
					<vs-sidebar-item id="BAGS">
						BAGS
					</vs-sidebar-item>
					<vs-sidebar-item id="SHOES">
						SHOES
					</vs-sidebar-item>
					<vs-sidebar-item id="ACCESSORIES">
						ACCESSORIES
					</vs-sidebar-item>
					<vs-sidebar-item id="JEWELRY">
						JEWELRY
					</vs-sidebar-item>
					<vs-sidebar-item id="FRAGRANCE">
						FRAGRANCE
					</vs-sidebar-item>
				</vs-sidebar-group>

				<!-- JUNIOR -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
							JUNIOR
						</vs-sidebar-item>
					</template>

					<vs-sidebar-item id="GIRLS">
						GIRLS
					</vs-sidebar-item>
					<vs-sidebar-item id="BOYS">
						BOYS
					</vs-sidebar-item>
				</vs-sidebar-group>
				

				<!-- HOME -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
							HOME
						</vs-sidebar-item>
					</template>

					<vs-sidebar-item id="BEDROOMNBATHROOM">
						BEDROOM & BATHROOM
					</vs-sidebar-item>
					<vs-sidebar-item id="DINING">
						DINING
					</vs-sidebar-item>
					<vs-sidebar-item id="LIVING">
						LIVING
					</vs-sidebar-item>
					<vs-sidebar-item id="OPTICAL">
						OPTICAL ANIMALIER
					</vs-sidebar-item>
				
				</vs-sidebar-group>
				

				<!-- GIFTS -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
							GIFTS
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="FORHER">
						FOR HER
					</vs-sidebar-item>
					<vs-sidebar-item id="FORHIM">
						FOR HIM
					</vs-sidebar-item>
					<vs-sidebar-item id="GIFTCARDS">
						GIFT CARDS
					</vs-sidebar-item>
				</vs-sidebar-group>
				

				<!-- SERVICES -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
							SERVICES
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="ASK">
						ASK A GIFT EXPERT
					</vs-sidebar-item>
					<vs-sidebar-item id="SHIPPING">
						FREE PREMIUM EXPRESS SHIPPING
					</vs-sidebar-item>
					<vs-sidebar-item id="RETURNS">
						FREE AND EASY RETURNS
					</vs-sidebar-item>
					<vs-sidebar-item id="SOPPORT">
						AFTER SALE SOPPORT
					</vs-sidebar-item>
					<vs-sidebar-item id="APPOINTMENT">
						YOUR PRIVATE APPOINTMENT
					</vs-sidebar-item>
				</vs-sidebar-group>
				
				<!-- RC HERITAGE -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
							RC HERITAGE
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="FOUNDER">
						THE FOUNDER
					</vs-sidebar-item>
					<vs-sidebar-item id="HISTORY">
						THE HISTORY OF RC
					</vs-sidebar-item>
					<vs-sidebar-item id="FAMILY">
						RC STAR FAMILY
					</vs-sidebar-item>
				</vs-sidebar-group>

				<template #footer>
					<vs-button transparent color="#ffffff" v-on:click="openblog()">
						<h3>ROBERTO CAVALLI BLOG</h3>
					</vs-button>


				</template>
			</vs-sidebar>
		</div>
	</div>
</template>


<script>


	// fix the font 
	// shopping cart right side of sign-in button x
	// perfume video change


	export default {
		// name of component
		name: 'DripHub',

		// props passed by parent component
		props: {
			msg: String,
		},

		// variables
		data() {
			return {
				// active: 'primary'
				active: 'home',
				activeSidebar: false,
				dialogactive: false,
				dialogactive2: false
			}
		},

		methods: {
			openblog: function(){
				window.open("https://robertocavalliblog.com/")
			}
		},
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	h1 {
		font-size: 80px;
	}

	img {
		max-width: 80%;
		margin: auto;
		display: flex;
	}


	#centerbutton{
		margin: auto;
	}

	.mainContent {
		padding-top: 0px;
	}



	.videobg {
		/* transform: translate(-50%, 50%);
		top: 50%;
		left: 50%;
		position: fixed; */

		/* max-height: vw;  */
		height: 100vh;
		color: white;
	}

	.videobg-content {
		margin-top: 200px;
	}

	.videobg-content > p {
		/* up right down left */
		margin: 50px 200px 50px 200px;

	}

	#perfume-video {
		height: 50vh;
		width: 90hw;

	}


	#sidebar {
		margin-top: 80px;
		height: 80%;
	}
	

	.bars{
		opacity: 0.8;
	}

	#footer{
		width: 100%;
		height: 30vh;
		background-color: #111111;
		padding-top: 20px;
	}

	#socialmedia{
		width: 200px;
		margin-top:40px;
		margin-left: auto;
		margin-right: auto;
	}



	@font-face {
		font-family: "ChaletComprimeCologneSixty";
		src: url("../assets/ChaletComprimeCologneSixty.ttf");
	}


	* {
		font-family: "ChaletComprimeCologneSixty";
	}



	.model{
		margin-top: 50vh;
	}
</style>
