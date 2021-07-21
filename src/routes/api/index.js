import Client from '../../utils/client'
import Prismic from '@prismicio/client'
import { accueilQuery } from '../../utils/graphQueries'

export async function get() {
    const accueil = await Client.query(
        [Prismic.Predicates.at('document.type', 'accueil')],
        {'graphQuery': accueilQuery}
    )

    const events = await Client.query(
        [Prismic.Predicates.at('document.type', 'pages_evenements')]
    )

    return {
        body: {
            accueil: accueil.results[0],
            events: events.results
        }
    }
}