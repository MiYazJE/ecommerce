import React from 'react'
import {
  Dialog as MaterialDialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

const Dialog = ({
  open,
  onHide,
  title = 'Title',
  children,
  fullWidth = true,
  maxWidth = 'sm'
}) => {
  return (
    <MaterialDialog
      open={open}
      onClose={onHide}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </MaterialDialog>
  )
}

export default Dialog
