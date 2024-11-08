<template>
  <!-- Contenidor principal de la pàgina de benvinguda -->
  <div class="landing">
    <div class="content">
      <!-- Títol principal de la pàgina de benvinguda -->
      <h1>Benvinguts a la nostra aplicació</h1>
      <!-- Descripció breu de l'aplicació -->
      <p>Aquesta aplicació ofereix diverses funcionalitats útils per a tu.</p>
      <!-- Enllaç per navegar cap a la pàgina de la calculadora -->
      <router-link to="/calculadora" class="btn">Anem a la calculadora</router-link>
      <!-- Enllaç per veure la pàgina de comentaris -->
      <router-link to="/comentaris" class="btn">Veure comentaris</router-link>
      <!-- Enllaç per explorar la pàgina d'usuaris -->
      <router-link to="/usuaris" class="btn">Explorar usuaris</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home", // Definim el nom del component per a una millor organització
};
</script>

<style scoped>
/* Estil per al contenidor principal de la pàgina */
.landing {
  /* Gradient de fons per fer la pàgina més atractiva */
  background: linear-gradient(135deg, #7fd2ff, #ead3ff);
  /* Ocupa tota la pantalla per centrar el contingut verticalment */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Centrat del text i marges interns */
  text-align: center;
  padding: 0 20px;
}

/* Estils pel contingut central */
.content {
  color: white; /* Text en blanc per contrast amb el fons */
  max-width: 500px; /* Amplada màxima del contenidor */
  /* Fons amb opacitat per donar contrast sense perdre visibilitat del fons */
  background: rgba(0, 0, 0, 0.7);
  padding: 30px; /* Marges interns */
  border-radius: 20px; /* Cants arrodonits */
  /* Ombra per donar profunditat */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  /* Transició de transformació suau */
  transition: transform 0.5s ease-out;
  margin-top: -200px; /* Posicionament superior per fer-lo més centrat */
}

/* Efecte al fer hover sobre el contenidor de contingut */
.content:hover {
  transform: scale(1.05); /* Lleuger augment de mida */
}

/* Estils per al títol i el paràgraf */
h1,
p {
  color: white; /* Assegurem que el text sigui blanc */
}

h1 {
  font-size: 3.2rem; /* Mida gran per al títol principal */
  margin-bottom: 20px; /* Separació amb el paràgraf */
  font-family: 'Montserrat', sans-serif; /* Tipografia moderna */
  font-weight: 700; /* Lletra en negreta */
}

p {
  font-size: 1.2rem; /* Mida mitjana per al text de descripció */
  margin-bottom: 40px; /* Separació amb els botons */
}

/* Estils pels botons */
.btn {
  display: inline-block; /* Bloc inline per permetre marges */
  padding: 15px 35px; /* Marges interns per donar forma al botó */
  margin: 10px; /* Separació entre botons */
  background-color: #005cff; /* Color de fons inicial del botó */
  color: #ffffff; /* Text en blanc */
  border-radius: 50px; /* Forma arrodonida */
  font-size: 1.25rem; /* Mida de text gran */
  text-decoration: none; /* Eliminar subratllat */
  /* Transicions suaus per efectes de hover */
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgb(230, 142, 255); /* Ombra inicial */
}

/* Efecte hover per als botons */
.btn:hover {
  background-color: rgb(230, 142, 255); /* Canvi de color de fons */
  transform: translateY(-4px); /* Lleuger desplaçament vertical */
  box-shadow: 0 8px 24px rgb(255, 255, 255); /* Ombra més intensa */
}

/* Media query per a mòbils */
@media (max-width: 768px) {
  .content {
    max-width: 90%; /* Amplada màxima del contenidor en dispositius mòbils */
    padding: 20px; /* Reducció de marges interns per adaptar-se a pantalles petites */
    margin-top: -150px; /* Ajustament del posicionament superior */
  }

  h1 {
    font-size: 2.5rem; /* Reducció de la mida del títol */
  }

  p {
    font-size: 1rem; /* Reducció de la mida del paràgraf */
  }

  .btn {
    padding: 10px 20px; /* Reducció de marges interns del botó */
    font-size: 1rem; /* Reducció de la mida de text del botó */
  }
}
</style>
