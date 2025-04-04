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

    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument()
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument()
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
  })
}) 