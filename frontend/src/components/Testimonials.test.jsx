import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials'
import { testimonials } from '../data/testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Client Testimonials' })
    ).toBeInTheDocument()
  })

  it('renders every testimonial quote, plus its hidden duplicate for the loop', () => {
    render(<Testimonials />)
    for (const item of testimonials) {
      expect(screen.getAllByText(item.quote)).toHaveLength(2)
    }
  })
})
