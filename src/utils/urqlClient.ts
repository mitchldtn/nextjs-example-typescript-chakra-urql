import { dedupExchange, fetchExchange, Exchange, stringifyVariables, ssrExchange } from "urql";
import { cacheExchange, Resolver } from '@urql/exchange-graphcache'

export const urqlClient = (ssrExchange: any, context: any) => {
    return {
        url: process.env.API_URL as string,
        fetchOptions: {
            credentials: "include" as const,
        }, 
        exchanges: [dedupExchange, cacheExchange(), ssrExchange, fetchExchange],
    }
}