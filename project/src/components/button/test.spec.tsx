import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button component', () => {
  it('should render with label', () => {
    render(<Button label="send" />)

    expect(screen.getByRole('button', { name: 'send' })).toBeInTheDocument()
  })
})
