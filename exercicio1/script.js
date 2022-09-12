let coxinhas 
let conta = 0

while (coxinhas !== "N") {
    coxinhas = prompt("Deseja comer mais coxinhas? Digite S (para sim) ou N (para não).").toUpperCase();
    conta = conta + 2.5;    
        
}
console.log(`Sua conta deu R$: ${conta}`);
