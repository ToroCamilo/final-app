import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface ModalProps{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    titulo: string;
    children: JSX.Element;
}

const Modal = ({open, setOpen, titulo, children}: ModalProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
            {titulo}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>
  )
}

export {Modal}