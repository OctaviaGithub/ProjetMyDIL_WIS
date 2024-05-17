function redirectToPage() {
  window.location.href = "../../Code Piano/Test_css_Le_bon.html";
}

//===================================

document.getElementById('upload-btn').addEventListener('click', function() {
  document.getElementById('file-input').click();
});

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire
  
    // Récupérer les données du formulaire
    const formData = new FormData(this);
  
    // Envoyer les données du formulaire via XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/send-email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.');
        document.getElementById('contact-form').reset(); // Réinitialiser le formulaire
      } else {
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    };
    xhr.onerror = function() {
      alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    };
    xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
  });