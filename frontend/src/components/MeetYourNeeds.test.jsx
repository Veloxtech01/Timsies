import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MeetYourNeeds from './MeetYourNeeds'

describe('MeetYourNeeds', () => {
  it('renders the heading, body copy and CTA link', () => {
    // MemoryRouter is required — the CTA renders a <Link>.
    render(
      <MemoryRouter>
        <MeetYourNeeds />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { level: 2, name: "Let's Meet Your Organizing Needs" })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '/about')
  })
})
