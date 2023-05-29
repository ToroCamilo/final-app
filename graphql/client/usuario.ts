import { gql } from "@apollo/client";

const GET_USUARIO = gql `
  query ExampleQuery($nombreUsuario: String) {
  usuario(nombre_usuario: $nombreUsuario) {
    nombre_usuario
    password
    nombre
    apellido
  }
}  
`;

export {GET_USUARIO}