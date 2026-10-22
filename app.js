const eleves = [];

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
