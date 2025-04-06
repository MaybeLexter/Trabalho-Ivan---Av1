import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'vampire',
    themes: {
      vampire: {
        dark: true,
        colors: {
          primary: '#8B0000',
          secondary: '#4B0082', 
          background: '#121212',
          surface: '#1E1E1E',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          'surface-variant': '#2D2D2D'
        }
      }
    }
  }
})