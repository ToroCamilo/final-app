import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);
    const [regis, setRegis] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRegis(true);
  };

  const cerrar = () => {
    setRegis(false);
    setOpen(true);
  }

  const nada = () => {
    setRegis(false);
    setOpen(false);
  }

  return (
    <div >
      <Button variant="outlined"  onClick={handleClickOpen}>
        INICIO DE SESION
      </Button>
      <Dialog 
        open={open}
        onClose={nada}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={'sm'}
      >
        <DialogTitle className='text-center text-black' id="Registro">{"L O G I N "} </DialogTitle>
        <DialogContent className='flex flex-col gap-4' >
            <input className='int' type="text" placeholder='USUARIO'/>
            <input className='int' type="password" placeholder='CONTRASEÑA'/>
            
        </DialogContent>        
          <div className='flex justify-center gap-4 m-4'>
            <button className='bttint'  >
              INICIO DE SESION
            </button>
            <button className='bttint' onClick={handleClose}  >
              REGISTRARSE
            </button>
            
          </div>  
      </Dialog>

      
        <Dialog
            open={regis}
            onClose={nada}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth={'sm'}
      >
        <DialogTitle className='text-center text-black' id="alert-dialog-title">{"R E G I S T R A R S E"}</DialogTitle>
        
        <DialogContent className='flex flex-col gap-4'>
            <input className='int' type="text" placeholder='NOMBRE DE USUARIO'/>
            <input className='int' type="password" placeholder='CONTRASEÑA'/>
            <input className='int' type="password" placeholder='CONFIRMAR CONTRASEÑA'/>
        </DialogContent >
        <div className='flex justify-center gap-4 m-4'>
          <button className='bttint'  >
            REGISTRARSE
          </button>
          <button className='bttint' onClick={cerrar}>
            INICIAR SESION
          </button>
          
        </div>
        </Dialog>
    </div>
  );
}
