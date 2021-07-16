import Client from '../../utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const activites = await Client.query(
        [Prismic.Predicates.at('document.type', 'page_activites')]
    )

    const activitesIsOpen = activites.results[0].data.body.reduce((newArr, currItem) => {
        let activite = currItem.slice_type === 'activite'
        const newActivite = {...currItem, isOpen: false}

        if(activite) newArr.push(newActivite)

        return newArr
    }, [])

    return {
        body: {
            activites: activites.results[0],
            activitesIsOpen
        }
    }
}