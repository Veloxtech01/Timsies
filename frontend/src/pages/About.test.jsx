import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import About from './About'

describe('About', () => {
  it('renders the page heading and the services section', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { level: 1, name: 'About Us' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services' })
    ).toBeInTheDocument()
  })
})
