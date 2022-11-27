const modals = () => {
    function bindModal(trigger, modal, close) {
        /*function bindModal(triggerSelector, modalSelector, closeSelector) {
            const trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);*/

        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            //document.body.classList.add('modal-open'); /* bootstrap */
        });


        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            //document.body.classList.add('modal-open'); /* bootstrap */
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            //document.body.classList.add('modal-open'); /* bootstrap */
            }
        });
    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

        bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};
modals();
//export default modals;