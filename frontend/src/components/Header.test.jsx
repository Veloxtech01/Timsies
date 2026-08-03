import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the brand label', () => {
    render(<Header />)
    expect(screen.getByText('Timsies Entirety')).toBeInTheDocument()
  })
})
