import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CeoProfile from './CeoProfile'

describe('CeoProfile', () => {
  it('renders the About the Founder and Our Approach subheadings', () => {
    render(<CeoProfile />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'About the Founder' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Our Approach' })
    ).toBeInTheDocument()
  })

  it('renders the founder photo with an accessible label', () => {
    render(<CeoProfile />)
    expect(
      screen.getByRole('img', {
        name: 'Atim Etetim Okpo, Founder of Timsies Entirety',
      })
    ).toBeInTheDocument()
  })
})
