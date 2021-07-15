import Client from '../../utils/client'
import Prismic from '@prismicio/client'
import { fondatricesQuery } from '../../utils/graphQueries'

export async function get() {
    const fondatrices = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_fondatrices')],
        { 'graphQuery': fondatricesQuery}
    )

    return {
        body: {
            fondatrices: fondatrices.results[0]
        }
    }
}