import Client from '../../../utils/client'
import Prismic from '@prismicio/client'

export async function get({ params }) {

    const event = await Client.query(
        [Prismic.Predicates.at('my.page_evenement.uid', params.uid)]
    )

    const sameCategorieEvents = await Client.query(
        [Prismic.Predicates.at('my.page_evenement.categorie', event.results[0].data.categorie)]
    )

    const filteredEvents = sameCategorieEvents.results.filter(event => event.uid !== params.uid) || []

    return {
        body: {
            event: event.results[0],
            filteredEvents
        }
    }
}