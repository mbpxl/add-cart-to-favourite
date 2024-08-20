document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.catalog__card .add');

    const favouritedSection = document.querySelector('.favourited');

    addButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.currentTarget.closest('.catalog__card');

            const clonedCard = card.cloneNode(true);

            const addButtonInClonedCard = clonedCard.querySelector('.add');
            if (addButtonInClonedCard) {
                addButtonInClonedCard.remove();
            }

            favouritedSection.appendChild(clonedCard);
        });
    });
});