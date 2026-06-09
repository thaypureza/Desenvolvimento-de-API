// DESAFIO 1 — Equipe Estratégica do Pernalonga
// 1. Crie uma variável para salvar um conjunto de personagens na equipe.
const equipe = ['Pernalonga', 'Lola Bunny'];
console.log(equipe);

// 2. Adicione o Patolino a equipe somente se a equipe tiver menos de 3 membros, e se
// ele ainda não estiver na equipe.
if (equipe.length < 3) {
  equipe.push('Patolino');
}
console.log(equipe);

// 3. Organize a equipe em ordem alfabética.
equipe.sort();
console.log(equipe);

//4. Coloque o personagem como líder (primeira posição)
equipe.unshift('Pernalonga');
equipe.pop();
console.log(equipe);

// 5. Adicione o Frajola, somente se nenhum nome começar com “F” ainda.



