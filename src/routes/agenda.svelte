<script context="module">
	export async function load({ fetch }) {
		const { agenda, events } = await fetch('/api/agenda').then(res => res.json())

		return {
			props: {
				agenda,
                events
			}
		}
	}
</script>

<script>
	import { setContext } from 'svelte'
	import tagsStore from '../utils/tagsStore'
	import { getTags } from '../utils/helpers'
	import PageEvents from '$lib/PageEvents.svelte'
	import SEOHead from '$lib/SEOHead.svelte'
	
    export let agenda, events
	let currentEvents = 6

	const tags = getTags(events)
	setContext('tagsContext', tags)

	const updateTags = tag => !$tagsStore.includes(tag) ? tagsStore.addTag(tag) : tagsStore.removeTag(tag)

	$: filteredEvents = $tagsStore.length > 0 ? events.filter(event => $tagsStore.includes(event.data.categorie)) : events
</script>

<SEOHead
	title="Agenda et actualités | Village Aux Dames"
	description="Découvrez le Village Aux Dames, un écolieu intergénérationnel LGBT+ qui participe à un mode de vie alternatif, solidaire et participatif | Village Aux Dames"
	image=""
	alt="" />

<PageEvents 
titreTagHeader='Agenda et actualités'
titrePage='agenda'
titreSection1='Tous les ateliers du Village Aux Dames'
page={agenda} 
events={filteredEvents} 
{currentEvents}
{tags}
on:filterByTag={e => updateTags(e.detail)}
on:reset={() => tagsStore.reset()} />