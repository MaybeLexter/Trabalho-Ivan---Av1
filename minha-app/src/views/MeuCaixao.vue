<template>
    <v-container class="coffin-container">

      <h1 class="text-h4 mb-6 blood-title">
        <v-icon icon="mdi-coffin" class="mr-2"></v-icon>
        Meu Caixão de Reservas
      </h1>
  

      <v-alert 
        v-if="reservas.length === 0" 
        type="error" 
        variant="tonal"
        border="start"
        class="mb-6"
      >
        <v-icon icon="mdi-emoticon-sad-outline" class="mr-2"></v-icon>
        Seu caixão está vazio... nenhuma vítima reservada!
      </v-alert>
  
      <!-- Lista de reservas em formato de lápide -->
      <div v-else class="graveyard-grid">
        <v-card 
          v-for="reserva in reservas" 
          :key="reserva.id" 
          class="tombstone-card"
          color="surface"
        >
          <v-card-title class="d-flex align-center">
            <v-icon icon="mdi-cross" class="mr-2"></v-icon>
            {{ reserva.salaNome }}
          </v-card-title>
          
          <v-card-subtitle class="blood-text">
            <v-icon icon="mdi-calendar" size="small" class="mr-1"></v-icon>
            {{ formatarData(reserva.data) }} 
            <span class="mx-1">•</span>
            <v-icon icon="mdi-clock" size="small" class="mr-1"></v-icon>
            {{ reserva.horario }}
          </v-card-subtitle>
  
          <v-card-actions>
            <v-btn 
              color="error" 
              variant="outlined"
              @click="cancelarReserva(reserva.id)"
            >
              <v-icon icon="mdi-skull" class="mr-1"></v-icon>
              Cancelar Ritual
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  

  onMounted(() => {
  const saved = localStorage.getItem('reservas');
  if (saved) reservas.value = JSON.parse(saved);
  });
  // Dados de exemplo ja carregados do localStorage
  const reservas = ref([
    {
      id: 1,
      salaId: 1,
      salaNome: 'Câmara de Transilvânia',
      data: '2025-10-31', 
      horario: '23:59'
    },
    {
      id: 2,
      salaId: 3,
      salaNome: 'Torre das Sombras',
      data: '2025-11-01',
      horario: '03:00'
    }
  ])
  
  // Formata data no estilo vampiro (DD/MM/AAAA)
  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }
  
  // Cancela uma reserva
  const cancelarReserva = (id) => {
  reservas.value = reservas.value.filter(r => r.id !== id);
  localStorage.setItem('reservas', JSON.stringify(reservas.value));
  };
  </script>
  
  <style scoped>
  .coffin-container {
    background: 
      linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
      url('https://images.unsplash.com/photo-1517999144091-708d929c6dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    padding-top: 2rem;
  }
  

  .blood-title {
    color: #8B0000;
    text-shadow: 0 0 5px #8B0000, 0 0 10px #8B0000;
    font-family: 'Eater', cursive;
    letter-spacing: 2px;
  }
  

  .graveyard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  

  .tombstone-card {
    border-left: 4px solid #8B0000 !important;
    transition: transform 0.3s ease;
  }
  
  .tombstone-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(139, 0, 0, 0.3) !important;
  }
  

  .blood-text {
    color: #8B0000 !important;
    opacity: 0.8;
  }
  </style>