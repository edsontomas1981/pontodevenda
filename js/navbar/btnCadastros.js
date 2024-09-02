document.getElementById('btnCadastros').addEventListener('click', async () => {
	state = 3
	let titulo = document.getElementById('titulo')
	titulo.textContent = "Cadastros"
    loadHTML('conteudo', 'cadastros.html');
});