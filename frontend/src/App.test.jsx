import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header, homepage heading, and footer together', () => {
    render(<App />)
    expect(screen.getByText('Timsies Entirety')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Timsies Entirety' })
    ).toBeInTheDocument()
    expect(screen.getByText('© 2026 Timsies Entirety')).toBeInTheDocument()
  })
})
