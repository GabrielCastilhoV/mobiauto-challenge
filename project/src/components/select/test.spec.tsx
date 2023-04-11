import { render, screen } from '@testing-library/react'

import { Select } from '.'

test('should render with label', () => {
  const options = [
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' }
  ]

  const onInputChange = jest.fn()
  const label = 'Select Option'

  render(
    <Select
      label={label}
      value={options[0]}
      options={options}
      onInputChange={onInputChange}
    />
  )

  expect(screen.getByLabelText(label)).toBeInTheDocument()
})
