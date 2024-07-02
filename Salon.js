let logoElements = document.getElementsByClassName("logo");
if (logoElements.length > 0) {
    let logo = logoElements[0]; 
    logo.addEventListener('click', function() {
        window.location.href = 'file:///C:/Users/vongk/OneDrive/Bureau/Code/Perso/Salon.html';
    });
}

$(document).ready(function() {
    // Affiche le contenu correspondant lorsque l'on clique sur les boutons
    $('#coupes').on('click', function() {
        $('#coupes, #couleur, #lissage').css('color', '');
        $('#coupes').css('color', 'red');
        $('.content-section').hide();
        $('#ContenuCoupes').show();
    });

    $('#couleur').on('click', function() {
        $('#coupes, #couleur, #lissage').css('color', '');
        $('#couleur').css('color', 'red');
        $('.content-section').hide();
        $('#ContenuCouleur').show();
    });

    $('#lissage').on('click', function() {
        $('#coupes, #couleur, #lissage').css('color', '');
        $('#lissage').css('color', 'red');
        $('.content-section').hide();
        $('#ContenuLissage').show();
    });
});
