// ============================================================
//  CONFIGURATION DU SITE — le SEUL fichier à adapter pour votre club
//  (voir GUIDE_INSTALLATION.pdf, étapes 3 et 5)
// ============================================================
const CONFIG = {
  // 1) Nom affiché dans les titres, l'en-tête et la barre latérale
  clubName: "Société de Tir de Narbonne",

  // 1bis) Sous-titre affiché sous le titre de la saisie (optionnel)
  subtitle: "Narbonne",

  // 2) Identifiant technique = dossier des compétitions dans Firebase.
  //    SANS espaces ni accents (lettres, chiffres, _). Ne plus changer une fois des compétitions créées.
  clubKey: "TIR_NARBONNE",

  // 3) Adresse du site sur GitHub Pages (sert à fabriquer les QR codes)
  //    Forme : https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT
  githubBase: "https://stnarbonne.github.io/resultats",

  // 4) Clés Firebase — à copier depuis la console Firebase :
  //    Paramètres du projet ⚙️ → Général → Vos applications → Configuration du SDK (firebaseConfig)
  firebase: {
    apiKey: "AIzaSyBHDHtqLj0qppjeXKhz4jVNK7--oTt-NjE",
    authDomain: "resultats-tir-narbonne.firebaseapp.com",
    databaseURL: "https://resultats-tir-narbonne-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resultats-tir-narbonne",
    storageBucket: "resultats-tir-narbonne.firebasestorage.app",
    appId: "1:948307867362:web:8ec7b4e6d468a62d9b10bb"
  }
};
