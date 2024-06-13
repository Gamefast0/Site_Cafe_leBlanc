// récuperer le conposant <input type="text"> avec l'id "zonzSaisie"
let message = document.getElementById('zoneSaisie')

document.getElementById('monBouton').addEventListener('click', function () {

    let zoneSaisieContainer = document.getElementById('zoneSaisieContainer')
    
    // Si la zone de saisie est déjà affichée, la cacher; sinon, l'afficher
    if (zoneSaisieContainer.style.display === 'none') {
        zoneSaisieContainer.style.display = 'block'
    } else {
        zoneSaisieContainer.style.display = 'none'
    }
});
//on modifie l'URL de la page et déclenche une redirection vers la nouvelle URL spécifiée (dans ce cas, "Erreur.html") quand on presse la touche entrer dans la barre de recherche
message.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        document.location.href = "./Erreur.html"
    }
})