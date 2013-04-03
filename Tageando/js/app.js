require(["jquery", "jquery.mobile-1.2.0.min"], function($) {
    
    $(function() {
        console.log("Template with jquery mobile!");
    });

});

var tags = ["familia", "finanzas", "viajes", "otros", "firefox"];
var imagenes = [["foto1Familia.png", "foto2Familia.png", "foto3Familia.png"], 
                ["foto1Finanzas.png", "foto2Finanzas.png", "foto3Finanzas.png"], 
                ["foto1Viajes.png", "foto2Viajes.png"],
                ["foto1Otros.png"],
                ["foto1Firefox.png", "foto2Firefox.png", "foto3Firefox.png", "foto4Firefox.png"],
                ];

var idLista = 'tags';

var pinto = function (semilla, tag){
	if (tag == null || (semilla != null && !tag.contains(semilla))){
		return false;
	}
	return true;
};

var seleccionarTag = function(tag){
	alert (tag);
}

var generaLista = function (semilla){
	var elem = document.getElementById(idLista);
	elem.innerHTML = "";
	if (tags.length > 0){
		for (var h = 0; h < tags.length; h++){
			if (pinto(semilla, tags[h])){
				var anchor=document.createElement("a");
				anchor.href = "results.html?tag=" + tags[h];
				anchor.innerHTML = tags[h];
				elem.appendChild(anchor);
			}
		}
	}
};

var buscar = function(elem){
	var semilla = elem.value;
	if ( semilla.length > 0 ){
		generaLista(semilla);
	}else{
		generaLista(null);
	}
	TagCanvas.Update('myCanvas', 'tags');
};


var get = function (name){
	var reg = new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)');
	var ret=(reg.exec(window.location.search));
   if(ret){
	  return decodeURIComponent(ret[1]);
   }
};