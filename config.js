// ============================================================
//  CONFIGURATION DU SITE — le SEUL fichier à adapter pour votre club
//  (voir GUIDE_INSTALLATION.pdf, étapes 3 et 5)
// ============================================================
const CONFIG = {
  // 1) Nom affiché dans les titres, l'en-tête et la barre latérale
  clubName: "NOM DU CLUB",

  // 1bis) Sous-titre affiché sous le titre de la saisie (optionnel)
  subtitle: "Ville — Ligue XXX",

  // 2) Identifiant technique = dossier des compétitions dans Firebase.
  //    SANS espaces ni accents (lettres, chiffres, _). Ne plus changer une fois des compétitions créées.
  clubKey: "NOM_DU_CLUB",

  // 3) Adresse du site sur GitHub Pages (sert à fabriquer les QR codes)
  //    Forme : https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT
  githubBase: "https://votre-compte.github.io/resultats-tir",

  // 4) Clés Firebase — à copier depuis la console Firebase :
  //    Paramètres du projet ⚙️ → Général → Vos applications → Configuration du SDK (firebaseConfig)
  firebase: {
    apiKey: "COLLER_ICI",
    authDomain: "VOTRE-PROJET.firebaseapp.com",
    databaseURL: "https://VOTRE-PROJET-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "VOTRE-PROJET",
    storageBucket: "VOTRE-PROJET.firebasestorage.app",
    appId: "COLLER_ICI"
  }
};
