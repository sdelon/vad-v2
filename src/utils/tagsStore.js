import { writable } from 'svelte/store'

const allTags = writable([])

const tagsStore = {
    subscribe: allTags.subscribe,
    addTag: tag => {
        allTags.update(tags => [...tags, tag])
    },
    removeTag: tag => {
        allTags.update(tags => {
            return tags.filter(item => item !== tag)
        })
    },
    reset: () => {
        allTags.set([])
    }
}

export default tagsStore