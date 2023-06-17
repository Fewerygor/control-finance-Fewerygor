/* Desenvolva sua lógica aqui */
const handleModal = () => {
    const button = document.querySelector('#showRegister');
    const openedModal = document.querySelector('.modal__controller');
    
    button.addEventListener('click', () => {
        openedModal.showModal();
        closeModal();
    });
}

const closeModal = () => {
    const button2 = document.querySelector('#closeRegister');
    const closedModal = document.querySelector('.modal__controller');

    button2.addEventListener('click', () => {
        closedModal.close();
    });
}
handleModal();

