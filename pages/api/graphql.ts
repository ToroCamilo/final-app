import { resolvers } from '@/graphql/server/resolvers';
import { typeDefs } from '@/graphql/server/types';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/config/prisma";
import { Context } from '@/types';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const serverHandler = startServerAndCreateNextHandler<NextApiRequest, Context>(
  server,
  {
    context: async (req: NextApiRequest, res: NextApiResponse) => {
      return {
        req,
        res,
        db: prisma,
      };
    },
  }
);

const graphqlServer = async (req: NextApiRequest, res: NextApiResponse) => {
  return serverHandler(req, res);
};

export default graphqlServer;