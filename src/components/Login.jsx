import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuer les actions de connexion, par exemple envoyer les données au serveur

    // Réinitialiser les champs du formulaire
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page-container">
      <h1>Connexion</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
