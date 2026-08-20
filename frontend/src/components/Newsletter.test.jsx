import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Newsletter from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email field, and subscribe button', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Stay Updated with Our Updates',
      })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Subscribe' })
    ).toBeInTheDocument()
  })
})
