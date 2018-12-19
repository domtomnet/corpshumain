// querySelectorAll permet de recupérer une liste des éléments du document qui correspondent au groupe de sélecteurs css .parties
var parties = document.querySelectorAll(".parties");

// boucle qui parcours élément de ma liste
for (var i = 0; i < parties.length; i++) {

	// pour chaque éléments j'écoute l'évenement click 
	// pour un survol (non pris en compte sur écran tactile) : 
	// parties[i].onmouseover = function(){
	parties[i].onclick = function(){

		// puis je récupère l'id de ma div
		var idDeMaDiv = this.id;

		//si ma div ne possède pas la class active
		if(!this.classList.contains("active")){

			// pour tous les éléments de type parties
			// j'enlève la class active
			for (var j = 0; j < parties.length; j++) {
				parties[j].classList.remove("active");

				// ensuite je récupère l'id
				var idTmp = parties[j].id;

				// et j'efface les block texte
				document.getElementById("texte_"+idTmp).style.display = "none";
				// solution alternative aux 2 dernières lignes :
				// document.getElementById("texte_"+parties[j].id).style.display = "none";
			}
			// après je rajoute la classe active sur l'élement clické
			this.classList.add("active");
			// et j'affiche le block div correspondant grace à l'id de ma div
			document.getElementById("texte_"+idDeMaDiv).style.display = "block";
		} 
		else {
			// si je reclick sur l'élément actif, j'enlève la class active
			// et efface le block texte correspondant
			this.classList.remove("active");
			document.getElementById("texte_"+idDeMaDiv).style.display = "none";
		}
	}
} 