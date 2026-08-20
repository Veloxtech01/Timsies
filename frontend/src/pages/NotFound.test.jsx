import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NotFound from './NotFound'

// NotFound uses Link/useLocation, so it needs a router context.
const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <NotFound />
    </MemoryRouter>,
  )

describe('NotFound', () => {
  it('renders the not-found heading', () => {
    renderAt('/nope')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This corner needs tidying up')
    expect(screen.getByText('Page not found')).toBeInTheDocument()
  })

  it('shows the unmatched path and a way home', () => {
    renderAt('/nope')
    expect(screen.getByText('/nope')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/')
  })
})
