import Client from '../../utils/client'
import Prismic from '@prismicio/client'
import { activitesQuery } from '../../utils/graphQueries'

export async function get() {
    const activites = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_activites')],
        { 'graphQuery': activitesQuery}
    )

    return {
        body: {
            activites: activites.results[0]
        }
    }
}