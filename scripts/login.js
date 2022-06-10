$(document).ready(function () {
	$("#cpf").mask("999.999.99999");
	$("#cpf").focus();

	$("#topo_right").mouseover(function () {
		$(this).css("cursor", "pointer");
	});

});