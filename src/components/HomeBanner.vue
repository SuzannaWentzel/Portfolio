<template>
	<div class="home-banner">
		<div class="container-fluid">
			<div class="intro row">
				<div class="col-6 ">
					<h1 class="right">Hello, I'm</h1>
				</div>
				<div class="col-6">
					<h1 class="left">
						<span class="typed-text">{{ typeValue }}</span>
						<span class="cursor" :class="{'typing': typeStatus}"></span>
					</h1>
					<p class="pause" v-if="!paused" @click="pauseTyping()"><i class="fas fa-pause"></i></p>
					<p class="pause" v-if="paused" @click="resumeTyping()"><i class="fas fa-play"></i></p>
				</div>
			</div>
			<div class="about-me row">
				<!--<div class="col-lg-4">-->
					<!--<p>5 traits that describe me:</p>-->
					<!--<p class="list-item">Curious</p>-->
					<!--<p class="list-item">Hardworking</p>-->
					<!--<p class="list-item">Loyal</p>-->
					<!--<p class="list-item">Responsible</p>-->
					<!--<p class="list-item">Caring</p>-->
				<!--</div>-->
				<div class="col-lg-6 col-sm-12 aspiration">
					<img src="../../public/images/aspirations.png" />
				</div>
				<div class="col-lg-6 col-sm-12 aspiration">
					<h2>What will I become?</h2>
					<p>Not sure! The ideas here are what linger in my head, but everything can change! I still have studies to finish and I already have a very interesting job, who knows?</p>
				</div>
				<!--<div class=col-lg-4>-->
					<!--<p>What I like & interests:</p>-->
					<!--<p class="list-item">Web development <br>(Frontend, backend & connection)</p>-->
					<!--<p class="list-item">Web design & UX</p>-->
					<!--<p class="list-item">Working in teams (scrum/agile etc)</p>-->
					<!--<p class="list-item">Natural language/speech processing</p>-->
					<!--<p class="list-item">Affective computing</p>-->
				<!--</div>-->
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "HomeBanner",
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ["a Developer", "an Engineer", "a Learner", "a creator", "a Drummer", "a Pianist", "a Gardener", "Suzanna"],
                typeSpeed: 80,
                erasingSpeed: 50,
                newTextDelay: 3000,
                nameDelay: 10000,
                typeArrayIndex: 0,
                charIndex: 0,
                paused: false,       // TODO: set to false bf pushing !!
                erasing: false
            }
        },
        methods: {
            typeText() {
                this.erasing = false;
                if (!this.paused) {
                    if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                        if (!this.typeStatus) {
                            this.typeStatus = true
                        }

                        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                        this.charIndex += 1;

                        setTimeout(this.typeText, this.typeSpeed);
                    } else {
                        this.typeStatus = false;
                        if (this.typeArrayIndex === this.typeArray.length - 1) {
                            setTimeout(this.eraseText, this.nameDelay);
                        } else {
                            setTimeout(this.eraseText, this.newTextDelay);
                        }
                    }
                }
            },
            eraseText() {
                this.erasing = true;
                if (!this.paused) {
                    if (this.charIndex > 0) {
                        if (!this.typeStatus) {
                            this.typeStatus = true;
                        }
                        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                        this.charIndex -= 1;
                        setTimeout(this.eraseText, this.erasingSpeed);
                    } else {
                        this.typeStatus = false;
                        this.typeArrayIndex += 1;
                        if (this.typeArrayIndex >= this.typeArray.length) {
                            this.typeArrayIndex = 0;
                        }
                        setTimeout(this.typeText, this.typeSpeed + 1000);
                    }
                }
            },
            pauseTyping() {
                this.paused = true;
            },
            resumeTyping() {
                console.log('resuminggggg');
                this.paused = false;
                if (this.erasing) {
                    this.eraseText();
                } else {
                    this.typeText();
                }
            }
        },
        created() {
            setTimeout(this.typeText, this.newTextDelay + 100)
        }
    }
</script>

<style scoped lang="scss">
	@keyframes cursorBlink {
		49% { background-color: white; }
		50% { background-color: transparent; }
		99% { background-color: transparent; }
	}

	.home-banner {
		width: 100%;
		height: 100%;
	}

	.container-fluid {
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 576px) {
		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 1.3rem;
		}

		p {
			font-size: 0.75rem;
		}

		.intro {
			height: 20vh;
		}

		.cursor {
			height: 1.25rem;
		}

		.pause {
			right: 10%;
			font-size: 1rem;
		}

		.about-me {
			.aspiration {
				& img {
					width: 50%;
					margin-bottom: 2rem;
				}
				
				h2 {
					text-align: center;
					margin-bottom: 0.7rem;
				}
			}
		}
	}
	@media only screen and (min-width: 576px) {
		h2 {
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}

		.cursor{
			height: 2.5rem;
		}

		.intro {
			height: 30vh;
		}

		.pause {
			font-size: 1.5rem;
			right: 10%;
		}

		.about-me {
			.aspiration {
				& img {
					width: 50%;
					margin-bottom: 3rem;
				}

				& p {
					margin-bottom: 3rem;
				}
			}
		}
	}
	@media only screen and (min-width: 768px) {

	}
	@media only screen and (min-width: 992px) {
		.intro {
			padding: 3rem;
			height: 40vh;
		}

		.pause {
			right: 15%;
		}

		.about-me {
			.aspiration {
				& img {
					margin-top: -20%;
					margin-bottom: 0;
					width: 80%;
				}

				& p {
					text-align: left;
					padding-right: 3rem;
					margin-bottom: 0;
				}

				& h2 {
					text-align: left;
					margin-bottom: 1.2rem;
				}
			}
		}
	}
	@media only screen and (min-width: 1200px){
      .pause {
         right: 20%;
      }

		.about-me {
			.aspiration{
				& p {
					padding-right: 7rem;
				}
			}
		}
	}

	.intro {
		padding-top: 3rem;
		box-sizing: border-box;
		color: white;
		margin-bottom: 3rem;

		& h1 {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			&.right {
				right: 0.5rem;
			}

			&.left {
				left: 0.5rem;
			}

			& .typed-text {
				color: lightblue;
			}

			& .cursor {
				display: inline-block;
				margin-left: 0.5rem;
				width: 2px;
				background-color: white;
				animation: cursorBlink 1s infinite;
			}

			& .cursor.typing {
				animation: none;
			}

		}

		& .text-align-right {
			text-align: right;
		}

		& .text-align-left {
			text-align: left;
		}
	}

	.pause {
		position: absolute;
		top: 50%;
		transform: translateY(-40%);
		color: rgba(255, 255, 255, 0.2);
		cursor: pointer;

		&:hover{
			color: rgba(255, 255, 255, 0.3);
		}
	}

	.about-me {
		color: white;
	}


</style>
