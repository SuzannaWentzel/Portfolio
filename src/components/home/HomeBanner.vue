<template>
	<div class="home-banner">
		<div class="container-fluid d-flex align-items-center">
			<div class="intro row align-items-center">
				<div class="col-6">
					<header class="right">Hello, I'm</header>
				</div>
				<div class="col-6 col-md-5">
					<header class="left">
						<span class="typed-text">{{ typeValue }}</span>
						<span class="cursor" :class="{'typing': typeStatus}"></span>
					</header>
				</div>
				<div class="col-12 col-md-1">
					<p class="pause" v-if="!paused" @click="pauseTyping()"><i class="fas fa-pause"></i></p>
					<p class="pause" v-if="paused" @click="resumeTyping()"><i class="fas fa-play"></i></p>
				</div>
			</div>
		</div>
		<div class="about-me" v-scroll-to="'#about-banner'">
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
                typeArray: ["a developer", "an engineer", "a learner", "a creator", "a pianist", "a gardener", "Suzanna"],
                typeSpeed: 80,
                erasingSpeed: 50,
                newTextDelay: 3000,
                nameDelay: 10000,
                typeArrayIndex: 0,
                charIndex: 0,
                paused: false,
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

		background-image: url('../../../public/images/blobs/main_blob.png');
		background-repeat: no-repeat;

		.about-me {
			position: absolute;
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;
			width: 100%;
			cursor: pointer;
			bottom: 5%;

			&:hover {
				color: var(--dark);

				i {
					color: rgba(0, 0, 0, 0.4);
				}
			}

			i {
				font-size: 2rem;
			}

			p {
				width: max-content;
			}
		}

		.intro {
			margin-left: 0px;
			width: 100%;
			box-sizing: border-box;

			& header {
				padding: 0 1rem;
				display: inline-block;

				&.right {
					float: right;
				}

				&.left {
					float: left;
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
				margin-bottom: 0;
				background: none;
				box-shadow: none;
				width: 100%;
				text-align: center;
			}
		}
	}

	.container-fluid {
		width: 100%;
		height: 100%;
	}

	header {
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);
		padding: 0.1rem 0.5rem;
		border-radius: 3px;
	}

	@media only screen and (max-width: 576px) {
		.home-banner {
			background-position-y: 50%;
			background-position-x: 50%;
			background-size: cover;
		}

		.cursor {
			height: 1.25rem;
		}

		.pause {
			margin-top: 1.5rem;
			font-size: 1rem;
		}
	}
	@media only screen and (min-width: 576px) {
		.home-banner {
			background-position-y: 50%;
			background-position-x: 50%;
			background-size: cover;
		}

		.cursor {
			height: 1.9rem;
		}

		.pause {
			margin-top: 2rem;
			font-size: 1.5rem;
		}
	}
	@media only screen and (min-width: 768px) {
		.home-banner {
			background-position-x: 20%;
			background-position-y: 50%;
			background-size: 90%;
		}

		.cursor {
			height: 2.3rem;
		}

		.pause {
			margin-top: 0;
		}
	}
	@media only screen and (min-width: 992px) {
		.home-banner {
			background-size: 80%;
		}

		.cursor {
			height: 2.5rem;
		}
	}
	@media only screen and (min-width: 1200px){
		.home-banner {
			background-size: 70%;
		}
	}
</style>
