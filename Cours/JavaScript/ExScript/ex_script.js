let aleatoire = Math.floor(Math.random()*4);

 const Meteo = "Soleil";

// // if = si (unique)
if(Meteo === "Soleil"){
 console.log("Il fait beau");
 }

// // else if = sinon si 
 else if(Meteo === "Pluie"){
     console.log("Il pleut")
 }

// //else = sinon (unique) par défaut
 else {
 console.log("Météo inconnue")
 }

// // switch 

 switch(aleatoire){
     case 0:
         console.log("Zero");
         break;

         case 1:
             console.log("Un");
             break;

         case 2:
             console.log("Deux");
             break;

             case 3:
                 console.log("Trois")
                 break;

                 default:
                     console.log("Nbre inconnu")
 }

// while = Tant que
let i = 0;
while(i < 10){
    console.log("Fuck you Macron!");
    i++
}

// for = Pour
for(let x = 0; x < 10; x++){
    console.log("Célia")
}

function ball(){
let q = document.querySelector("#question").value;
console.log(q);
}