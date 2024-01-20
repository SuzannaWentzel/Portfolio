<template>
	<div class="banner home-banner d-flex align-items-center">
		<div class="container--full-width">
			<div class="container--left">
				<span class="text__intro text--right">Hello, I'm</span>
			</div>
			<div class="container--right">
				<span class="text__intro text--left">
				<span class="typed-text">{{ typeValue }}</span>
				<span class="cursor" :class="{'typing': typeStatus}"></span>
			</span>
			</div>
		</div>
		<i class="fas fa-pause pause" v-if="!paused" @click="pauseTyping()"></i>
		<i class="fas fa-play pause" v-if="paused" @click="resumeTyping()"></i>
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
		position: relative;

		background-image: url('../../../public/images/blobs/main_blob.png');
		background-repeat: no-repeat;

		.container {
			&--full-width {
				width: 100%;
				display: flex;
				gap: 2rem;
			}

			&--left,&--right {
				width: 50%;
				display: flex;
			}

			&--left {
				justify-content: right;
			}

			&--right {
				justify-content: left;

				& .cursor {
					display: inline-block;
					margin-left: 0.5rem;
					width: 3px;
					background-color: black;
					animation: cursorBlink 1s infinite;
				}

				& .cursor.typing {
					animation: none;
				}
			}
		}

		.text {
			&__intro {
				background-color: rgba(255, 255, 255, 0.5);
				box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.3);
				padding: 0.1rem 0.5rem;
				border-radius: 3px;
				font-weight: bold;
				font-family: Montserrat, sans-serif;
				display: flex;
				align-items: center;
			}
		}

		i.pause {
			position: absolute;
			right: 0;
		}

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

			p {
				width: max-content;
			}
		}

		i {
			font-size: 1.5rem;
		}
	}

	@media only screen and (max-width: 576px) {
		.home-banner {
			background-position-y: 50%;
			background-position-x: 50%;
			background-size: cover;
			padding: 0 1rem;

			.text__intro {
				font-size: 1.5rem;
				padding: 0 0.5rem;
			}
		}

		.cursor {
			height: 1.25rem;
			width: 2px;
		}

		i.pause {
			margin-right: 1rem;
		}
	}
	@media only screen and (min-width: 576px) {
		.home-banner {
			background-position-y: 50%;
			background-position-x: 50%;
			background-size: cover;

			.text__intro {
				font-size: 2rem;
				padding: 0 0.5rem;
			}
		}

		.cursor {
			height: 1.75rem;
			width: 2px;
		}

		i.pause {
			margin-right: 1rem;
		}
	}
	@media only screen and (min-width: 768px) {
		.home-banner {
			background-position-x: 20%;
			background-position-y: 50%;
			background-size: 90%;

			.text__intro {
				font-size: 2.5rem;
				padding: 0 0.75rem;
			}
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
			.text__intro {
				font-size: 2.75rem;
				padding: 0 1rem;
			}
		}

		.cursor {
			height: 2.5rem;
		}

		i.pause {
			margin-right: 0;
		}
	}
	@media only screen and (min-width: 1200px){
		.home-banner {
			background-size: 70%;
		}
	}
</style>
