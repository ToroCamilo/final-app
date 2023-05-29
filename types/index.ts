import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export interface Context {
    db: PrismaClient;
    req: NextApiRequest;
    res: NextApiResponse;
}

interface ResolverFunction {
    [key: string]: (parent: any, args: any, context: Context) => Promise<any>;
}

export interface Resolver{
    Query: ResolverFunction;
    Mutation: ResolverFunction;
    [key: string]: ResolverFunction;
}