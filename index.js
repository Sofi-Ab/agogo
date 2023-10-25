/* const compt_a_rebours = document.getElementsByClassName('compte')
const chrono1 = document.getElementsByClassName('second')
const chrono2 = document.getElementsByClassName('cap')
const chrono3 = document.getElementsByClassName('tea')
const chrono4 = document.getElementsByClassName('petitDej')
const inputSet = document.querySelector('input'); */
const inputSet = document.querySelector('input'); 
const form = document.querySelector('#formId')
let showDates = document.getElementById('showDates') 

let Dates = new Date();
console.log(Dates);
let getHeure = Dates.getHours()
console.log(getHeure);

let getMinute  = Dates.getMinutes()
console.log(getMinute);
let getSecond = Dates.getSeconds()
console.log(getSecond);

let inetervalSeconde = null;
/* *********************** declaration des variables*************************** */
let     heures = 0, 
        minute = 0,
        second = 0;
 
let ajoutSecond = 0,
    ajoutMinute = 0,
    ajoutHeures = 0;      

/* const sec            = 20,
      capucino       = 5,
      the            = 15,
      petit_dejeuner = 20,
      dejeuner       = 30;  */
  
/* *****************************Fonction pour faire decompte*********************** */
function decompte () {
    
    if(inetervalSeconde !== null){
        second--;
        if (second == -1) {
            second = 59;
            minute --
        }
        else if (minute == -1) {
            second = 59
            minute = 0
          
        } 

    }
    if (second === 0 && minute === 0 && heures === 0 ) {
     
        clearInterval(inetervalSeconde);

    }
    
    document.querySelector('.compte').innerHTML = `${heures}: ${minute}: ${second} `

}
/* ************************************* L'evenement au click *********************** */
function ajouterDate(param1, param2, param3) {
    
   
}
document.addEventListener('click', (e)=>{
    if(e.target.id === 'second'){
        ajoutSecond = 20;
        second = 20
        console.log(e.target.id);
        showDates.innerHTML  = `Be back at : ${getHeure } : ${getMinute} : ${Dates.setSeconds(getSecond)+ ajoutSecond}`
        if(inetervalSeconde) clearInterval(inetervalSeconde)
    inetervalSeconde = setInterval(decompte, 1000)
    }else if(e.target.id === 'cap'){
        if(inetervalSeconde) clearInterval(inetervalSeconde)
        ajoutMinute = 5;
        second = 0
        minute = 5
        showDates.innerHTML  = `Be back at : ${getHeure} : ${getMinute + ajoutMinute} : ${getSecond}`
        inetervalSeconde = setInterval(decompte, 1000)

/************************************** Pour le the *********************** */
    } else if (e.target.id === 'tea') {
        
        if(inetervalSeconde) clearInterval(inetervalSeconde)
        ajoutMinute = 15;
        second = 0
        minute = 15
        ajoutMinute = 15;
        showDates.innerHTML  = `Be back at : ${getHeure} : ${getMinute + ajoutMinute} : ${getSecond}`
        inetervalSeconde = setInterval(decompte, 1000)
/************************************** Pour le petitd deje *********************** */
    } else if (e.target.id === 'petitDej') {
        if(inetervalSeconde) clearInterval(inetervalSeconde)
        ajoutMinute = 20;
        second = 0
        minute = 20
        showDates.innerHTML  = `Be back at : ${getHeure} : ${getMinute + ajoutMinute} : ${getSecond}`
        inetervalSeconde = setInterval(decompte, 1000)
    } 
/************************************** Pour le dejeuner *********************** */ 
 if (e.target.id === 'dejeuner') {
    if(inetervalSeconde) clearInterval(inetervalSeconde);
    ajoutMinute = 30;
    second = 0
    minute = 30
    showDates.innerHTML  = `Be back at : ${getHeure} : ${getMinute + ajoutMinute} : ${getSecond}`
    inetervalSeconde = setInterval(decompte, 1000)
} 
 
/************************************** gestion de l'heure *********************** */ 

})
form.addEventListener('submit', (e)=> {
   e.preventDefault()
   if(inetervalSeconde) clearInterval(inetervalSeconde)
   if (inputSet.value >= 60) {
    heures = parseInt(inputSet.value / 60);
    minute = inputSet.value % 60;
    second = minute % second

   } 
   else{
    minute = inputSet.value % 60;
    second = 0
   }
    inetervalSeconde = setInterval(decompte, 1000)
}) 

