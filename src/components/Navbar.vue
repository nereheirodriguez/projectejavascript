<template>
  <!-- Barra de navegació -->
  <nav class="navbar">
    <!-- Enllaç a la pàgina d'inici -->
    <router-link to="/" class="nav-link">Home</router-link>
    <!-- Enllaç a la pàgina de la calculadora -->
    <router-link to="/calculadora" class="nav-link">Calculadora</router-link>
    <!-- Enllaç a la pàgina de comentaris -->
    <router-link to="/comentaris" class="nav-link">Comentaris</router-link>
    <!-- Enllaç a la pàgina d'usuaris -->
    <router-link to="/usuaris" class="nav-link">Usuaris</router-link>
  </nav>
</template>

<style scoped>
/* Estil de la barra de navegació */
.navbar {
  display: flex; /* Utilitza flexbox per al disseny de la barra */
  justify-content: center; /* Centra els enllaços horitzontalment */
  gap: 40px; /* Espai entre els enllaços */
  padding: 20px 0; /* Espai vertical al voltant de la barra */
  background-color: #2D9CDB; /* Color de fons de la barra */
  color: white; /* Color del text */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Ombra de la barra per donar profunditat */
  border-radius: 15px; /* Arrodoneix les cantonades de la barra */
  transition: background-color 0.3s ease-in-out; /* Animació suau al canviar el color de fons */
}

/* Estil quan la barra de navegació es passa el ratolí per sobre */
.navbar:hover {
  background-color: #1F80B6; /* Color de fons quan s'hi passa el ratolí */
}

/* Estil per als enllaços de la barra de navegació */
.nav-link {
  color: white; /* Color del text */
  text-decoration: none; /* Elimina el subratllat de l'enllaç */
  font-weight: 600; /* Estableix un pes de font més fort */
  font-size: 1.1rem; /* Mida de la font */
  padding: 12px 20px; /* Espai al voltant de l'enllaç */
  border-radius: 12px; /* Arrodoneix les cantonades dels enllaços */
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.2s ease; /* Animacions per al canvi de color, escala i fons */
}

/* Estil quan un enllaç és seleccionat o passa el ratolí per sobre */
.nav-link:hover {
  color: #ebc0ff; /* Canvia el color del text al passar el ratolí */
  background-color: rgba(255, 215, 0, 0.2); /* Fons groc transparent al passar el ratolí */
  transform: scale(1.05); /* Augmenta lleugerament la mida de l'enllaç per l'efecte de clic */
}

/* Media query per adaptar la barra a dispositius mòbils */
@media (max-width: 768px) {
  /* Ajustaments de la barra per a pantalles petites */
  .navbar {
    font-size: 0.9rem; /* Redueix la mida de la font */
    gap: 20px; /* Redueix l'espai entre enllaços */
    padding: 15px 5px; /* Redueix l'espai vertical */
  }

  /* Ajustaments per als enllaços en dispositius mòbils */
  .nav-link {
    font-size: 0.9rem; /* Redueix la mida de la font dels enllaços */
    padding: 10px 15px; /* Ajusta l'espai de l'enllaç */
  }
}
</style>
