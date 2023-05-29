import { gql } from "graphql-tag";

export const typeDefs = gql`
    type Usuario {
        nombre_usuario:String
        password:String
    }

    type Query {
        usuario(nombre_usuario:String):Usuario
    }

    type Mutation{
        crearUsuario(nombre_usuario: String!, password: String): Usuario
    }
`