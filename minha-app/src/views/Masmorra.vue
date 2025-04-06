<template>
    <v-container fluid class="mt-4" >
      <v-row>
        <v-col v-for="aposento in aposentos" :key="aposento.id" cols="12" sm="6" md="4" lg="3" class="d-flex justify-center">
          <AposentoDracula class="blood-description":aposento="aposento" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import AposentoDracula from '@/components/AposentoCard.vue'
  // Aposentos do Castelo
  // deveria puxar os daqui para o aposento datalhes tambem
  // ou seja, o mesmo objeto que tem os dados do aposento, tem que ter os dados da reserva também
  // e o mesmo objeto que tem os dados do aposento, tem que ter os dados da reserva também
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
  </script>
  
<style scoped>
</style>