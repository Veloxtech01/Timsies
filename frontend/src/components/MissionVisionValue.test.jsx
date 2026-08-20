import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MissionVisionValue from './MissionVisionValue'
import { missionVisionValueCards } from '../data/missionVisionValue'

describe('MissionVisionValue', () => {
  it('renders every card heading', () => {
    render(<MissionVisionValue />)
    for (const card of missionVisionValueCards) {
      expect(
        screen.getByRole('heading', { level: 3, name: card.heading })
      ).toBeInTheDocument()
    }
  })
})
