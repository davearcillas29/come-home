export function initBurgerMenu(){
    const burgerBtn = document.getElementById('burger');
    const readingsSection = document.getElementById('readings-section');

    if (burgerBtn && readingsSection){
        burgerBtn.addEventListener('click', () => {

            const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';

            burgerBtn.setAttribute('aria-expanded', !isExpanded);
            readingsSection.classList.toggle('is-hidden');
        });
    }
}