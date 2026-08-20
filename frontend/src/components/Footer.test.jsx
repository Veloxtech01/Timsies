import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

// Footer renders <Link>s, which require a router context to resolve.
function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
}

describe('Footer', () => {
  it('renders the brand logo linking home', () => {
    renderFooter()
    expect(
      screen.getByRole('link', { name: 'Timsies Entirety home' })
    ).toBeInTheDocument()
  })

  it('renders the WHAT WE DO nav list', () => {
    renderFooter()
    expect(
      screen.getByRole('heading', { name: 'What We Do' })
    ).toBeInTheDocument()
    for (const name of ['Home', 'About Us', 'Our Services', 'Contact Us', 'FAQ']) {
      expect(screen.getAllByRole('link', { name }).length).toBeGreaterThan(0)
    }
  })

  it('renders the REACH OUT contact details', () => {
    renderFooter()
    expect(
      screen.getByRole('heading', { name: 'Reach Out' })
    ).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri. 9am - 5pm')).toBeInTheDocument()
    expect(
      screen.getByText('info@timsiesentiretyorganizing.com')
    ).toBeInTheDocument()
  })

  it('renders every contact form field', () => {
    renderFooter()
    expect(screen.getByLabelText('Names')).toBeInTheDocument()
    expect(screen.getByLabelText('Tel')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Write a Message')).toBeInTheDocument()
  })

  it('renders the bottom bar social links', () => {
    renderFooter()
    for (const label of ['Instagram', 'Facebook', 'Twitter', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
