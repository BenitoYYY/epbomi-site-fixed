# Site web EPBOMI

Ce dépôt contient une version statique et autonome du site web de l’Église Protestante Baptiste Œuvres et Mission (EPBOMI). Il a été conçu pour être déployé facilement sur GitHub Pages, Bolt ou tout autre hébergeur de sites statiques.

## Contenu

* **HTML** : des pages pour l’accueil (`index.html`), l’histoire (`about.html`), le pasteur (`pastor.html`), les ministères (`ministries.html`), les actualités (`news.html`) et la page de contact (`contact.html`). Une page d’erreur simple (`404.html`) est également incluse.
* **CSS** : la feuille de style `styles.css` définit les couleurs, la typographie et la mise en page. Elle utilise la police Google « Poppins » avec des alternatives locales pour garantir un rendu cohérent.
* **JS** : `script.js` gère l’ouverture du menu burger sur mobile.
* **Images** : tous les visuels nécessaires se trouvent dans le dossier `images/`.
* **Fichiers spéciaux** :
  * `.nojekyll` : empêche GitHub Pages d’utiliser Jekyll, afin que tous les fichiers et dossiers soient servis tels quels.
  * `README.md` : ce fichier.

## Déploiement sur GitHub Pages

1. Créez un nouveau dépôt sur votre compte GitHub (public ou privé selon vos besoins). Si vous souhaitez activer GitHub Pages, assurez‑vous qu’il est public.
2. Copiez le contenu de ce dossier à la racine du dépôt.
3. Dans les paramètres du dépôt, ouvrez la section **Pages** et sélectionnez la branche `main` et le dossier `/` (root) comme source. Enregistrez.
4. Votre site sera disponible à l’URL indiquée dans la section Pages, généralement `https://<votre-nom>.github.io/<nom-du-depot>/`.

## Notes

* Les liens des notes de bas de page sont désactivés (`href="#"`) pour éviter des requêtes vers des sources externes lorsque le site est hébergé sur GitHub Pages.
* Ce projet est à titre illustratif et peut servir de base pour un site d’église ou toute autre organisation à but non lucratif.
