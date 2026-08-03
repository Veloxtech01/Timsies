import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the copyright label', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Timsies Entirety')).toBeInTheDocument()
  })
})
