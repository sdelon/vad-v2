import Client from '../../utils/client'
import Prismic from '@prismicio/client'
import { ateliersQuery, eventsQuery } from '../../utils/graphQueries'

export async function get() {
    const ateliers = await Client.query(
        [Prismic.Predicates.at('my.pages_evenements.uid', 'ateliers')],
        {'graphQuery': ateliersQuery }
    )

    const events = await Client.query(
        [Prismic.Predicates.at('my.page_evenement.page', 'ateliers')],
        {'graphQuery': eventsQuery, pageSize : 100}
    )

    return {
        body: {
            ateliers: ateliers.results[0],
            events: events.results
        }
    }
}