const projetos = [
{ nome: "Projeto 1", descricao: "Exemplo", link: "#" }
];
const container = document.getElementById("lista-projetos");
projetos.forEach(p => {
const div = document.createElement("div");
div.innerHTML = `<h3>${p.nome}</h3><p>${p.descricao}</p>`;
container.appendChild(div);
});
