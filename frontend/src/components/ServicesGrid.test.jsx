import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServicesGrid from './ServicesGrid'
import { serviceCards } from '../data/serviceCards'

describe('ServicesGrid', () => {
  it('renders every service photo caption', () => {
    render(<ServicesGrid />)
    for (const card of serviceCards) {
      const text = card.bullet ? `• ${card.label}` : card.label
      expect(screen.getByText(text)).toBeInTheDocument()
    }
  })
})
