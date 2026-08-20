import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FaqList from './FaqList'
import { faqs } from '../data/faq'

describe('FaqList', () => {
  it('renders every question, collapsed by default', () => {
    render(<FaqList />)
    for (const item of faqs) {
      expect(
        screen.getByRole('button', { name: item.question })
      ).toHaveAttribute('aria-expanded', 'false')
    }
  })

  it('expands an item on click and reveals its answer', async () => {
    const user = userEvent.setup()
    render(<FaqList />)

    const first = faqs[0]
    const trigger = screen.getByRole('button', { name: first.question })
    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(first.answer)).toBeInTheDocument()
  })

  it('closes the previously open item when another one opens', async () => {
    const user = userEvent.setup()
    render(<FaqList />)

    const [first, second] = faqs
    const firstTrigger = screen.getByRole('button', { name: first.question })
    const secondTrigger = screen.getByRole('button', { name: second.question })

    await user.click(firstTrigger)
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'true')

    await user.click(secondTrigger)
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true')
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'false')
  })
})
