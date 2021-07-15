import Client from '../../utils/client'
import Prismic from '@prismicio/client'
import { agendaQuery, eventsQuery } from '../../utils/graphQueries'

export async function get() {
    const agenda = await Client.query(
        [Prismic.Predicates.at('my.pages_evenements.uid', 'agenda')],
        {'graphQuery': agendaQuery}
    )

    const events = await Client.query(
        [Prismic.Predicates.at('my.page_evenement.page', 'agenda')],
        {'graphQuery': eventsQuery, pageSize : 100}
    )

    return {
        body: {
            agenda: agenda.results[0],
            events: events.results
        }
    }
}