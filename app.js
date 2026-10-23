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
const boutonFiche = document.createElement("button");
boutonFiche.textContent = "Voir la fiche";
boutonFiche.type = "button";

boutonFiche.addEventListener("click", function () {
  obtenirFicheCheval(cheval.id);
});
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
    ligne.appendChild(boutonFiche);
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
  objectif: objectif || "À définir",
  notes: []
});

  localStorage.setItem(
    "ecuriePilotChevaux",
    JSON.stringify(chevaux)
  );

  console.log("Cheval ajouté :", nomPropre);
}
const formulaireCheval = document.getElementById("form-cheval");
const champNomCheval = document.getElementById("nom-cheval");
const champObjectifCheval = document.getElementById("objectif-cheval");
const listeChevaux = document.getElementById("liste-chevaux");

function afficherChevaux() {
  if (!listeChevaux) return;

  listeChevaux.innerHTML = "";

  chevaux.forEach(function (cheval) {
    const ligne = document.createElement("li");
    const texte = document.createElement("span");
    const bouton = document.createElement("button");

    texte.textContent = cheval.nom + " — " + cheval.objectif;
    bouton.textContent = "Supprimer";
    bouton.type = "button";

    bouton.addEventListener("click", function () {
      const index = chevaux.findIndex(function (item) {
        return item.id === cheval.id;
      });

      if (index !== -1) {
        chevaux.splice(index, 1);
        localStorage.setItem(
          "ecuriePilotChevaux",
          JSON.stringify(chevaux)
        );
        afficherChevaux();
      }
    });

    ligne.appendChild(texte);
    ligne.appendChild(bouton);
    listeChevaux.appendChild(ligne);
  });
}

if (formulaireCheval && champNomCheval && listeChevaux) {
  formulaireCheval.addEventListener("submit", function (event) {
    event.preventDefault();

    ajouterCheval(
      champNomCheval.value,
      champObjectifCheval.value
    );

    afficherChevaux();
    formulaireCheval.reset();
  });
}

afficherChevaux();
function obtenirFicheCheval(id) {
  const cheval = chevaux.find(function (item) {
    return item.id === id;
  });

  if (!cheval) {
    alert("Cheval introuvable.");
    return;
  }

  const notesTexte = (cheval.notes || [])
  .map(function (note) {
    return note.date + " : " + note.texte;
  })
  .join("\n");

const notesTexte = (cheval.notes || [])
  .map(function (note) {
    return note.date + " : " + note.texte;
  })
  .join("\n");

const fiche =
  "Nom : " + cheval.nom + "\n" +
  "Objectif de travail : " + cheval.objectif + "\n\n" +
  "Notes de suivi :\n" +
  (notesTexte || "Aucune note pour le moment.");
function ajouterNoteCheval(id, texte) {
  const cheval = chevaux.find(function (item) {
    return item.id === id;
  });

  if (!cheval) {
    alert("Cheval introuvable.");
    return;
  }

  const notePropre = texte.trim();

  if (notePropre === "") {
    alert("Écris une note avant de l'enregistrer.");
    return;
  }

  if (!cheval.notes) {
    cheval.notes = [];
  }

  cheval.notes.push({
    date: new Date().toLocaleDateString("fr-FR"),
    texte: notePropre
  });

  localStorage.setItem(
    "ecuriePilotChevaux",
    JSON.stringify(chevaux)
  );

  alert("Note enregistrée pour " + cheval.nom + " !");
}

