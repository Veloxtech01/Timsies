import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the page heading, map, and quote form', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'TALK to Us' })
    ).toBeInTheDocument()
    expect(screen.getByTitle('Timsies Entirety location')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Get a Quote' })
    ).toBeInTheDocument()
  })
})
