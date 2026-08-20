import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import HeroSlider from './HeroSlider'
import { heroSlides } from '../data/heroSlides'

// The slider renders <Link>, so every case needs a router around it.
const renderSlider = () =>
  render(
    <MemoryRouter>
      <HeroSlider />
    </MemoryRouter>
  )

describe('HeroSlider', () => {
  it('renders the first slide with its CTA link', () => {
    renderSlider()
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0].title })
    ).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', heroSlides[0].buttonUrl)
  })

  it('advances to the next slide when the next control is clicked', async () => {
    const user = userEvent.setup()
    renderSlider()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1].title })
    ).toBeInTheDocument()
  })

  it('jumps to a slide from its dot indicator', async () => {
    const user = userEvent.setup()
    renderSlider()
    await user.click(
      screen.getByRole('button', { name: `Go to slide 3: ${heroSlides[2].title}` })
    )
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[2].title })
    ).toBeInTheDocument()
  })
})
