import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps
} from '@mui/material'

type ButtonProps = {
  label: string
} & MUIButtonProps

const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <MUIButton variant="contained" {...rest}>
      {label}
    </MUIButton>
  )
}

export { Button }
