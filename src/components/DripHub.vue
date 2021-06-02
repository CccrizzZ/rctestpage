<template>
	<div class="page">

		<!-- main page content -->
		<div class="mainContent">

			<!-- bg video -->
			<video-background class="videobg" :src="require('../assets/loop.mp4')" :loop="true">
				<div class="videobg-content">
					<h1> {{ msg }} </h1>

					<vs-button id="centerbutton" transparent color="#ffffff" @click="activeDlgFall2021=!activeDlgFall2021">
            <h3>2021 F/W COLLECTION</h3>
					</vs-button>
					
					<!-- fragrance dialog -->
					<vs-button id="centerbutton" transparent color="#ffffff" @click="activeDlgPerfume=!activeDlgPerfume">
						<h3>SKIN : FRAGRANCE BY ROBERTO CAVALLI</h3>
					</vs-button>

					<vs-button id="centerbutton" transparent color="#ffffff" @click="activeDlgVoices=!activeDlgVoices">
						<h3>VOICES</h3>
					</vs-button>


          <router-view></router-view>


					<div class="logs">

						<!-- FALL 2021 -->
            <b-modal hide-footer hide-header class="model modelFall2021" id="modal-xl" size="xl" v-model="activeDlgFall2021">
                <vs-row class="rowFall2021">
                  <h3 class="textCenter">2021 F\W COLLECTION</h3>
                </vs-row>
                <vs-row class="rowFall2021">
                  <h5 class="textCenter">Shop the collection by look</h5>
                </vs-row>
                <vs-row class="rowFall2021">
                  <vs-col w="4">
                      <img class="imgFall2021" @click="activeDlgLook1=!activeDlgLook1" src="../assets/LOOK1/LOOK1.png" width="100%" height="auto" alt="">
                      <h6 class="textCenter">LOOK1</h6>
                      <div class="textCenter">6 products</div>
                  </vs-col>
                  <vs-col w="4">
                      <img class="imgFall2021" @click="activeDlgLook2=!activeDlgLook2" src="../assets/LOOK2/LOOK2.png" width="100%" height="auto" alt="">
                      <h6>LOOK2</h6>
                      7 products
                  </vs-col>
                  <vs-col w="4">
                      <img class="imgFall2021" @click="activeDlgLook3=!activeDlgLook3" src="../assets/LOOK3/LOOK3.png" width="100%" height="auto" alt="">
                      <h6>LOOK3</h6>
                      5 products
                  </vs-col>
                </vs-row>
                <vs-row class="rowFall2021">
                  <vs-col offset="2" w="4">
                      <img class="imgFall2021" @click="activeDlgLook4=!activeDlgLook4" src="../assets/LOOK4/LOOK4.png" width="100%" height="auto" alt="">
                      <h6>LOOK4</h6>
                      6 products
                  </vs-col>
                  <vs-col w="4">
                      <img class="imgFall2021" @click="activeDlgLook5=!activeDlgLook5" src="../assets/LOOK5/LOOK5.png" width="100%" height="auto" alt="">
                      <h6>LOOK5</h6>
                      7 products
                  </vs-col>
                </vs-row>
						</b-modal>

						<!-- look dialogs -->
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="activeDlgLook1">
                  <vs-row class="rowFall2021">
                    <img src="../assets/LOOK1/LOOK1.png" width="100%" height="auto" alt="">
                  </vs-row>
                  <vs-row class="rowFall2021">
                    <vs-col w="4">
                      <img class="imgFall2021" src="../assets/LOOK1/1.Vertical Stripes Sweater_.png" width="100%" height="auto" alt="">
                      <h5>Vertical Stripes Sweater</h5>
                    </vs-col>
                    <vs-col w="4">
                      <img class="imgFall2021" src="../assets/LOOK1/2.Zebra-Print Pleat Chino Shorts.png" width="100%" height="auto" alt="">
                      <h5>Zebra-Print Pleat Chino Shorts</h5>
                    </vs-col>
                    <vs-col w="4">
                      <img class="imgFall2021" src="../assets/LOOK1/3.Leopard-Print Sneakers.jpg" width="100%" height="auto" alt="">
                      <h5>Leopard-Print Sneakers</h5>
                    </vs-col>
                    <vs-col w="4">
                      <img class="imgFall2021" src="../assets/LOOK1/4.RC Monogram Jacquard Hat.png" width="100%" height="auto" alt="">
                      <h5>RC Monogram Jacquard Hat</h5>
                    </vs-col>
                    <!--vs-col w="4">
                      <img class="imgFall2021" src="../assets/LOOK1/5.Chain Cuff with Horses Bucket.PNG" width="100%" height="auto" alt="">
                      <h5>Chain Cuff with Horses Bucket</h5>
                    </vs-col-->
                    <vs-col w="4">
                      <img class="imgFall2021" src="../assets/LOOK1/6.Zebra-Pattern Travel Bag.png" width="100%" height="auto" alt="">
                      <h5>Zebra-Pattern Travel Bag</h5>
                    </vs-col>
                  </vs-row>
						</b-modal>
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="activeDlgLook2">
                  <vs-row class="rowFall2021">
                    <img src="../assets/LOOK2/LOOK2.png" width="100%" height="auto" alt="">
                  </vs-row>
						</b-modal>
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="activeDlgLook3">
                  <vs-row class="rowFall2021">
                    <img src="../assets/LOOK3/LOOK3.png" width="100%" height="auto" alt="">
                  </vs-row>
						</b-modal>
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="activeDlgLook4">
                  <vs-row class="rowFall2021">
                    <img src="../assets/LOOK4/LOOK4.png" width="100%" height="auto" alt="">
                  </vs-row>
						</b-modal>
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="activeDlgLook5">
                  <vs-row class="rowFall2021">
                    <img src="../assets/LOOK5/LOOK5.png" width="100%" height="auto" alt="">
                  </vs-row>
						</b-modal>

						<!-- perfume dialog -->
						<b-modal hide-footer hide-header class="model" id="modal-xl" size="xl" v-model="activeDlgPerfume">
							<video-background id="perfume-video" :src="require('../assets/perfume.mp4')" :loop="true"></video-background>
						</b-modal>
						
						<!-- voices dialog -->
						<b-modal class="voices" hide-footer scrollable style="margin-top:20;" id="modal-xl" size="xl" v-model="activeDlgVoices">
							<img src="../assets/0.jpg" alt="">
							<img src="../assets/1.jpg" alt="">
							<img src="../assets/2.jpg" alt="">
							<img src="../assets/3.jpg" alt="">
							<img src="../assets/4.jpg" alt="">
						</b-modal>

						<!-- clothes dialog -->
            <b-modal class="voices" hide-footer scrollable style="margin-top:20;" id="modal-xl" size="xl" v-model="activeDlgClothes">
							<img src="../assets/clothes.png" alt="">
						</b-modal>

						<!-- map dialog -->
            <b-modal class="voices" hide-footer scrollable style="margin-top:20;" id="modal-xl" size="xl" v-model="activeDlgMap">
							<img src="../assets/map.jpg" alt="">
						</b-modal>
					</div>

				</div>
			</video-background>

			<!-- footer -->
			<div id="footer">
        <div id="footercontent">
					<vs-row justify="space-between">
            <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-row><h5>NEWSLETTER</h5></vs-row>
              <vs-row vs-align="left">Sign up to receive exclusive updates and context</vs-row>
              <vs-row>
                <vs-button border icon color="rgb(59,222,200)">
                  <i class='bx bxl-facebook-square'></i>
                </vs-button>
                <vs-button border icon color="rgb(59,222,200)">
                  <i class='bx bxl-linkedin-square'></i>
                </vs-button>
                <vs-button border icon color="rgb(59,222,200)">
                  <i class='bx bxl-instagram'></i>
                </vs-button>
                <vs-button border icon color="rgb(59,222,200)">
                  <i class='bx bxl-youtube'></i>
                </vs-button>
              </vs-row>
            </vs-col>
            <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-row><h5>Customer Service</h5></vs-row>
              <vs-row>Shipping Service</vs-row>
              <vs-row>Returns & Exchanges</vs-row>
              <vs-row>Gifts</vs-row>
              <vs-row>Legal area</vs-row>
              <vs-row>FAQS</vs-row>
              <vs-row>Contact us</vs-row>
            </vs-col>
            <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-row><h5>THE COMPANY</h5></vs-row>
              <vs-row>About RC world</vs-row>
              <vs-row>RC Blogs</vs-row>
              <vs-row>Corporate</vs-row>
              <vs-row>Careers</vs-row>
              <vs-row>Privacy & Cookie Policy</vs-row>
            </vs-col>
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
				:open.sync="activeSidebar">

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

					<vs-sidebar-item id="FRAGRANCE"">
            <a v-on:click="showDlgPerfume">FRAGRANCE OF RC</a>
					</vs-sidebar-item>

					<vs-sidebar-item id="SKIN">
            <a v-on:click="showDlgSkin">SKIN VIDEO</a>
					</vs-sidebar-item>

					<vs-sidebar-item id="VOICES">
            <a v-on:click="showDlgVoices">VOICES</a>
						
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
            <a v-on:click="showDlgClothes">CLOTHING</a>
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


				<!-- World Of Roberto Cavalli -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon>
								<i class='bx bx-circle'></i>
							</template>
              World Of Roberto Cavalli
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="HERITAGE">
            RC HERITAGE
					</vs-sidebar-item>
					<vs-sidebar-item id="LIFESTYLE">
            RC LIFESTYLE
					</vs-sidebar-item>
					<vs-sidebar-item id="HOME">
            RC HOME
					</vs-sidebar-item>
					<vs-sidebar-item id="NEWS">
            RC NEWS
					</vs-sidebar-item>
				</vs-sidebar-group>
				
				<!-- BOUTIQUES -->
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item>
							<template #icon>
								<i class='bx bx-location-plus'></i>
							</template>
              <a v-on:click="showDlgMap">BOUTIQUES</a>
						</vs-sidebar-item>
					</template>
				</vs-sidebar-group>

				<template #footer>
          <vs-row w="12">
            <vs-col vs-type="flex" w="12">
              <a v-on:click="switchLanguage">LANGUAGE : {{language}}</a>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" w="12">
              <a v-on:click="openblog">ROBERTO CAVALLI BLOG</a>
            </vs-col>
          </vs-row>

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
		name: 'DripHub',

		props: {
			msg: String,
		},

		data() {
			return {
				// active: 'primary'
				active: 'home',
				activeSidebar: false,

				activeDlgFall2021: false,
				activeDlgPerfume: false,
				activeDlgSkin: false,
				activeDlgVoices: false,
				activeDlgClothes: false,
				activeDlgMap: false,

        activeDlgLook1: false,
        activeDlgLook2: false,
        activeDlgLook3: false,
        activeDlgLook4: false,
        activeDlgLook5: false,

        language: "EN",
			}
		},

		methods: {
      switchLanguage: function() {
        if (this.language == "EN") 
          this.language = "IT"
        else
          this.language = "EN"
      },
      /*
      showDlgLook1: function() {
				this.activeLook1 = true
      },
      showDlgLook2: function() {
				this.activeLook2 = true
      },
      showDlgLook3: function() {
				this.activeLook3 = true
      },
      showDlgLook4: function() {
				this.activeLook4 = true
      },
      showDlgLook5: function() {
				this.activeLook5 = true
      },
      */
			showDlgPerfume: function(){
				this.activeSidebar = false
        this.activeDlgPerfume = true
			},
			showDlgVoices: function(){
				this.activeSidebar = false
        this.activeDlgVoices = true
			},
			showDlgSkin: function(){
				this.activeSidebar = false
        this.activeDlgSkin = true
			},
			showDlgClothes: function(){
				this.activeSidebar = false
        this.activeDlgClothes = true
			},
			showDlgMap: function(){
				this.activeSidebar = false
        this.activeDlgMap = true
			},
			openblog: function(){
				window.open("https://robertocavalliblog.com/")
			},
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
		height: 50vh;
		background-color: #111111;
		padding-top: 20px;
	}

	#footerbutton{
		margin: auto;
	}

	#footercontent{
		width: 90vw;
		margin-top:40px;
		margin-left: auto;
		margin-right: auto;
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
  .modelFall2021 {
    background-color: white;
  }
  .rowFall2021 {
    background-color: white;
    text-align: center;
  }
  .imgFall2021 {
    border: solid 2px #e3e3e3;
  }

  .textCenter {
    margin: auto;
  }
</style>
