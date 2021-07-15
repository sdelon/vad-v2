<script>
    import PrismicDOM from 'prismic-dom'
	import FilteringTags from '$lib/UI/FilteringTags.svelte'
	import PageTagHeader from '$lib/UI/PageTagHeader.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'
	import CardEvent from '$lib/UI/CardEvent.svelte'
	import CardEnAvant from '$lib/UI/CardEnAvant.svelte'
	import BtnReadMore from '$lib/UI/BtnReadMore.svelte'
	import Paragraphe from '$lib/UI/Paragraphe.svelte'

    export let page, events, titrePage, titreSection1, titreTagHeader
	let currentEvents = 1
</script>

<section class="container">
	<PageTagHeader page={titreTagHeader}/>
	<HeaderSection 
	h1={true}
	titre={page.data.titre_principal}
	text={page.data.intro_principale} 
	styles="text-gray-dark pt-8" />
</section>
{#each page.data.body as slice, i}
{#if slice.slice_type === 'list_of_articles'}
<h2 class="container uppercase text-gray-dark text-4xl font-black tracking-tight pb-4 md:text-center">{PrismicDOM.RichText.asText(slice.primary.titre_section)}</h2>
<div class="w-32 h-2 bg-gray-dark mx-auto mb-8"></div>
<section class="w-full bg-gray-200 px-5 lg:px-0">
	<div class="lg:max-w-screen-lg mx-auto py-8 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10">
        {#each slice.items as slice}
			<CardEnAvant {slice}/>
        {/each}
	</div>
</section>
{/if}
{/each}
<section class="container pb-12 pt-12">
	<h2 class="container uppercase text-gray-dark text-4xl font-black tracking-tight pb-4 md:text-center">{titreSection1}</h2>
	<div class="w-32 h-2 bg-gray-dark mx-auto mb-8"></div>
	<FilteringTags on:filterByTag on:reset />
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
	{#each events as event}
			<CardEvent
			parentPage={titrePage}
			uid={event.uid}
            src={event.data.image_principale.url}
            alt={event.data.image_principale.alt}
            categorie={event.data.categorie}
            titre={event.data.titre}
            extrait={event.data.extrait}
            dateDebut={event.data.date_debut}
            dateFin={event.data.date_fin} />
		{/each}
	</div>
	{#if currentEvents < events.length}
        <BtnReadMore 
        {currentEvents}
        nbOfPostsToLoad=6 />
	{/if}
</section>
{#each page.data.body as slice}
{#if slice.slice_type === 'evenements_prives'}
<section class="container pb-20 text-center">
	<img class="w-full h-60 rounded-lg object-cover" src={slice.primary.image.url} alt={slice.primary.image.alt}>
	<HeaderSection 
	titre={slice.primary.titre}
	text={slice.primary.texte} 
	styles="text-gray-dark pt-8"
	borderBgColor="bg-gray-dark" />
	<a href="/" class="inline-block cta-btn">{slice.primary.bouton_texte}</a>
</section>
{:else if slice.slice_type === 'organisation_de_visites'}
<section class="container pb-20 text-gray-dark">
	<div class="flex flex-col md:flex-row justify-between">
		<div class="flex flex-col justify-center">
			<h2 class="uppercase text-gray-dark text-4xl font-black tracking-tight pb-4">{PrismicDOM.RichText.asText(slice.primary.titre)}</h2>
			<div class="w-32 h-2 bg-gray-dark mb-8"></div>
			<div class="text-gray-600 pb-5 md:pb-8 md:w-2/3">{@html PrismicDOM.RichText.asHtml(slice.primary.intro)}</div>
			<a href="/" class="bg-bleu-primaire hover:bg-bleu-light px-6 py-3 rounded-lg text-gray-dark uppercase text-lg font-bold tracking-wide self-start">{slice.primary.bouton_texte}</a>
		</div>
		<img class="order-first md:order-last w-full h-48 md:w-96 md:h-96 object-cover rounded-lg pb-8 md:pb-0" src={slice.primary.image.url} alt={slice.primary.image.alt}>
	</div>
	<div class="flex flex-col sm:flex-row justify-between pt-8 sm:space-x-5">
        {#each slice.items as item}
		<Paragraphe 
		titre={item.titre_argument}
		intro={item.texte} />
        {/each}
	</div>
</section>
{/if}
{/each}
