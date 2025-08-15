import { personagem } from "./personagem";

const p: personagem = new personagem();
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

console.table(p);
