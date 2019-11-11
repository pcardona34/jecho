'use strict'

/* JEcho : jecho.js
 ( c ) 2019 - Patrick Cardona
 Version 3.0
 */

/* =================================================================== */
/* LICENCE
/* =================================================================== */
/*
@licstart  The following is the entire license notice for the 
    JavaScript code in this page.

Copyright (C) 2012-2019  Patrick CARDONA - JEcho

    The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
    
@licend  The above is the entire license notice
    for the JavaScript code in this page.    
*/

// Objet Dictee :

function oDictee(){ 
	this.prof = "M. Untel"; // Nom de l'enseignant qui enregistré et saisi cet exercice
	this.titre = "Titre de l'exercice de réécriture";
	this.texte = "Texte avant..."; // Texte de référence
	this.correction = "Texte juste";
	this.auteur = "Anonyme"; // Auteur du texte
	this.ouvrage = "Sans titre";
	this.consigne = "Consigne de récriture";
	this.saisie;
		
}

oDictee.prototype.corrige = function() {
	if ( this.saisie.length > 0 ){
		// On compare le texte saisi au texte de référence :
		var sortie = diffString(this.saisie, this.correction);
		// On remplace les retours à la ligne par le code HTML :
		var reg = new RegExp ( /\n/g );
		return sortie.replace(reg,"<br />");
	}
	else {
		alert ("Veuillez d'abord saisir le texte transformé !");
		return -1;
	}
}

oDictee.prototype.affiche = function() {
		// On remplace les retours à la ligne par le code HTML :
		var reg = new RegExp ( /\n/g );
		return this.correction.replace(reg,"<br />");
}

	
