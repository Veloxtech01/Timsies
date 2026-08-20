import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FaqHero from './FaqHero'

describe('FaqHero', () => {
  it('renders the "FAQ" page heading', () => {
    render(<FaqHero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'FAQ' })
    ).toBeInTheDocument()
  })
})
