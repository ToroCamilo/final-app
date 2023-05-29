import { Resolver } from "@/types";

const resolvers: Resolver = {
    Query:{
        usuario: async (parent, args, context) => {
            return null
        },
    },
    Mutation:{
        crearUsuario:async (parent, args, context) => {
            
        }
    }
}

export{resolvers}