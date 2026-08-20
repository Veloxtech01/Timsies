import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutHero from './AboutHero'

describe('AboutHero', () => {
  it('renders the "About Us" page heading', () => {
    render(<AboutHero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'About Us' })
    ).toBeInTheDocument()
  })
})
