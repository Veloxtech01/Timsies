import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ContactMap from './ContactMap'

describe('ContactMap', () => {
  it('renders an embedded map iframe pointed at the business address', () => {
    render(<ContactMap />)
    const iframe = screen.getByTitle('Timsies Entirety location')
    expect(iframe).toBeInTheDocument()
    expect(iframe.getAttribute('src')).toContain('output=embed')
    expect(iframe.getAttribute('src')).toContain('z=16')
    expect(iframe.getAttribute('src')).toContain('Lambe%20Iluyomade%20Street')
  })
})
