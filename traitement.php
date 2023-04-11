<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "dawantran@icloud.com"; // Adresse e-mail où vous souhaitez recevoir les messages du formulaire
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $headers = "From: $nom <$email>\r\n";
  $headers .= "Reply-To: $nom <$email>\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

  $subject = "Nouveau message de formulaire de contact";

  $body = "Nom: $nom\n";
  $body .= "Email: $email\n";
  $body .= "Message: $message\n";

  // Envoyer l'e-mail
  mail($to, $subject, $body, $headers);

  // Rediriger vers une page de confirmation
  header("Location: confirmation.html");
  exit();
}
?>
