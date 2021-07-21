<script>
    import PrismicDom from 'prismic-dom'
    import calendarIcon from '/static/images/calendar-3.png'
    import BtnPlus from '$lib/UI/BtnPlus.svelte'
    import Image from '$lib/UI/Image.svelte'

    export let slice
</script>

<div class="bg-yellow-light rounded-xl p-2 flex flex-col md:flex-row md:space-x-5">
    <a class="md:w-60 h-32 md:h-full lg:shadow-lg" href="/{slice.articles_to_link.data.page}/{slice.articles_to_link.uid}">
        <Image 
        src={slice.articles_to_link.data.image_principale.url}
        alt={slice.articles_to_link.data.image_principale.alt} 
        width={slice.articles_to_link.data.image_principale.dimensions.width}
        height={slice.articles_to_link.data.image_principale.dimensions.height}
        styles="rounded-xl w-full h-full object-cover filter hover:brightness-50 transition duration-500 cursor-pointer"/>
    </a>
    <div class="flex flex-col pt-4">
        <p class="text-bleu-dark text-sm uppercase font-semibold tracking-wide pb-4">#{slice.articles_to_link.data.categorie}</p>
        <h3 class="font-bold text-gray-dark text-xl">{PrismicDom.RichText.asText(slice.articles_to_link.data.titre)}</h3>
        {#if slice.articles_to_link.data.date_debut !== undefined}
        <div class="flex pt-2 pb-5 items-center space-x-4">
            <img class="w-4 h-4" src={calendarIcon} alt="icone calendrier">
            <p class="text-gray-600 text-sm">Du {slice.articles_to_link.data.date_debut} au {slice.articles_to_link.data.date_fin}</p>
        </div>
        {/if}
        <div class="font-light">{@html PrismicDom.RichText.asHtml(slice.articles_to_link.data.extrait)}</div>
        <BtnPlus href="/{slice.articles_to_link.data.page}/{slice.articles_to_link.uid}" />
    </div>
</div>