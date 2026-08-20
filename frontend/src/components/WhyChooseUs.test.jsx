import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WhyChooseUs from './WhyChooseUs'
import { whyChooseUsCards } from '../data/whyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })
    ).toBeInTheDocument()
  })

  it('renders every card heading and lead-in line', () => {
    render(<WhyChooseUs />)
    for (const card of whyChooseUsCards) {
      if (card.heading) {
        expect(
          screen.getByRole('heading', { level: 3, name: card.heading })
        ).toBeInTheDocument()
      }
      for (const item of card.items) {
        if (item.lead) {
          expect(screen.getByText(item.lead)).toBeInTheDocument()
        }
      }
    }
  })
})
