import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Faq from './Faq'
import { faqs } from '../data/faq'

describe('Faq', () => {
  it('renders the page heading and the first question', () => {
    render(<Faq />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'FAQ' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: faqs[0].question })
    ).toBeInTheDocument()
  })
})
