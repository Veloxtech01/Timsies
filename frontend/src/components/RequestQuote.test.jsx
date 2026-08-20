import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RequestQuote from './RequestQuote'
import { services } from '../data/services'

describe('RequestQuote', () => {
  it('renders the section heading and subheading', () => {
    render(<RequestQuote />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request a Quote' })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/tell us about your project/i)
    ).toBeInTheDocument()
  })

  it('renders every form field and the submit button', () => {
    render(<RequestQuote />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Service Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Get a Free Quote' })
    ).toBeInTheDocument()
  })

  it('lists every service from data/services.js as a dropdown option', () => {
    render(<RequestQuote />)
    const select = screen.getByLabelText('Service Type')
    for (const service of services) {
      expect(
        screen.getByRole('option', { name: service.label })
      ).toBeInTheDocument()
    }
    expect(select).toBeInTheDocument()
  })

  it('shows validation errors when submitted empty', async () => {
    const user = userEvent.setup()
    render(<RequestQuote />)
    await user.click(screen.getByRole('button', { name: 'Get a Free Quote' }))
    expect(
      await screen.findByText('Full name is required')
    ).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Phone number is required')).toBeInTheDocument()
    expect(screen.getByText('Please select a service')).toBeInTheDocument()
    expect(screen.getByText('Please add a message')).toBeInTheDocument()
  })
})
