<template>
  <v-card class="mb-4">
    <v-card-title>{{ reserva.salaNome }}</v-card-title>
    <v-card-subtitle>
      {{ formatarData(reserva.data) }} às {{ reserva.horario }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="error" @click="$emit('cancelar', reserva.id)">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  reserva: {
    type: Object,
    required: true
  }
})

const formatarData = (data) => {
  return new Date(data).toLocaleDateString('pt-BR')
}
</script>