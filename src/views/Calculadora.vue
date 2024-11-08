<template>
  <div class="calculator">
    <div class="display">{{ currentValue }}</div>
    <div class="buttons">
      <!-- Botons numèrics i operacions -->
      <button @click="handleClick('7')">7</button>
      <button @click="handleClick('8')">8</button>
      <button @click="handleClick('9')">9</button>
      <button @click="handleClick('/')">/</button>

      <button @click="handleClick('4')">4</button>
      <button @click="handleClick('5')">5</button>
      <button @click="handleClick('6')">6</button>
      <button @click="handleClick('*')">*</button>

      <button @click="handleClick('1')">1</button>
      <button @click="handleClick('2')">2</button>
      <button @click="handleClick('3')">3</button>
      <button @click="handleClick('-')">-</button>

      <button @click="handleClick('0')">0</button>
      <button @click="handleClick('.')">.</button>
      <button @click="handleClick('C')" class="clear">C</button>
      <button @click="handleClick('+')">+</button>

      <!-- Botó d'igual per calcular el resultat -->
      <button class="equal" @click="handleClick('=')">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: '', // Valor actual que es mostra a la pantalla de la calculadora
    };
  },
  created() {
    // Afegim un event listener per detectar les tecles que l'usuari prem al teclat
    window.addEventListener("keydown", this.handleKeyboardInput);
  },
  beforeDestroy() {
    // Eliminem el listener de teclat quan el component es destrueixi
    window.removeEventListener("keydown", this.handleKeyboardInput);
  },
  methods: {
    // Funció per gestionar la entrada de teclat
    handleKeyboardInput(event) {
      const key = event.key;

      // Definim les tecles vàlides per la calculadora
      const validKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "-", "+", "Enter", "Backspace"
      ];

      // Si la tecla premuda és vàlida, executem l'acció corresponent
      if (validKeys.includes(key)) {
        if (key === "Enter") {
          this.handleClick("="); // Si es prem "Enter", es calcula el resultat
        } else if (key === "Backspace") {
          this.handleClick("Backspace"); // Si es prem "Backspace", s'elimina l'últim caràcter
        } else {
          this.handleClick(key); // En qualsevol altre cas, afegim el caràcter premut al valor actual
        }
      }
    },
    // Funció per gestionar els clics dels botons de la calculadora
    handleClick(button) {
      if (button === "C") {
        this.currentValue = ""; // Esborra la pantalla si es prem "C"
      } else if (button === "=") {
        try {
          // Evalua l'expressió i actualitza la pantalla amb el resultat
          this.currentValue = eval(this.currentValue).toString();
        } catch (error) {
          // Si hi ha un error en l'expressió, es mostra "Error" a la pantalla
          this.currentValue = "Error";
        }
      } else if (button === "Backspace") {
        // Esborra només l'últim caràcter de l'expressió
        this.currentValue = this.currentValue.slice(0, -1);
      } else {
        // Afegeix el botó premut a la pantalla
        this.currentValue += button;
      }
    },
  },
};
</script>

<style scoped>
/* Estils generals del contenidor de la calculadora */
.calculator {
  background-color: #c3c3c3;
  max-width: 500px; /* Ample màxim de la calculadora */
  margin: 50px auto;
  padding: 25px;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
}

/* Estils per la pantalla de la calculadora */
.display {
  background-color: #455687;
  color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  font-size: 3rem;
  margin-bottom: 20px;
  box-shadow: inset 0 4px 6px rgb(242, 166, 255);
  overflow-x: auto;
  white-space: nowrap;
}

/* Configuració de la graella de botons */
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

/* Estils per als botons */
button {
  background-color: #f0f0f5;
  color: #1381ae;
  padding: 25px;
  font-size: 2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  border: none;
  width: 85px;
  height: 85px;
}

button:hover {
  background-color: #e1e1e6;
  transform: scale(1.1); /* Augmenta una mica el botó quan es passa el cursor per sobre */
}

button:active {
  transform: scale(0.95); /* Redueix el botó quan es prem */
}

/* Botó "C" amb color taronja */
button.clear {
  background-color: #ff9500;
  color: white;
}

/* Estils per al botó d'igual */
button.equal {
  background-color: #34c759;
  color: white;
  grid-column: span 4; /* El botó "=" ocupa tota la fila */
  font-size: 2.5rem;
}

/* Estils adaptats per a pantalles més petites */
@media (max-width: 768px) {
  .calculator {
    max-width: 90%;
    padding: 20px;
  }

  .display {
    font-size: 2.5rem;
    padding: 25px;
  }

  button {
    padding: 20px;
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .display {
    font-size: 2rem;
    padding: 20px;
  }

  button {
    padding: 18px;
    font-size: 1.5rem;
  }

  .buttons {
    gap: 10px;
  }
}
</style>
