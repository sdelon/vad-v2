<script>
    import PrismicDom from 'prismic-dom'
    import { fade } from 'svelte/transition'
    import calendarIcon from '../../../static/images/calendar-3.png'
    import BtnPlus from '$lib/UI/BtnPlus.svelte'

    export let src, alt, categorie, titre, extrait, dateDebut, dateFin, parentPage, uid
</script>

<div transition:fade class="bg-yellow-light rounded-lg p-5 flex flex-col">
    <a href="/{parentPage}/{uid}">
        <img class="rounded-lg w-full h-52 object-cover filter hover:brightness-50 transition duration-500 cursor-pointer" {src} {alt}>
    </a>
    <p class="text-bleu-dark text-sm uppercase font-semibold tracking-wide py-4">#{categorie}</p>
    <h3 class="font-bold text-gray-dark text-2xl">{PrismicDom.RichText.asText(titre)}</h3>
    {#if dateDebut !== undefined}
    <div class="flex pt-2 pb-5 items-center space-x-4">
        <img class="w-4 h-4" src={calendarIcon} alt="icone calendrier">
        <p class="text-gray-600 text-sm">Du {dateDebut} au {dateFin}</p>
    </div>
    {/if}
    <div class="font-light flex-1">{@html PrismicDom.RichText.asHtml(extrait)}</div>
    <BtnPlus href="/{parentPage}/{uid}" />
</div>