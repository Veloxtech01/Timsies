import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('renders the homepage heading', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Timsies Entirety' })
    ).toBeInTheDocument()
  })
})
