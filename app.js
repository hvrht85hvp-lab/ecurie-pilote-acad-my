
const pages = {
  accueil: {
    titre: "Accueil",
    description: "Bienvenue chez Écurie Pilot Academy."
  },
  coach: {
    titre: "Espace Coach",
    description: "Organise ton académie et accompagne tes élèves."
  },
  eleve: {
    titre: "Espace Élève",
    description: "Retrouve tes objectifs et ton accompagnement."
  },
  "coach-eleves": {
    titre: "Mes élèves",
    description: "Gère les profils et le suivi de tes élèves."
  },
  "coach-chevaux": {
    titre: "Mes chevaux",
    description: "Consulte les fiches et les observations des chevaux."
  },
  "coach-programmes": {
    titre: "Programmes",
    description: "Prépare des programmes de travail personnalisés."
  },
  "coach-seances": {
    titre: "Mes séances",
    description: "Organise tes séances et suis la progression."
  },
  "coach-videos": {
    titre: "Bibliothèque vidéo",
    description: "Retrouve tes supports pédagogiques."
  },
  "coach-messages": {
    titre: "Messages",
    description: "Espace prévu pour les échanges avec les élèves."
  },
  "eleve-programme": {
    titre: "Mon programme",
    description: "Découvre les exercices de ton programme."
  },
  "eleve-cheval": {
    titre: "Mon cheval",
    description: "Retrouve les objectifs et le suivi de ton cheval."
  },
  "eleve-progres": {
    titre: "Mes progrès",
    description: "Suis ton évolution au fil des séances."
  },
  "eleve-videos": {
    titre: "Mes vidéos",
    description: "Consulte les vidéos de ta formation."
  },
  "eleve-messages": {
    titre: "Mes échanges",
    description: "Retrouve ici ton espace d'échange avec le coach."
  }
};

function afficherPage(nomPage) {
  const pageDemandee = pages[nomPage] ? nomPage : "accueil";

  document.querySelectorAll(".page").forEach(function (page) {
    page.hidden = true;
    page.classList.remove("active");
  });

  if (pageDemandee === "accueil" ||
      pageDemandee === "coach" ||
      pageDemandee === "eleve") {
    const section = document.getElementById("page-" + pageDemandee);

    if (section) {
      section.hidden = false;
      section.classList.add("active");
    }
  } else {
    const pageOutil = document.getElementById("page-outil");
    const titre = document.getElementById("titre-outil");
    const description = document.getElementById("description-outil");

    if (pageOutil) {
      pageOutil.hidden = false;
      pageOutil.classList.add("active");
    }

    if (titre) {
      titre.textContent = pages[pageDemandee].titre;
    }

    if (description) {
      description.textContent = pages[pageDemandee].description;
    }
  }

  document.querySelectorAll("[data-page]").forEach(function (element) {
    if (element.tagName === "A") {
      if (element.dataset.page === pageDemandee) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  });

  const menu = document.getElementById("menu-principal");
  const boutonMenu = document.getElementById("menu-toggle");

  if (menu) {
    menu.classList.remove("open");
  }

  if (boutonMenu) {
    boutonMenu.setAttribute("aria-expanded", "false");
  }

  window.scrollTo(0, 0);
}

document.querySelectorAll("[data-page]").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    const nomPage = element.dataset.page;
    afficherPage(nomPage);

    if (window.location.hash !== "#" + nomPage) {
      window.location.hash = nomPage;
    }
  });
});

const boutonMenu = document.getElementById("menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");

if (boutonMenu && menuPrincipal) {
  boutonMenu.addEventListener("click", function () {
    const menuOuvert = menuPrincipal.classList.toggle("open");

    boutonMenu.setAttribute(
      "aria-expanded",
      String(menuOuvert)
    );
  });
}

function chargerPageDepuisAdresse() {
  const nomPage = window.location.hash.replace("#", "") || "accueil";
  afficherPage(nomPage);
}

window.addEventListener("hashchange", chargerPageDepuisAdresse);

chargerPageDepuisAdresse();
