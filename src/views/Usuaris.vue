<template>
  <div class="users">
    <h2 class="title">Usuaris</h2>

    <!-- Missatge de càrrega mentre es recuperen els usuaris -->
    <div v-if="loading" class="loading">Carregant usuaris...</div>

    <!-- Mostrar la llista d'usuaris quan s'hagin carregat -->
    <div v-else-if="users.length > 0" class="user-list">
      <div v-for="user in users" :key="user.id" class="user-card">
        <!-- Imatge de l'usuari (amb Pravatar com a avatar per defecte) -->
        <img
            :src="`https://i.pravatar.cc/150?img=${user.id}`"
            alt="user image"
            class="user-image"
        />
        <!-- Nom, email i telèfon de l'usuari -->
        <h3 class="user-name">{{ user.name }}</h3>
        <p class="user-email">{{ user.email }}</p>
        <p class="user-phone">{{ user.phone }}</p>
      </div>
    </div>

    <!-- Missatge d'error si no es poden carregar usuaris -->
    <div v-else class="loading">No s'han pogut carregar els usuaris.</div>

    <!-- Botó per carregar més usuaris (només es mostra quan no s'està carregant) -->
    <div v-if="!loading" class="load-more">
      <button @click="loadMoreUsers">Carregar més usuaris</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [], // Array per emmagatzemar els usuaris recuperats
      loading: true, // Indica si s'estan carregant els usuaris
      page: 1, // Número de pàgina per a la paginació
      limit: 10, // Nombre d'usuaris per carregar a cada pàgina
    };
  },
  mounted() {
    // Crida inicial per carregar la primera pàgina d'usuaris quan es munta el component
    this.loadUsers();
  },
  methods: {
    // Funció per carregar usuaris de l'API amb la configuració de la pàgina actual
    loadUsers() {
      this.loading = true; // Comença la càrrega d'usuaris
      fetch(
          `https://dummyjson.com/users?limit=${this.limit}&skip=${(this.page - 1) * this.limit}`
      )
          .then((response) => response.json())
          .then((data) => {
            // Afegir nous usuaris a la llista existent
            this.users = [...this.users, ...data.users];
            this.page++; // Incrementa el número de pàgina per a la següent càrrega
            this.loading = false; // Finalitza la càrrega
          })
          .catch((error) => {
            // Gestiona l'error en cas que falli la càrrega
            console.error("Error al carregar els usuaris:", error);
            this.loading = false;
          });
    },
    // Funció per carregar la següent pàgina d'usuaris
    loadMoreUsers() {
      this.loadUsers();
    },
  },
};
</script>

<style scoped>
/* Estils generals del contenidor d'usuaris */
.users {
  padding: 20px;
  max-width: 1200px;
  margin: 40px auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Estils del títol */
.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

/* Configuració de la graella per als usuaris */
.user-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnes per mostrar les targetes */
  gap: 20px;
}

/* Estils de cada targeta d'usuari */
.user-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efecte de suspensió per elevar la targeta */
.user-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Estils de la imatge de l'usuari */
.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}

/* Estils del nom de l'usuari */
.user-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

/* Estils per l'email i telèfon de l'usuari */
.user-email,
.user-phone {
  font-size: 1rem;
  color: #666;
}

/* Estils del missatge de càrrega */
.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #007aff;
}

/* Estils del botó de càrrega per carregar més usuaris */
.load-more {
  text-align: center;
  margin-top: 20px;
}

.load-more button {
  background-color: #007aff;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.load-more button:hover {
  background-color: #005bb5;
}

/* Adaptacions per a pantalles mòbils */
@media (max-width: 768px) {
  .users {
    padding: 15px;
    margin: 20px auto;
  }

  .title {
    font-size: 2rem;
  }

  .user-list {
    grid-template-columns: repeat(2, 1fr); /* Mostra dues columnes per a pantalles petites */
    gap: 15px;
  }

  .user-card {
    padding: 15px;
  }

  .user-name {
    font-size: 1.3rem;
  }

  .user-email,
  .user-phone {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.7rem;
  }

  .user-list {
    grid-template-columns: 1fr; /* Mostra una sola columna en pantalles molt petites */
  }

  .user-card {
    padding: 10px;
  }

  .user-name {
    font-size: 1.2rem;
  }

  .user-email,
  .user-phone {
    font-size: 0.85rem;
  }
}
</style>
