
var initGame = document.getElementById('init_game');


function chooseCiclo() {
    var optionActive = document.querySelector('.option.active');

    if (optionActive) {
        optionActive.classList.remove('active');
    }

    this.classList.add('active');
    initGame.disabled = false;
}

function firstChallenge() {
    console.log("First Challenge");

    document.querySelectorAll('#question_1 > .image-game > .image').forEach(function (image) {
        image.addEventListener('click',
            function () {
                let isSolution = (this.dataset.solution === 'true');
                let title = (isSolution) ? "Excelente!" : "Resposta errada!";

                document.querySelector("#result_1 .result_title").innerText = title;
                if(isSolution){
                    console.log("Right");
                } else {
                    console.log("Wrong");
                }

                hideSectionById('question_1');
                showSectinById('result_1');
            })

    })
}


function hideSectionById(id) {
    document.getElementById(id).classList.add('hidden')
}

function showSectinById(id) {
    document.getElementById(id).classList.remove('hidden')
}

function initChallenge() {
    hideSectionById('ciclo-section');
    showSectinById('question_1');

    firstChallenge();
}



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.option').forEach(btn => {
        btn.addEventListener('click', chooseCiclo)
    });

    initGame.addEventListener('click', initChallenge);
})



