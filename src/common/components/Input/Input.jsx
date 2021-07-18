import React from 'react'
import { forwardRef } from 'react'
import { TextField } from '@material-ui/core'

const Input = forwardRef((props, ref) => {
  return <TextField variant="outlined" inputRef={ref} {...props} />
})

export default Input