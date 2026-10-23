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
localStorage.setItem("ecuriePilotEleves", JSON.stringify(eleves));
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
function afficherEleves() {
  const liste = document.getElementById("liste-eleves");

  if (!liste) return;

  liste.innerHTML = "";

  eleves.forEach(function (eleve) {
    const ligne = document.createElement("li");
    const nom = document.createElement("span");
    const bouton = document.createElement("button");

    nom.textContent = eleve.nom;
    bouton.textContent = "Supprimer";

    bouton.addEventListener("click", function () {
      const index = eleves.findIndex(function (item) {
        return item.id === eleve.id;
      });

      if (index !== -1) {
        eleves.splice(index, 1);
        localStorage.setItem(
          "ecuriePilotEleves",
          JSON.stringify(eleves)
        );
        afficherEleves();
      }
    });

    ligne.appendChild(nom);
    ligne.appendChild(bouton);
    liste.appendChild(ligne);
  });
}


afficherEleves();
const chevaux = JSON.parse(
  localStorage.getItem("ecuriePilotChevaux") || "[]"
);

function ajouterCheval(nom, objectif) {
  const nomPropre = nom.trim();

  if (nomPropre === "") {
    alert("Entre le nom du cheval.");
    return;
  }

  chevaux.push({
    id: Date.now(),
    nom: nomPropre,
    objectif: objectif || "À définir"
  });

  localStorage.setItem(
    "ecuriePilotChevaux",
    JSON.stringify(chevaux)
  );

  console.log("Cheval ajouté :", nomPropre);
}




