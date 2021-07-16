import Client from '../../utils/client'
import Prismic from '@prismicio/client'
import { projetQuery } from '../../utils/graphQueries'

export async function get() {
    const projet = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_projet')],
        {'graphQuery': projetQuery}
    )

    return {
        body: {
            projet: projet.results[0]
        }
    }
}