  <template>
    <v-app-bar app color="primary" dark class="blood-nav">
      <v-toolbar-title class="dripping-title">
        <v-icon icon="mdi-vampire" class="mr-2"></v-icon>
        Castelo dos Anoitecidos
        <div class="blood-drips"></div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!sanguinario" to="/sangue" text class="blood-btn">
        <v-icon icon="mdi-water" class="mr-1"></v-icon>
        Ritual de Sangue
      </v-btn>
      <v-btn v-else to="/caixao" text class="blood-btn">
        <v-icon icon="mdi-coffin" class="mr-1"></v-icon>
        Meu Caixão
      </v-btn>
      <v-btn to="/" text class="blood-btn">
        <v-icon icon="mdi-home" class="mr-1"></v-icon>
        Masmorra
      </v-btn>
    </v-app-bar>
  </template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sanguinario = ref(false)

const updateAuthStatus = () => {
  sanguinario.value = localStorage.getItem('sanguinario') === 'true'
}

onMounted(() => {
  updateAuthStatus()
  window.addEventListener('auth-change', updateAuthStatus)
})

onUnmounted(() => {
  window.removeEventListener('auth-change', updateAuthStatus)
})
</script>
  <style scoped>

  .blood-nav {
    background: linear-gradient(
      to bottom,
      rgba(70, 0, 0, 0.9),
      rgba(40, 0, 0, 0.9)
    ) !important;
    border-bottom: 2px solid #8b0000 !important;
    box-shadow: 0 2px 15px rgba(139, 0, 0, 0.6) !important;
  }

 
  .dripping-title {
    font-family: 'Eater', cursive, sans-serif !important; 
    position: relative;
    padding-bottom: 15px;
  }



  .blood-btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    margin: 0 5px;
    letter-spacing: 0.5px;
  }

  .blood-btn::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #8b0000;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .blood-btn:hover {
    text-shadow: 0 0 8px #ff0000;
  }

  .blood-btn:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  .blood-btn .v-icon {
    transition: all 0.3s ease;
  }

  .blood-btn:hover .v-icon {
    transform: scale(1.2);
    color: #ff5252 !important;
  }



  @import url('https://fonts.googleapis.com/css2?family=Eater&display=swap');
  </style>