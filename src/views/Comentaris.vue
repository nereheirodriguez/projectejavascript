<template>
  <div class="comments">
    <h2 class="title">Comentaris dels usuaris</h2>

    <!-- Llista de comentaris, es mostra només si hi ha comentaris carregats -->
    <div v-if="comments.length" class="comment-list">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <!-- Nom de l'usuari que ha fet el comentari -->
        <h3 class="comment-name">{{ comment.name }}</h3>
        <!-- Contingut del comentari -->
        <p class="comment-body">{{ comment.body }}</p>
      </div>
    </div>

    <!-- Missatge de càrrega quan encara no hi ha comentaris disponibles -->
    <div v-else class="loading">Carregant comentaris...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [], // Array per emmagatzemar els comentaris carregats
    };
  },
  mounted() {
    // Carrega de comentaris des d'una API externa quan el component es munta
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => {
          // Assigna la llista de comentaris recuperats a la propietat "comments"
          this.comments = data;
        })
        .catch((error) => {
          // En cas d'error en la càrrega, es registra a la consola
          console.error('Error al carregar els comentaris:', error);
        });
  },
};
</script>

<style scoped>
/* Contenidor principal de la secció de comentaris */
.comments {
  padding: 15px;
  max-width: 100%;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Estil del títol de la secció */
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
}

/* Contenidor de la llista de comentaris */
.comment-list {
  margin-top: 15px;
}

/* Estils per a cada comentari individual */
.comment {
  background-color: #f9f9f9;
  padding: 15px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}

/* Nom de l'usuari que ha fet el comentari */
.comment-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

/* Cos o contingut del comentari */
.comment-body {
  font-size: 0.95rem;
  color: #666;
}

/* Missatge de càrrega quan els comentaris s'estan carregant */
.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #007aff;
}

/* Adaptacions per a pantalles mòbils */
@media (max-width: 768px) {
  .comments {
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
  }

  .title {
    font-size: 1.8rem;
  }

  .comment {
    padding: 10px;
    border-radius: 6px;
  }

  .comment-name {
    font-size: 1.2rem;
  }

  .comment-body {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .comment-name {
    font-size: 1rem;
  }

  .comment-body {
    font-size: 0.85rem;
  }
}
</style>
