document.getElementById('btnConfig').addEventListener('click', async () => {
	state = 6
	let titulo = document.getElementById('titulo');
	titulo.textContent = "Configurações";
    loadHTML('conteudo', 'configuracoes.html');
});
