//ciblage du DOM
const flagEn = document.getElementById('en');
const flagIt = document.getElementById('it');
const spansEn = document.getElementsByClassName('en');
const spansIt = document.getElementsByClassName('it');
//variable permettant de relier des flags et des spans 
//variable utilisée par la fonction addEventsV2
let languages = [
    {flag: flagEn, spans: spansEn, active: false}, 
    {flag: flagIt, spans: spansIt, active: false}
];



//console.log(liens);

//function
//Aproche 1 : on copie les instruction pour chaque langue
//redondance
function addEvents(){
    flagEn.addEventListener('click', e => {
        for(let i = 0; i<spansEn.length; i++){
            spansEn[i].style.display = 'inline';
        }
    })

    flagIt.addEventListener('click', e => {
        for(let i = 0; i<spansIt.length; i++){
            spansIt[i].style.display = 'inline';
        }
    })
}
//Aproche 2 : optimisation on passe par un tableau mettant en relation 
//sous forme d'objet des drapeaux et des span 
//pas de code redondant il suffit de modifier la variable languages 
//pour ajouter une langue , addEventsV2 continuera de fonctionner
//sans besoin d'etre modifiée
function addEventsV2(){
    languages.forEach(language =>{
        language.flag.addEventListener('click', e =>{
            
            //let display = '';
            //if(language.active){
                //display = 'none'
           // }else{
               // display = 'inline'
           // }

           //Expression ternaire
           //(expr. bool) ? instruction vrai : instruction Faux
           //si la language.active vaut true display est initialisée
           //avec la valeur 'none', sinon display reçoit 'inline'
           let display = (language.active) ? 'none' : 'inline';
            
           for(let i = 0; i<language.spans.length; i++){
                language.spans[i].style.display = display;
            }

            //changer l'apparence du drapeau

           // if(language.active){
               // language.flag.style.opacity = 0.3;
           // }else{
               // language.flag.style.opacity = 1;
            //}


            //Expression ternaire
             language.flag.style.opacity = (language.active) ? 0.3 : 1;
            //bascule (toogle) on renverse la valeur de language active
            //grace à l'opérateur de négation (inverse) !
            language.active = !language.active;
        })
    })
}

function init(){
    addEventsV2();
}

init();