import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServiceStrip from './ServiceStrip'
import { services } from '../data/services'

describe('ServiceStrip', () => {
  it('renders a label for every service', () => {
    render(<ServiceStrip />)
    for (const service of services) {
      expect(screen.getByText(service.label)).toBeInTheDocument()
    }
  })

  it('exposes an accessible label for the strip', () => {
    render(<ServiceStrip />)
    expect(screen.getByRole('region', { name: 'Our services' })).toBeInTheDocument()
  })
})
