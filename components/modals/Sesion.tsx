import React, { FormEvent, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GET_USUARIO } from '@/graphql/client/usuario';
import { useQuery } from '@apollo/client';
import { Usuario } from '@prisma/client'

export default function AlertDialog() {
  const [modalLogin, setModalLogin] = React.useState(false);
  const [modalRegister, setModalRegister] = React.useState(false);

  const [formData, setFormData] = useState({
    user: '',
    passw: ''
  })
  
  interface modalControlProps {
    register: boolean;
    login: boolean
  }
    
  const modalControl = ({login, register}:modalControlProps) => {
    setModalLogin(login)
    setModalRegister(register)
  };

  const submitForm =async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {data} = useQuery<{usuario:Usuario}>(
        GET_USUARIO,
        {
          variables:{
            nombre_usuario: formData.user,
          },
        }
      ) 
      console.log(data)
    }catch(e){
      console.error(e)
    }
  }

  return (
    <div >
      <Button variant="outlined"  onClick={()=>modalControl({login:true, register:false})}>
        INICIO DE SESION
      </Button>
      <Dialog 
        open={modalLogin}
        onClose={()=>modalControl({login:false, register:false})}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        /*fullWidth={true}
        maxWidth={'sm'}*/
      >
        <DialogTitle className='text-center' id="Registro"><span className='font-bold'>LOGIN</span></DialogTitle>
        <DialogContent  >
          <div >
            <form onSubmit={submitForm} method='post'>
              <label htmlFor="user">
                <span>Usuario</span>
                <input
                  required 
                  className='int'
                  value={formData.user}
                  onChange={(e) => setFormData((prev) => ({...prev, user: e.target.value}) )}
                  type="text" 
                  name = "user"
                  placeholder='Nombre de usuario'
                />
              </label>
              <label htmlFor='passw'>
                <span>Contraseña</span>
                <input 
                required
                className='int'
                value={formData.passw}
                onChange={(e) => setFormData((prev) => ({...prev, passw: e.target.value}) )}
                type="password"
                name='passw'
                placeholder='Contraseña'/>
              </label>

              <div className='flex justify-center gap-4 m-4'>
                <button type='submit' className='bttint'  >
                  INICIO DE SESION
                </button>
                <button className='bttint' onClick={()=>modalControl({login:false, register:true})}  >
                  REGISTRARSE
                </button>
              </div> 

            </form>
          </div> 
        </DialogContent>        
           
      </Dialog>

      {/*}
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
  {*/}
    </div>
  );
}
