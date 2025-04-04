import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'

describe('Login Component', () => {
  it('renders login form', () => {
    const mockSetAuth = vi.fn()
    render(
      <BrowserRouter>
        <Login setAuth={mockSetAuth} />
      </BrowserRouter>
    )

    // Verificar el título
    expect(screen.getByRole('heading', { name: 'Iniciar Sesión' })).toBeInTheDocument()
    
    // Verificar los campos de entrada
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument()
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
    
    // Verificar el botón
    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument()
  })
}) 