document.getElementById('btnCadastros').addEventListener('click', async () => {
	state = 3
	let titulo = document.getElementById('titulo')
	titulo.textContent = "Cadastro de Produtos"
    loadHTML('conteudo', 'cadastros.html');
});