const tableau = ["Enzo",27,"Homme","France"];

console.log(tableau[0]); // utilisation de l'index pour afficher la valeur

console.log(tableau.length); // permet de connaitre la longueur du Array

console.log(tableau.push(120)); // push pour ajouter à la fin du Array

console.log(tableau);

console.log(tableau.pop()); // pop pour suppr la dernière valeur

console.log(tableau);

console.log(tableau.unshift(1)); // unshift ajoute au début du Array

console.log(tableau);

console.log(tableau.shift()); // shift suppr au début du Array

console.log(tableau);

const backup = tableau.slice(); // slice copie le tableau

console.log(backup);

backup.splice(0,2); // splice supprime depuis un index 

console.log(backup);

console.log(tableau.indexOf("Homme"));