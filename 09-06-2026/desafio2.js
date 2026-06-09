// DESAFIO 2 — A Gangue Controlada do Taz
// 1. Adicione o Taz no início do array de gangue, somente se o array estiver vazio.
const gangue = ['test', 'Patolino', 'Gaguinho', 'Lola Bunny'];
if (gangue.length === 0) {
  gangue.unshift('Taz');
}
console.log(gangue);

// 2. Remova o último membro, a menos que esse membro seja o Taz.
if (gangue.length > 0 && gangue[gangue.length - 1] !== 'Taz') {
  gangue.pop();
}
console.log(gangue);

// 3. Remova o primeiro membro somente se o nome dele tiver menos de 5 letras.
if (gangue.length > 0 && gangue[0].length < 5) {
  gangue.shift();
}
console.log(gangue);

// 4. Adicione Tina apenas se existir alguém cujo nome termine com a letra “a”.

// 5. Crie uma cópia contendo apenas os membros com nomes entre 5 e 8 letras.
const copia = gangue.filter(membro => membro.length >= 5 && membro.length <= 8);
console.log(copia);