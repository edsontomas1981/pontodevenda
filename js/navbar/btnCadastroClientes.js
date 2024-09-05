document.getElementById('btnCadastroClientes').addEventListener('click', async () => {
    state = 5
	let titulo = document.getElementById('titulo')
	titulo.textContent = "Cadastro de Clientes"
    loadHTML('conteudo', 'cadastroClientes.html');
});