document.addEventListener("DOMContentLoaded", () => {

    const NewsletterEmail = document.getElementById('newsletter-email');
    const chooseProfileAction = document.querySelectorAll('.choose-profile > custom_checkbox_container > label');

    Array.from(chooseProfileAction).forEach(el => {
        el.addEventListener('click', function(){
            console.log('Select Profile')
            el.classList.toggle('active');
        })
    })



    NewsletterEmail.addEventListener('focus', () => {
        document.querySelectorAll('.form-hidden').forEach(el => {
            el.classList.remove('form-none');
            setTimeout(() => {
                el.classList.remove('form-hidden');
            }, 20)
        })
    })

    const NewsletterCiclo = document.getElementById('ciclo-estudo');

    const NewsletterActiveSelection = document.getElementsByClassName('active-selection')[0];

    NewsletterCiclo.addEventListener('change', (e) => {
        const node = getCicloElement(e.target.value);
        NewsletterActiveSelection.innerHTML = NewsletterActiveSelection.innerHTML + node;
        NewsletterActiveSelection.value = "";
    })

})

function getCicloElement(ciclo) {
    return `
    <span onclick="removeCiclo(this)">${ciclo} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#3B3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" stroke="#3B3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </span>
    `;
}

function removeCiclo(e) {
    e.remove();
}