PETITION NETLIFY — VERSION AVEC BANDEAU PHOTO ET COMPTEUR

FICHIERS
- index.html : page de pétition, photo en bandeau et compteur
- audiences-ici.png : image de bandeau fournie
- merci.html : page de remerciement
- netlify/functions/signatures-count.js : fonction serveur qui compte les soumissions Netlify Forms nommées « signatures-petition »
- netlify.toml : configuration de la fonction

IMPORTANT — LE BANDEAU
L'image est placée en haut de la page, en pleine largeur, et s'adapte aux mobiles.

IMPORTANT — LE COMPTEUR
Le compteur n'affiche un chiffre que lorsque la fonction serveur est déployée et configurée. Il ne fabrique pas de chiffre : tant que la connexion n'est pas active, il affiche « — ».
Pour sécuriser l'accès à l'API Netlify, la fonction nécessite deux variables d'environnement dans les paramètres du site :
- NETLIFY_AUTH_TOKEN : jeton d'accès personnel Netlify. Gardez-le secret et ne le placez jamais dans le HTML.
- SITE_ID : identifiant du site Netlify (visible dans Site configuration / General).
Après configuration, il faut déployer le site avec Netlify CLI ou via un dépôt Git, car un dépôt manuel de fichiers statiques ne déploie pas les fonctions serverless.
La fonction compte les soumissions Netlify dont le nom de formulaire est « signatures-petition ». Vérifiez le comportement sur le site de test avant toute diffusion publique.

DÉPLOIEMENT
Cette version contient une fonction Netlify : ne la publiez pas uniquement avec le dépôt manuel classique si vous souhaitez le compteur dynamique. Utilisez un déploiement via Git ou Netlify CLI avec le dossier racine de ce paquet.
Le formulaire HTML doit être détecté dans Netlify Forms. Après déploiement, faites une soumission test et vérifiez qu'elle apparaît dans Forms. Puis vérifiez que le compteur correspond au nombre de soumissions.

CONFIDENTIALITÉ
Avant collecte publique, complétez la notice RGPD dans le pied de page, activez les protections anti-spam disponibles et vérifiez les limites du forfait Netlify. Ne publiez jamais la liste des coordonnées des signataires.
