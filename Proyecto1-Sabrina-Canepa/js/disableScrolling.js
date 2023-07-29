const disableScrolling = () => {

    window.onscroll = () => window.scrollTo(0, 0);

};

const enableScrolling = () => {

    window.onscroll = () => window.scrollTo();

}

const checkbox = document.getElementById('btn-menu');

function isActived(){

    enableScrolling();

    checkbox.checked = false;

}

function validaCheckbox(){

    let checked = checkbox.checked;

    if (checked){

        disableScrolling();

    }
    else{

        enableScrolling();

    } 

}

checkbox.addEventListener('change', validaCheckbox, false);