import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import { heroSlides } from '../data/heroSlides'

describe('Home', () => {
  it('renders the page heading and the hero slider', () => {
    // MemoryRouter is required — the hero's CTA renders a <Link>.
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Timsies Entirety — decluttering and organizing services',
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0].title })
    ).toBeInTheDocument()
  })
})
