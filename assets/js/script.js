const entradaTexto = document.getElementById('entrada-texto');
const saidaTexto = document.getElementById('saida-texto');
const conteudoLateral = document.getElementById('lateral');
const resultadoLateral = document.getElementById('resultado');
const botaoCopiar = document.getElementById('btn-copiar');

entradaTexto.addEventListener('input', () => {
	if (entradaTexto.value.trim()) {
		conteudoLateral.style.display = 'none';
		resultadoLateral.style.display = 'flex';
		saidaTexto.value = entradaTexto.value;
	} else {
		conteudoLateral.style.display = 'flex';
		resultadoLateral.style.display = 'none';
	}
});

function criptografar(texto) {
	return texto
		.replaceAll('e', 'enter')
		.replaceAll('i', 'imes')
		.replaceAll('a', 'ai')
		.replaceAll('o', 'ober')
		.replaceAll('u', 'ufat');
}

function criptografarTexto() {
	let resultado = saidaTexto.value;
	let textoCriptografado = criptografar(resultado);
	saidaTexto.value = textoCriptografado;
}

function descriptografar(texto) {
	return texto
		.replaceAll('enter', 'e')
		.replaceAll('imes', 'i')
		.replaceAll('ai', 'a')
		.replaceAll('ober', 'o')
		.replaceAll('ufat', 'u');
}

function descriptografarTexto() {
	let resultado = saidaTexto.value;
	let textoDescriptografado = descriptografar(resultado);
	saidaTexto.value = textoDescriptografado;
}

botaoCopiar.addEventListener('click', async () => {
	try {
		await navigator.clipboard.writeText(saidaTexto.value);
		alert('Texto copiado com sucesso');
	} catch (error) {
		alert('Falha ao copiar texto: ' + error);
	}
});
