import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ContactHero from './ContactHero'

describe('ContactHero', () => {
  it('renders the "TALK to Us" page heading', () => {
    render(<ContactHero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'TALK to Us' })
    ).toBeInTheDocument()
  })
})
