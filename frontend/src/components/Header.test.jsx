import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

// Header uses Link/NavLink, so it must render inside a router context.
const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )

describe('Header', () => {
  it('renders the brand lockup', () => {
    renderHeader()
    expect(screen.getByText(/Timsies Entirety/)).toBeInTheDocument()
    expect(screen.getByAltText('Timsies Entirety logo')).toBeInTheDocument()
  })

  it('renders the primary navigation links', () => {
    renderHeader()
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    for (const name of ['Home', 'About Us', 'Our Services', 'Contact Us', 'FAQ']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(primaryNav).toBeInTheDocument()
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    renderHeader()

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Opening reveals the second (mobile) nav landmark
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
