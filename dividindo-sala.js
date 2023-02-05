const alunos = [
    "João",
    "Paulo",
    "Tiago",
    "Pedro",
    "Marcos",
    "Jesus",
    "Mateus"
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);