import Client from '../../utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const all_events = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_evenement')]
    )

    return {
        body: {
            all_events: all_events.results
        }
    }
}