import Client from '../../utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const activites = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_activites')]
    )

    return {
        body: {
            activites: activites.results[0]
        }
    }
}