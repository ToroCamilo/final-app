import { Resolver } from "@/types";

const resolvers: Resolver = {
    Query:{
        usuario: async (parent, args, context) => {
            return (context.db.usuario.findUnique(({where: {nombre_usuario: args.nombre_usuario}})) )
        },
    },
    Mutation:{
        crearUsuario:async (parent, args, context) => {
            
        }
    }
}

export{resolvers}