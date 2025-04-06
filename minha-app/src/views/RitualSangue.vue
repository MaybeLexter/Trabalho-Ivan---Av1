<template>
  <v-container class="fill-height" style="max-width: 400px;">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card color="surface">
          <v-card-title class="text-center text-primary">
            <v-icon icon="mdi-vampire" class="mr-2"></v-icon>
            Ritual de Sangue
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="invocar">
              <v-text-field 
                v-model="nomeVampiro" 
                label="Nome de Vampiro" 
                prepend-icon="mdi-account" 
                required
                :rules="[v => !!v || 'O nome é obrigatório']"
              ></v-text-field>
              
              <v-text-field
                v-model="senha"
                label="Senha Secreta"
                prepend-icon="mdi-lock"
                type="password"
                required
                :rules="[v => !!v || 'A senha é obrigatória']"
              ></v-text-field>
              
              <v-checkbox
                v-model="aceitaMaldicao"
                label="Aceito a maldição eterna"
                color="primary"
                :rules="[v => !!v || 'Você deve aceitar a maldição']"
              ></v-checkbox>
              
              <v-btn 
                type="submit" 
                color="primary" 
                block 
                class="mt-4"
                :disabled="!aceitaMaldicao"
                :loading="carregando"
              >
                <v-icon icon="mdi-gavel" class="mr-1"></v-icon>
                Assinar Pacto
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nomeVampiro = ref('')
const senha = ref('')
const aceitaMaldicao = ref(false)
const carregando = ref(false)

const invocar = async () => {
  if (!nomeVampiro.value || !senha.value || !aceitaMaldicao.value) return
  
  carregando.value = true
  
  try {
  
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Armazena os dados
    localStorage.setItem('sanguinario', 'true')
    localStorage.setItem('nomeVampiro', nomeVampiro.value)
    
    // Dispara evento global para atualizar outros componentes
    window.dispatchEvent(new CustomEvent('auth-change'))
    
    // Redireciona
    router.push({ name: 'masmorra' })
  } finally {
    carregando.value = false
  }
}
</script>
<style scoped>
.v-card {
  background-color: rgba(30, 30, 30, 0.9) !important;
  border: 1px solid #8B0000;
  box-shadow: 0 0 15px rgba(139, 0, 0, 0.5) !important;
}

.v-input--checkbox .v-icon {
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>