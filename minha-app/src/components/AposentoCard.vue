<template>
  <v-card class="ma-2" color='surface-variant' style="width: 100%; max-width: 400px;">
    <v-img :src="aposento.imagem" height="200px" cover gradient="to bottom, rgba(0,0,0,0.1), rgba(139,0,0,0.8)"></v-img>
    
    <v-card-title class="text-primary">
      <v-icon icon="mdi-vampire" class="mr-2"></v-icon>
      {{ aposento.nome }}
    </v-card-title>
    
    <v-card-subtitle class="blood-description">
      Capacidade: {{ aposento.capacidade }} vítimas
    </v-card-subtitle>
    
    <v-card-text>{{ aposento.descricao }}</v-card-text>
    
    <v-card-actions>
      <v-btn 
        color="primary" 
        :to="{ name: 'aposento-detalhes', params: { id: aposento.id } }"
        class="invoke-btn"
      >
        <v-icon icon="mdi-candle" class="mr-1"></v-icon>
        Invocar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  aposento: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.invoke-btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.invoke-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.invoke-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(139, 0, 0, 0.5) !important;
  text-shadow: 0 0 5px #ff0000;
}

.invoke-btn:hover::before {
  left: 100%;
}

.invoke-btn .v-icon {
  transition: all 0.3s ease;
}

.invoke-btn:hover .v-icon {
  transform: rotate(15deg) scale(1.2);
  color: #ff5252 !important;
}
.v-card {
  transition: all 0.4s ease;
  border: 1px solid transparent;
  animation: subtle-pulse 6s infinite ease-in-out;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(139, 0, 0, 0.3) !important;
  border: 1px solid #8b0000;
}

@keyframes subtle-pulse {
  0% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
} 

.blood-description {
  color: #FF5252 !important;
  font-style: italic;
  text-shadow: 0 0 3px rgba(139, 0, 0, 0.5);
}
</style>