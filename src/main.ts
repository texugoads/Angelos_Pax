import { personagem } from "./personagem";
import prompt from "prompt-sync";

const teclado = prompt();

const p: personagem = new personagem("Edécio");
p.nome = "Dedé";
p.classe = "Monge";
p.raca = "Lith";
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = "cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima
p.poderAtaque = 1;

while(true){

    
    console.log("+---------------MENU---------------+")
    console.log("|1.Treinar Poder de Ataque         |")
    console.log("|2.Ver status                      |")
    console.log("|3.Checar se  Personagem esta vivo |")
    console.log("|4.Subir de Nivel                  |")
    console.log("|9. Sair                           |")
    console.log("+----------------------------------+")
    console.log("Só Deus na Causa!                   ")
    
    const escolha: number = +teclado("escolha uma opçao do menu:")
    
    if(escolha == 9){
        break;
    }
    switch (escolha) {
        case 1: 
        treinarPoderAtaque(p);
        break;
        
        case 2:
            console.table(p);
            break;

        case 3: 
        console.log(p.estaVivo()?"Personagem está vivo!":"pesonagem esta morto!");
        break;
    }
            
}
function treinarPoderAtaque(person: personagem): void {
    person.treinarPoderAtaque();
}
console.table(p);
