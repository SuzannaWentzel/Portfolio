<template>
	<div class="home-banner">
		<div class="intro row mx-0">
			<div class="col-6">
				<h1 class="right">Hello, I'm</h1>
			</div>
			<div class="col-6">
				<h1 class="left">
					<span class="typed-text">{{ typeValue }}</span>
					<span class="cursor" :class="{'typing': typeStatus}"></span>
				</h1>
			</div>
		</div>
		<div class="about-me row mx-0">
			<div class="col-4">
				<p>5 traits that describe me:</p>
				<p class="list-item">Curious</p>
				<p class="list-item">Hardworking</p>
				<p class="list-item">Loyal</p>
				<p class="list-item">Responsible</p>
				<p class="list-item">Caring</p>
			</div>
			<div class=col-4>
				<img class="aspiration" src="../../public/images/aspirations.png" />
				<p>I am not sure yet who I aspire to be. For now, the ideas above are what appeal most to me, but that can change. I will first finish my studies and follow some very interesting courses, open minded. Maybe that will give me some insights in what I ultimately want to become!</p>
			</div>
			<div class=col-4>
				<p>What I like & interests:</p>
				<p class="list-item">Web development <br>(Frontend, backend & connection)</p>
				<p class="list-item">Web design & UX</p>
				<p class="list-item">Working in teams (scrum/agile etc)</p>
				<p class="list-item">Natural language/speech processing</p>
				<p class="list-item">Affective computing</p>

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
                typeArray: ["a Developer", "an Engineer", "a Learner", "a Drummer", "a Pianist", "a Gardener", "Suzanna"],
                typeSpeed: 50,
                erasingSpeed: 30,
                newTextDelay: 2000,
                nameDelay: 5000,
                typeArrayIndex: 0,
                charIndex: 0,
            }
        },
        methods: {
            typeText() {
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
                        // setTimeout(this.eraseText, this.nameDelay);
                    } else {
                        setTimeout(this.eraseText, this.newTextDelay);
                    }
                }
            },
            eraseText() {
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

	.intro {
		width: 100%;
		height: 50%;
		padding: 3rem;
		box-sizing: border-box;
		color: white;

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
				height: 2.5rem;
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

	.about-me {
		color: white;

		& .list-item {
			line-height: 100%;
			margin-bottom: 0.7rem;
		}

		& .aspiration {
			margin-top: -20%;
			margin-bottom: 1rem;
			width: 80%;
		}
	}
</style>
