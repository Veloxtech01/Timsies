import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ContactQuote from './ContactQuote'

describe('ContactQuote', () => {
  it('renders the disclaimer copy', () => {
    render(<ContactQuote />)
    expect(
      screen.getByText(/we acknowledged the safety of your data/i)
    ).toBeInTheDocument()
  })

  it('renders every form field and the submit button', () => {
    render(<ContactQuote />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Service Required')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Get a Quote' })
    ).toBeInTheDocument()
  })
})
