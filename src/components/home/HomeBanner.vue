<template>
	<div class="home-banner">
		<div class="container-fluid">
			<div class="intro row">
				<div class="col-6 ">
					<header class="right">Hello, I'm</header>
				</div>
				<div class="col-6">
					<header class="left">
						<span class="typed-text">{{ typeValue }}</span>
						<span class="cursor" :class="{'typing': typeStatus}"></span>
					</header>
					<p class="pause" v-if="!paused" @click="pauseTyping()"><i class="fas fa-pause"></i></p>
					<p class="pause" v-if="paused" @click="resumeTyping()"><i class="fas fa-play"></i></p>
				</div>
			</div>

				<!--<div class="col-lg-4">-->
					<!--<p>5 traits that describe me:</p>-->
					<!--<p class="list-item">Curious</p>-->
					<!--<p class="list-item">Hardworking</p>-->
					<!--<p class="list-item">Loyal</p>-->
					<!--<p class="list-item">Responsible</p>-->
					<!--<p class="list-item">Caring</p>-->
				<!--</div>-->

				<!--<div class=col-lg-4>-->
					<!--<p>What I like & interests:</p>-->
					<!--<p class="list-item">Web development <br>(Frontend, backend & connection)</p>-->
					<!--<p class="list-item">Web design & UX</p>-->
					<!--<p class="list-item">Working in teams (scrum/agile etc)</p>-->
					<!--<p class="list-item">Natural language/speech processing</p>-->
					<!--<p class="list-item">Affective computing</p>-->
				<!--</div>-->

		</div>
		<div class="about-me" v-scroll-to="'#aspiration-banner'">
			<p>Read more about me </p>
			<i class="fas fa-angle-double-down"></i>
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
                typeArray: ["a developer", "an engineer", "a learner", "a creator", "a drummer", "a pianist", "a gardener", "Suzanna"],
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
		49% { background-color: black; }
		50% { background-color: transparent; }
		99% { background-color: transparent; }
	}

	i {
		color: rgba(0, 0, 0, 0.2);
		cursor: pointer;

		&:hover {
			color: rgba(0, 0, 0, 0.4);
		}
	}

	.home-banner {
		width: 100%;
		height: 100%;
		position: relative;

		.about-me {
			position: absolute;
			cursor: pointer;
			bottom: 5%;
			left: 50%;
			transform: translateX(-50%);

			&:hover {
				color: var(--dark);

				i {
					color: rgba(0, 0, 0, 0.4);
				}
			}

			i {
				font-size: 2rem;
			}
		}

		.intro {
			height: 100%;
			padding-top: 3rem;
			box-sizing: border-box;
			margin-bottom: 3rem;

			& header {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);

				&.right {
					right: 0.5rem;
				}

				&.left {
					left: 0.5rem;
				}

				& .cursor {
					display: inline-block;
					margin-left: 0.5rem;
					width: 2px;
					background-color: black;
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

			.pause {
				position: absolute;
				top: 50%;
				transform: translateY(-40%);
			}
		}
	}

	.container-fluid {
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 576px) {
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
	}
	@media only screen and (min-width: 576px) {
		.cursor{
			height: 1.9rem;
		}

		.intro {
			height: 30vh;
		}

		.pause {
			font-size: 1.5rem;
			right: 10%;
		}
	}
	@media only screen and (min-width: 768px) {
		.cursor {
			height: 2.9rem;
		}
	}
	@media only screen and (min-width: 992px) {
		.intro {
			padding: 3rem;
			height: 40vh;
		}

		.pause {
			right: 15%;
		}
	}
	@media only screen and (min-width: 1200px){
      .pause {
         right: 20%;
      }
	}
</style>
