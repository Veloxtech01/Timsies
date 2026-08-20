import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AboutServices from './AboutServices'
import { aboutServiceCards } from '../data/aboutServiceCards'

describe('AboutServices', () => {
  it('renders the Services heading and every service photo caption', () => {
    // MemoryRouter is required — the CTA renders a <Link>.
    render(
      <MemoryRouter>
        <AboutServices />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services' })
    ).toBeInTheDocument()
    for (const card of aboutServiceCards) {
      expect(screen.getByText(card.label)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Get a Quote' })).toBeInTheDocument()
  })
})
