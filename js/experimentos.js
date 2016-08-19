var data = {
	'articulos': [
		{
			'nombre':'samp-client-web', 
			'descripcion':'El cliente de SA:MP ha sido interpretado a una version web, esto se ha realizado para que se pueda utilizar la lista de Internet mientras que en el cliente original no (bug).', 
			'source':'https://github.com/iZume/web-samp-client',
			'demo':'http://149.56.97.86/samp-client',
			'lenguajes':'PHP, JavaScript, HTML, CSS'
		},
		{
			'nombre':'Time-Functions-in-SA-MP',
			'descripcion':'Es un include que contiene una amplia extension de funciones nuevas para gestionar la fecha/el tiempo en SA:MpP',
			'source':'https://github.com/iZume/Tme-Functions-in-SA-MP',
			'demo':'http://forum.sa-mp.com/showthread.php?t=533391',
			'lenguajes':'PAWN'
		},
		{
			'nombre':'pawn-tools',
			'descripcion':'Es una pagina que permite crear dialogos & 3DTextLabels en SA:MP (ayuda a programadores) desde una previsualizacion web que interpreta los codigos hexadecimales, saltos de linea, espacios del tab, e incluso la estructura visible de un dialogo',
			'source':'https://github.com/iZume/pawn-tools',
			'demo':'http://pawntools.ml/',
			'lenguajes':'PHP, HTML, CSS, Javascript'
		},
		{
			'nombre':'ascii-art-in-samp',
			'descripcion':'Es un include para generar textos en 3D utilizando objetos del SA:MP, permite generar cualquier tipo de texto que cumpla con los primeros 127 caracteres ASCII, por lo que se incluyen numeros, caracteres especiales y letras.',
			'source':'https://github.com/iZume/ASCII-Art-in-SA-MP',
			'demo':'http://forum.sa-mp.com/showthread.php?t=612839',
			'lenguajes':'PAWN'
		}
	]
};

$(document).ready(function() {
	$.map(data.articulos, function(item, i ) {
		$('#lista-de-codigos').append('<li><strong>' + item.nombre + '</strong> <legend>(' + item.lenguajes +')</legend><ul><li>' + item.descripcion + '</li><li>Source: <a target="_blank" href="' + item.source + '">' + item.source + '</a> ' + (item.demo == undefined ? '' : '(demo: <a target="_blank" href="' + item.demo + '">' + item.demo + '</a>)') + '</li></ul></li>');
	});
	$('#notas').append('La lista no está del todo actualizada, pronto se agregarán los repositorios faltantes para tenerlo todo a la disposición de uno.');
});
