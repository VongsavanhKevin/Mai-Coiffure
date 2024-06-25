let logoElements = document.getElementsByClassName("logo");
if (logoElements.length > 0) {
    let logo = logoElements[0]; 
    logo.addEventListener('click', function() {
        window.location.href = 'file:///C:/Users/vongk/OneDrive/Bureau/Code/Perso/Salon.html';
    });
}