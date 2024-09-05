document.getElementById('btnContasAPagar').addEventListener('click', async () => {
	state = 4
	let titulo = document.getElementById('titulo')
	titulo.textContent = "Contas a Pagar"
    loadHTML('conteudo', 'contasAPagar.html');
});