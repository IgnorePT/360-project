var initGame = document.getElementById("init_game");
var pairGameTemp = 0;
var attemptsOnPairGame = 0;
var pairsCompleted = 0;

var finalPoints = 0;

function hideSectionById(id) {
    document.getElementById(id).classList.add("hidden");
}

function showSectinById(id) {
    document.getElementById(id).classList.remove("hidden");
}

function chooseCiclo() {
    var optionActive = document.querySelector(".option:not(.pair).active");

    if (optionActive) {
        optionActive.classList.remove("active");
    }

    this.classList.toggle("active");
    initGame.disabled = false;
}

function initChallenge() {
    gsap.to("#ciclo-section", {
        opacity: 0,
        duration: 1,
        y: -50,
        ease: "power2.out",
    });
    gsap.to(".game-background .initial_screen", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from('.feature', { scrollTrigger: ".features-list", opacity: 0, duration: 1, y: 50, stagger: 1, ease: "power2.out" })

    setTimeout(function () {
        //Hide Ciclo Selection
        hideSectionById("ciclo-section");
        hideSectionById("ciclo-bg");

        //Show
        showSectinById("question_1");
        showSectinById("question_1_bg");

        LoadMusicQuiz();
    }, 1000);
}

function LoadMusicQuiz() {
    gsap.from("#question_1", {
        opacity: 0,
        duration: 0.8,
        y: 50,
        ease: "power2.out",
    });
    gsap.from("#question_1_bg", { opacity: 0, duration: 1, ease: "power2.out" });

    document
        .querySelectorAll("#question_1 > .image-game > .image")
        .forEach(function (image) {
            image.addEventListener("click", function () {
                let isSolution = this.dataset.solution === "true";
                let title = isSolution ? "Excelente!" : "Resposta errada!";

                document.querySelector("#result_1 .result_title").innerText = title;
                gsap.to("#question_1", {
                    opacity: 0,
                    duration: 0.8,
                    scale: 0.8,
                    ease: "power2.out",
                });

                if (isSolution) {
                    console.log("Right");
                    finalPoints++
                } else {
                    console.log("Wrong");
                }

                setTimeout(function () {
                    hideSectionById("question_1");
                    showSectinById("result_1");

                    //
                    gsap.from("#result_1", {
                        opacity: 0,
                        duration: 0.8,
                        scale: 0.8,
                        ease: "power2.out",
                    });
                }, 1200);
            });
        });
}

function GameQuiz() {
    console.log("Second Challenge");

    document
        .querySelectorAll("#question_2 > .multiple_question > .options > .option")
        .forEach(function (btn) {
            btn.addEventListener("click", function () {
                let isSolution = this.dataset.solution === "true";
                let title = isSolution ? "Excelente!" : "Resposta errada!";

                document.querySelector("#result_2 .result_title").innerText = title;
                if (isSolution) {
                    console.log("Animate Right");
                    finalPoints++
                } else {
                    console.log("Animate Wrong");
                }

                gsap.to("#question_2", {
                    opacity: 0,
                    duration: 0.8,
                    scale: 0.8,
                    ease: "power2.out",
                });

                setTimeout(function () {
                    hideSectionById("question_2");
                    showSectinById("question_2_bg");
                    showSectinById("result_2");

                    gsap.from("#question_2_bg", {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                    });

                    gsap.from("#result_2", {
                        opacity: 0,
                        duration: 0.8,
                        scale: 0.8,
                        ease: "power2.out",
                    });
                }, 800)


            });
        });
}

function PairGame() {
    document
        .querySelectorAll("#question_3 > .select_pairs > .options > .option")
        .forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                
                if(this.classList.contains('shake')){
                    this.classList.remove('shake');
                }

                if (!pairGameTemp) {
                    return (pairGameTemp = this.dataset.pair);
                }

                if (pairGameTemp === this.dataset.pair) {
                    const selectedPair = document.querySelectorAll("[data-pair]");

                    const filteredpair = Array.from(selectedPair).filter(
                        (el) => el.dataset.pair == pairGameTemp
                    );

                    Array.from(filteredpair).forEach(function (el) {
                        el.style.visibility = "hidden";
                        el.style.pointerEvents = "none";
                    });
                    pairGameTemp = 0;
                    pairsCompleted++;
                } else {

                    this.classList.add('shake');
                    if (attemptsOnPairGame >= 2) {
                        console.log("Jogo dos Pares Completo - Erro!");
                        finishGame();
                    }

                    Array.from(document.querySelectorAll("[data-pair]")).forEach(
                        function (el) {
                            el.classList.remove("active");
                        }
                    );

                    pairGameTemp = 0;
                    attemptsOnPairGame++;
                }

                if (pairsCompleted === 4) {
                    console.log("Jogo dos Pares Completo - Sucerro");
                    finalPoints++;
                    finishGame();
                }
            });
        });
}

function finishGame() {

    const result = (finalPoints / 3) * 100;

    document.querySelector(".result_big").innerText = result.toFixed() + "%";


    gsap.to("#question_3", {
        opacity: 0,
        duration: 0.8,
        scale: 0.8,
        ease: "power2.out",
    });

    setTimeout(function () {
        hideSectionById("question_3");
        showSectinById("result_final");
        showSectinById("final_result_bg");


        gsap.from("#final_result_bg", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        });

        gsap.from("#result_final", {
            opacity: 0,
            duration: 0.8,
            scale: 0.8,
            ease: "power2.out",
        });

    }, 800)
}

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#ciclo-section", {
        opacity: 0,
        duration: 1,
        y: 50,
        ease: "power2.out",
    });

    ActivateChooseCiclo();
    LoadGameQuiz();
    LoadPairGame();

    initGame.addEventListener("click", initChallenge);
});

function ActivateChooseCiclo() {
    document.querySelectorAll(".option").forEach((btn) => {
        btn.addEventListener("click", chooseCiclo);
    });
}

function LoadGameQuiz() {
    document
        .getElementById("next_challenge")
        .addEventListener("click", function () {
            GameQuiz();

            gsap.to("#result_1", {
                opacity: 0,
                duration: 0.8,
                y: -50,
                ease: "power2.out",
            });

            gsap.to("#question_1_bg", {
                opacity: 0,
                duration: 0.8,
                y: -50,
                ease: "power2.out",
            });

            setTimeout(function () {
                hideSectionById("result_1");
                hideSectionById("question_1_bg");

                showSectinById("question_2");

                gsap.from("#question_2", {
                    opacity: 0,
                    duration: 1,
                    y: 50,
                    ease: "power2.out",
                });
            }, 800)



        });
}

function LoadPairGame() {
    document
        .getElementById("next_challenge_last")
        .addEventListener("click", function () {
            PairGame();

            gsap.to("#result_2", {
                opacity: 0,
                duration: 0.8,
                y: -50,
                ease: "power2.out",
            });

            gsap.to("#question_2_bg", {
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            });

            setTimeout(function () {

                hideSectionById("result_2");
                showSectinById("question_3");
                showSectinById("question_3_bg");


                gsap.from("#question_3_bg", {
                    opacity: 0,
                    duration: 0.1,
                    ease: "power2.out",
                });

                gsap.from("#question_3", {
                    opacity: 0,
                    duration: 1,
                    y: 50,
                    ease: "power2.out",
                });
            }, 800)


        });
}


