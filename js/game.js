var initGame = document.getElementById('init_game');
var pairGameTemp = 0;
var attemptsOnPairGame = 0;
var pairsCompleted = 0;


function chooseCiclo() {
    var optionActive = document.querySelector('.option:not(.pair).active')

    if (optionActive) {
        optionActive.classList.remove('active')
    }

    this.classList.toggle('active')
    initGame.disabled = false
}

function firstChallenge() {
    console.log('First Challenge')

    gsap.from('#question_1', {opacity: 0, duration: 0.8, y: 50, ease: "power2.out"})
    gsap.from('.game-background .first_screen',{opacity: 0, duration: 1, ease: "power2.out"})
    
    document
        .querySelectorAll('#question_1 > .image-game > .image')
        .forEach(function (image) {
            image.addEventListener('click', function () {
                let isSolution = this.dataset.solution === 'true'
                let title = isSolution ? 'Excelente!' : 'Resposta errada!'

                document.querySelector('#result_1 .result_title').innerText = title
                gsap.to('#question_1', {opacity: 0, duration: 0.8, scale: 0.8, ease: "power2.out"})
                
                if (isSolution) {
                    console.log('Right')
                } else {
                    console.log('Wrong')
                }

                
                setTimeout(function(){
                    hideSectionById('question_1')
                    showSectinById('result_1')
                    gsap.from('#result_1', {opacity: 0, duration: 0.8, scale: 0.8, ease: "power2.out"})
                }, 1200)
            
            })
        })
}

function secondChallenge() {
    console.log('Second Challenge')

    document
        .querySelectorAll('#question_2 > .multiple_question > .options > .option')
        .forEach(function (btn) {
            btn.addEventListener('click', function () {
                let isSolution = this.dataset.solution === 'true'
                let title = isSolution ? 'Excelente!' : 'Resposta errada!'

                document.querySelector('#result_2 .result_title').innerText = title
                if (isSolution) {
                    console.log('Animate Right')
                } else {
                    console.log('Animate Wrong')
                }

                hideSectionById('question_2')
                showSectinById('result_2')
            })
        })
}

function lastChallenge() {

    document.querySelectorAll('#question_3 > .select_pairs > .options > .option').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (!pairGameTemp) {
                return pairGameTemp = this.dataset.pair;
            }

            if (pairGameTemp === this.dataset.pair) {
                const selectedPair = document.querySelectorAll("[data-pair]");

                const filteredpair = Array.from(selectedPair).filter(el => el.dataset.pair == pairGameTemp)

                Array.from(filteredpair).forEach(function (el) {
                    el.style.visibility = "hidden";
                    el.style.pointerEvents = "none";
                })
                pairGameTemp = 0;
                pairsCompleted++

            } else {
                if (attemptsOnPairGame >= 4) {
                    console.log("Jogo dos Pares Completo - Erro!");
                    finishGame();
                }

                Array.from(document.querySelectorAll("[data-pair]")).forEach(function (el) {
                    el.classList.remove('active');
                })

                pairGameTemp = 0;
                attemptsOnPairGame++
            }

            if (pairsCompleted === 4) {
                console.log("Jogo dos Pares Completo - Sucerro");
                finishGame();
            }

        })
    })
}

function finishGame(){
    hideSectionById('question_3')
    showSectinById('result_final')
}

function hideSectionById(id) {
    document.getElementById(id).classList.add('hidden')
}

function showSectinById(id) {
    document.getElementById(id).classList.remove('hidden')
}

function initChallenge() {

    gsap.to('#ciclo-section', {opacity: 0, duration: 1, y: -50, ease: "power2.out"})
    gsap.to('.game-background .initial_screen',{opacity: 0, duration: 1, ease: "power2.out"})
    
    setTimeout(function(){
        hideSectionById('ciclo-section')
        showSectinById('question_1')

        firstChallenge()
    },1000)
}

document.addEventListener('DOMContentLoaded', () => {

    gsap.from('#ciclo-section', {opacity: 0, duration: 1, y: 50, ease: "power2.out"})

    document.querySelectorAll('.option').forEach((btn) => {
        btn.addEventListener('click', chooseCiclo)
    })

    initGame.addEventListener('click', initChallenge)

    document.getElementById('next_challenge').addEventListener("click", function () {
        secondChallenge()
        hideSectionById('result_1')
        showSectinById('question_2')
    })

    document.getElementById('next_challenge_last').addEventListener("click", function () {
        lastChallenge()
        hideSectionById('result_2')
        showSectinById('question_3')
    })
})
