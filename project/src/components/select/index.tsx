import { SyntheticEvent } from 'react'

import { Autocomplete as MUISelect, TextField as MUIInput } from '@mui/material'

type AutocompleteOption = {
  name: string
  value: string
}

type InputProps = {
  label: string
  value?: AutocompleteOption | null
  options?: AutocompleteOption[]
  onInputChange: (value: AutocompleteOption) => void
}

const Select = ({
  label,
  value = null,
  onInputChange,
  options = []
}: InputProps) => {
  const handleChange = (
    event: SyntheticEvent,
    newValue: AutocompleteOption | null
  ) => {
    onInputChange(newValue as AutocompleteOption)
  }

  return (
    <MUISelect
      options={options}
      data-testid="autocomplete"
      getOptionLabel={(option) => option.name}
      value={value}
      onChange={handleChange}
      renderInput={(params) => (
        <MUIInput {...params} label={label} variant="outlined" />
      )}
    />
  )
}

export { Select }
