import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders the page heading, quote form, and newsletter section', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Professional Organizing Services',
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request a Quote' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Stay Updated with Our Updates',
      })
    ).toBeInTheDocument()
  })
})
