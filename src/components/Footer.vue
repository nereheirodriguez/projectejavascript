<template>
  <!-- Peu de pàgina -->
  <footer class="footer">
    <!-- Text de drets d'autor i crèdit -->
    <p>&copy; 2024 - Creat per Nerehei</p>
  </footer>
</template>

<style scoped>
/* Estil per al peu de pàgina */
.footer {
  text-align: center; /* Centra el text horitzontalment */
  padding: 25px; /* Afegim espai dins del peu de pàgina */
  background-color: #00b2ff; /* Color de fons blau clar */
  color: white; /* Color del text blanc */
  font-size: 1.2rem; /* Mida de la font */
  position: fixed; /* Fixem el peu de pàgina a la part inferior de la pàgina */
  bottom: 0; /* Posicionem el peu de pàgina a la part inferior */
  width: 100%; /* Amplada completa (el peu de pàgina ocupa tota l'amplada de la pantalla) */
  box-shadow: 0 -4px 12px rgb(224, 159, 255); /* Ombra superior per crear profunditat */
  border-top: 2px solid rgb(247, 0, 255); /* Línia de separació a la part superior amb un color rosa brillant */
  transition: background-color 0.3s ease-in-out; /* Animació suau per al canvi de color de fons */
}

/* Estil quan el ratolí passa per sobre del peu de pàgina */
.footer:hover {
  background-color: #e4b6ff; /* Canvi de color de fons a un rosa més clar quan es passa el ratolí */
}

/* Media query per adaptar l'estil a dispositius mòbils */
@media (max-width: 768px) {
  .footer {
    font-size: 0.9rem; /* Redueix la mida de la font en dispositius mòbils */
    padding: 15px; /* Redueix l'espai al voltant del text */
  }
}
</style>
