import Client from '../../utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const all_events = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_evenement')],
        { orderings : '[my.page_evenement.date_debut]' }
    )

    const sorted_events = all_events.results
    .reduce((newObj, event) => {
        const date = event.data.date_debut.split(/[-]/)

        newObj[date[0]] = newObj[date[0]] || {}
        if(newObj[date[0]][date[1]] == null) newObj[date[0]][date[1]] = []
        newObj[date[0]][date[1]].push(event)
        
        return newObj
    }, {})

    return {
        body: {
            nb_of_events: all_events.results.length,
            sorted_events: [sorted_events]
        }
    }
}