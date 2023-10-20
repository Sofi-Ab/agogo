const compt_a_rebours = document.getElementsByClassName('compte')
const chrono1 = document.getElementsByClassName('second')
const chrono2 = document.getElementsByClassName('cap')
const chrono3 = document.getElementsByClassName('tea')
const chrono4 = document.getElementsByClassName('petitDej')
const chrono5 = document.getElementsByClassName('dejeuner')
const inputSet = document.querySelector('input');
console.log(inputSet);

/* *********************** declaration des variables*************************** */
const   heures = 0, 
        minute = 0,
        second = 0;

let timeout;
const estArrete = true;

const sec            = 20,
      capucino       = 5,
      the            = 15,
      petit_dejeuner = 20,
      dejeuner       = 30; 

      sec  
const demarrer = () => {
    if (estArrete) {
        estArrete = true; 
        defilerTemps();
    }
   
};

const arreter = () => {
    if (!estArrete) {
        estArrete = true; 
    }
   
};

const defilerTemps = () => {
        if (estArrete) return;
    };