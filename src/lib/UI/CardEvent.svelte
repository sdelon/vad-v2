<script>
    import PrismicDom from 'prismic-dom'
    import { fade } from 'svelte/transition'
    import calendarIcon from '../../../static/images/calendar-3.png'
    import BtnPlus from '$lib/UI/BtnPlus.svelte'
    import Image from '$lib/UI/Image.svelte'

    export let event, uid, isHomePage, parentPage

    $: isHomePage ? event = event.articles_to_link.data : event = event.data
    $: isHomePage ? parentPage = event.page : parentPage
</script>

<div transition:fade class="bg-yellow-light rounded-lg p-5 flex flex-col">
    <a href="/{parentPage}/{uid}">
        <Image 
        src={event.image_principale.url} 
        alt={event.image_principale.alt}
        width={event.image_principale.dimensions.width}
        height={event.image_principale.dimensions.height}
        styles="rounded-lg w-full h-52 object-cover filter hover:brightness-50 transition duration-500 cursor-pointer"/>
    </a>
    <p class="text-bleu-dark text-sm uppercase font-semibold tracking-wide py-4">#{event.categorie}</p>
    <h3 class="font-bold text-gray-dark text-2xl">{PrismicDom.RichText.asText(event.titre)}</h3>
    {#if event.date_debut !== undefined}
    <div class="flex pt-2 pb-5 items-center space-x-4">
        <img class="w-4 h-4" src={calendarIcon} alt="icone calendrier">
        <p class="text-gray-600 text-sm">Du {event.date_debut} au {event.date_fin}</p>
    </div>
    {/if}
    <div class="font-light flex-1">{@html PrismicDom.RichText.asHtml(event.extrait)}</div>
    <BtnPlus href="/{parentPage}/{uid}" />
</div>