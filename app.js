const eleves = JSON.parse(localStorage.getItem("ecuriePilotEleves") || "[]");


function ajouterEleve(nom) {
  const nomPropre = nom.trim();

  if (nomPropre === "") {
    alert("Entre le nom de l'élève.");
    return;
  }

  eleves.push({
    id: Date.now(),
    nom: nomPropre
  });

  console.log("Élève ajouté :", nomPropre);
  console.log("Liste des élèves :", eleves);
}

const formulaireEleve = document.getElementById("form-eleve");
const champNomEleve = document.getElementById("nom-eleve");
const listeEleves = document.getElementById("liste-eleves");

if (formulaireEleve) {
  formulaireEleve.addEventListener("submit", function (event) {
    event.preventDefault();

    ajouterEleve(champNomEleve.value);

    listeEleves.innerHTML = "";

    eleves.forEach(function (eleve) {
      const ligne = document.createElement("li");
      ligne.textContent = eleve.nom;
      listeEleves.appendChild(ligne);
    });

    champNomEleve.value = "";
  });
}
const formulaireEleve = document.getElementById("form-eleve");
const champNomEleve = document.getElementById("nom-eleve");
const listeEleves = document.getElementById("liste-eleves");

if (formulaireEleve && champNomEleve && listeEleves) {
  formulaireEleve.addEventListener("submit", function (event) {
    event.preventDefault();

    ajouterEleve(champNomEleve.value);

    listeEleves.innerHTML = "";

    eleves.forEach(function (eleve) {
      const ligne = document.createElement("li");
      ligne.textContent = eleve.nom;
      listeEleves.appendChild(ligne);
    });

    champNomEleve.value = "";
  });
}


