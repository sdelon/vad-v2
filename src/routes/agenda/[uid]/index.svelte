<script context="module">
    export async function load({fetch, page}) {
        let parentPage = page.path.split('/')[1]
        const { event,filteredEvents } = await fetch(`/api/${parentPage}/${page.params.uid}`).then(res => res.json())

        return {
            props: {
                parentPage,
                event,
                filteredEvents
            }
        }
    }
</script>

<script>
    import PageSingleEvent from '$lib/PageSingleEvent.svelte'
    export let parentPage, event, filteredEvents
</script>

<PageSingleEvent {parentPage} {event} {filteredEvents} />