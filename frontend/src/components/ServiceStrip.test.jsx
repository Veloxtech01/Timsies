import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServiceStrip from './ServiceStrip'
import { services } from '../data/services'

describe('ServiceStrip', () => {
  it('renders a label for every service, plus its hidden duplicate for the loop', () => {
    render(<ServiceStrip />)
    for (const service of services) {
      expect(screen.getAllByText(service.label)).toHaveLength(2)
    }
  })

  it('exposes an accessible label for the strip', () => {
    render(<ServiceStrip />)
    expect(screen.getByRole('region', { name: 'Our services' })).toBeInTheDocument()
  })
})
