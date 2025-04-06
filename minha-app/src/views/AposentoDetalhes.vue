<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="aposento.imagem" height="400" contain></v-img>
      </v-col>
      
      <v-col cols="12" md="6">
        <h1 class="text-h3 mb-4">{{ aposento.nome }}</h1>
        
        <v-divider class="my-4"></v-divider>
        
        <v-chip class="ma-2" color="red-darken-4" text-color="white">
          <v-icon start icon="mdi-account-group"></v-icon>
          {{ aposento.capacidade }} vítimas
        </v-chip>
        
        <p class="text-body-1 my-4">{{ aposento.descricao }}</p>
        
        <v-form @submit.prevent="reservarAposento" class="mt-6">
          <v-text-field
            v-model="reserva.nome"
            label="Seu nome vampírico"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="reserva.data"
            label="Data do banquete"
            type="date"
            prepend-icon="mdi-calendar"
            required
          ></v-text-field>
          
          <v-select
            v-model="reserva.horario"
            :items="['Meia-noite', '03:00', 'Antes do amanhecer']"
            label="Horário"
            prepend-icon="mdi-clock"
            required
          ></v-select>
          
          <v-btn type="submit" color="primary" class="mr-4">
            <v-icon icon="mdi-blood-bag" class="mr-1"></v-icon>
            Reservar Banquete
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- Notificação Foda Vampirica -->
    <v-snackbar
      v-model="notificacao.visivel"
      :timeout="3000"
      location="top"
      color="dark"
      elevation="24"
      transition="slide-y-transition"
      content-class="blood-notification"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-vampire" class="mr-2 text-red-darken-4"></v-icon>
        <span class="text-white">{{ notificacao.mensagem }}</span>
      </div>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const aposentos = ref([
  {
    id: 1,
    nome: 'Câmara de Transilvânia',
    capacidade: 10,
    descricao: 'Onde os gritos ecoam nas paredes de pedra',
    imagem: 'https://i.pinimg.com/564x/78/a1/e8/78a1e8e33063398c18c413f75a3078b2.jpg'
  },
  {
    id: 2,
    nome: 'Salão do Conde',
    capacidade: 50,
    descricao: 'Para banquetes com convidados especiais',
    imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f23559e9-e446-49dc-a034-7a41e62d13c5/dholc0p-937fe1c4-74b4-4a90-9fa6-99a88d1baf33.jpg/v1/fill/w_1280,h_732,q_75,strp/the_throne_room_of_the_vampire_castle_by_sun_god_dragon_of_ra_dholc0p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvZjIzNTU5ZTktZTQ0Ni00OWRjLWEwMzQtN2E0MWU2MmQxM2M1XC9kaG9sYzBwLTkzN2ZlMWM0LTc0YjQtNGE5MC05ZmE2LTk5YTg4ZDFiYWYzMy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vZBqmp69p1SsVnaeUohNR8jemOZXQ7EFg6cdkq35MWc'
  },
  {
    id: 3,
    nome: 'Torre das Sombras',
    capacidade: 20,
    descricao: 'Onde os aprendizes praticam artes sombrias',
    imagem: 'https://dropnite.com/images/1098-4853-0900.jpg'
  }
])

const aposento = computed(() => 
  aposentos.value.find(a => a.id === parseInt(route.params.id))
)

const reserva = ref({
  nome: '',
  data: '',
  horario: ''
})

const notificacao = ref({
  visivel: false,
  mensagem: ''
})

const reservarAposento = async () => {
  const novaReserva = {
    id: Date.now(),
    salaId: aposento.value.id,
    salaNome: aposento.value.nome,
    data: reserva.value.data,
    horario: reserva.value.horario,
    nomeVampiro: reserva.value.nome
  };

  // Reservar Salas
  const reservasSalvas = JSON.parse(localStorage.getItem('reservas') || '[]');
  reservasSalvas.push(novaReserva);
  localStorage.setItem('reservas', JSON.stringify(reservasSalvas));

  // Mostra a notificação
  notificacao.value = {
    visivel: true,
    mensagem: `Sangue pactuado, Alteza ${reserva.value.nome}! O banquete o aguarda...`
  };

  // Redireciona para MeuCaixao após 2.8 segundos
  // Para dar tempo de ler a notificação
  await new Promise(resolve => setTimeout(resolve, 2800));
  router.push({ name: 'meu-caixao' });
};
</script>

<style scoped>
.blood-notification {
  background: rgba(30, 0, 0, 0.9) !important;
  border-left: 4px solid #8B0000 !important;
  box-shadow: 0 0 15px rgba(139, 0, 0, 0.5) !important;
  transition: all 0.3s ease;
}

.slide-y-transition-enter-active,
.slide-y-transition-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-y-transition-enter-from,
.slide-y-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.text-white {
  font-family: 'Eater', cursive;
  letter-spacing: 1px;
  text-shadow: 0 0 5px #8B0000;
}

@import url('https://fonts.googleapis.com/css2?family=Eater&display=swap');
</style>