<script>
    import PrismicDOM from 'prismic-dom'
    import { capitalize } from '../utils/helpers'
    import calendarIcon from '../../static/images/calendar-3.png'
    import Image from '$lib/UI/Image.svelte'

    export let parentPage, event
    export let filteredEvents
</script>

<section class="container pb-12 space-y-8">
    <div class="flex items-center space-x-3 text-gray-500 hover:text-bleu-primaire">
        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        <a class="text-2xl font-semibold" href="/{parentPage}">{capitalize(parentPage)}</a>
    </div>
    <h1 class="text-gray-800 text-5xl font-bold">{PrismicDOM.RichText.asText(event.data.titre)}</h1>
    <p class="text-gray-500">{PrismicDOM.RichText.asText(event.data.extrait)}</p>
    <Image 
    src={event.data.image_principale.url}
    alt={event.data.image_principale.alt}
    width={event.data.image_principale.dimensions.width}
    height={event.data.image_principale.dimensions.height}
    styles="w-full h-96 object-cover rounded-lg"/>
    <div class="flex items-center justify-start space-x-5 bg-gray-card-bg w-full h-24 p-8 rounded border-[1px] border-solid border-gray-400">
        <img class="w-8 h-8" src={calendarIcon} alt="icone calendrier">
        <p class="text-gray-800 text-lg">Du {event.data.date_debut} au {event.data.date_fin}</p>
    </div>
    {#each event.data.body as slice}
    {#if slice.slice_type === 'text'}
        <div class="prose">{@html PrismicDOM.RichText.asHtml(slice.primary.texte)}</div>
    {/if}
    {/each}
</section>
<section class="container pb-20">
    <div class="bg-yellow-light w-2/3 p-8 rounded border-[1px] border-solid border-yellow">
        <h2 class="text-lg tracking-wide font-bold text-gray-dark pb-3">D'autres ateliers à venir en lien avec : {event.data.categorie}</h2>
        <ul>
            {#if filteredEvents.length > 0}
            {#each filteredEvents as event}
                <li class="list-disc list-inside text-gray-dark">            
                    <a class="hover:font-bold" sveltekit:prefetch href="/{parentPage}/{event.uid}">{PrismicDOM.RichText.asText(event.data.titre)}</a>
                </li>
            {/each}
            {:else}
            <p class="text-gray-dark">Il n'y a pas encore de nouvel événement lié à cette catégorie</p>
            {/if}
        </ul>
    </div>
</section>