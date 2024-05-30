import React, { useState } from "react";

function ImageDownloader() {
  const [chemin, setChemin] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleCheminChange = (event) => {
    setChemin(event.target.value);
  };

  const handleTelechargerImage = () => {
    if (chemin) {
      // Créez dynamiquement le lien de téléchargement avec le chemin spécifié
      const lienTelechargement = document.createElement("a");
      lienTelechargement.href = chemin;
      lienTelechargement.download = "nom-de-l-image.jpg";

      // Cliquez sur le lien pour déclencher le téléchargement
      lienTelechargement.click();
    }
  };

  const handleImageSelection = (event) => {
    const fichierImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageURL(reader.result);
    };

    if (fichierImage) {
      reader.readAsDataURL(fichierImage);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={chemin}
        onChange={handleCheminChange}
        placeholder="Chemin de téléchargement"
      />
      <button onClick={handleTelechargerImage}>Télécharger l'image</button>

      <div>
        <input type="file" onChange={handleImageSelection} />
        {imageURL && <img src={imageURL} alt="Image sélectionnée" />}
      </div>
    </div>
  );
}

export default ImageDownloader;
