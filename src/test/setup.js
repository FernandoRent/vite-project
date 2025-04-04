import '@testing-library/jest-dom'

// Configuración global para pruebas
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  }
} 