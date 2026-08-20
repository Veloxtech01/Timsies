import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServicesHero from './ServicesHero'

describe('ServicesHero', () => {
  it('renders the page heading', () => {
    render(<ServicesHero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Professional Organizing Services',
      })
    ).toBeInTheDocument()
  })
})
