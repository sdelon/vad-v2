<script context="module">
    export async function load({ fetch }) {
        const { accueil } = await fetch('/index.json').then(res => res.json())

        return {
            props: {
                accueil
            }
        }
    }
</script>

<script>
    import PrismicDom from 'prismic-dom'
	import SEOHead from '$lib/SEOHead.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'
	import BandeauSoutien from '$lib/UI/BandeauSoutien.svelte'
	import CardEvent from '$lib/UI/CardEvent.svelte'
	import Paragraphe from '$lib/UI/Paragraphe.svelte'
	import logoVAD from '../../static/images/logo-arbre-VAD-v2.svg'

	export let accueil
</script>

<SEOHead
	title="Accueil | Village Aux Dames"
	description="Découvrez le Village Aux Dames, un écolieu intergénérationnel LGBT+ qui participe à un mode de vie alternatif, solidaire et participatif | Village Aux Dames"
	image=""
	alt="" />

<section class="pb-20 md:pb-24 relative">
	<div class="bg-yellow bg-opacity-50 w-full h-full absolute inset-0"></div>
	<div class="container flex justify-between items-end relative">
		<div>
			<h1 class="text-6xl sm:text-7xl lg:text-8xl tracking-tight font-black text-gray-dark pb-6">{PrismicDom.RichText.asText(accueil.data.titre)}</h1>
			<h2 class="text-2xl sm:text-3xl font-medium leading-loose text-gray-700 pb-10">{PrismicDom.RichText.asText(accueil.data.intro)}</h2>
			<a href="/" class="transition duration-500 bg-gray-dark text-yellow font-bold px-8 py-3 rounded-lg uppercase tracking-wide">{accueil.data.bouton_text}</a>
		</div>
		<img width="117" height="150" class="hidden md:block w-[450px] h-[450px] object-fit" src={logoVAD} alt="logo du Village Aux Dames">
	</div>
</section>
{#each accueil.data.body as slice}
{#if slice.slice_type ===  'concept_clef'}
	<section class="container pb-20 md:pb-24 relative">
		<div>
			<HeaderSection
			titre={slice.primary.titre_section}
			text={slice.primary.intro_section}
			styles="text-gray-dark"
			borderBgColor="bg-gray-dark" />
		</div>
		<article class="grid grid-cols-1 lg:grid-cols-3 md:gap-8 text-gray-700 pt-12">
				<img class="block lg:hidden pb-8" src={slice.primary.image_section.url} alt={slice.primary.image_section.alt}>
				<div class="flex flex-col md:flex-row lg:flex-col">
					<Paragraphe
					titre={slice.items[0].titre_du_concept}
					intro={slice.items[0].intro_du_concept} />
					<Paragraphe
					titre={slice.items[1].titre_du_concept}
					intro={slice.items[1].intro_du_concept} />
				</div>
				<div class="hidden lg:block">
					<img class="w-full h-full object-cover"src={slice.primary.image_section.url} alt={slice.primary.image_section.alt}>
				</div>
				<div class="flex flex-col md:flex-row lg:flex-col">
					<Paragraphe
					titre={slice.items[2].titre_du_concept}
					intro={slice.items[2].intro_du_concept}  />
					<Paragraphe
					titre={slice.items[3].titre_du_concept}
					intro={slice.items[3].intro_du_concept}  />
				</div>
		</article>
	</section>
{:else if slice.slice_type === 'list_of_articles'}
	<section class="container pb-20">
		<div class="lg:text-center">
			<HeaderSection
			titre={slice.primary.titre_section}
			text={slice.primary.intro_section}
			styles="text-gray-dark"
			borderBgColor="bg-gray-dark" />
		</div>
		<article class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12">
		{#each slice.items as event}
			<CardEvent 
			uid={event.articles_to_link.uid}
			parentPage={event.articles_to_link.data.page}
			src={event.articles_to_link.data.image_principale.url}
			alt={event.articles_to_link.data.image_principale.alt}
			categorie={event.articles_to_link.data.categorie}
			dateDebut={event.articles_to_link.data.date_debut}
			dateFin={event.articles_to_link.data.date_fin}
			titre={event.articles_to_link.data.titre}
			extrait={event.articles_to_link.data.extrait} />
		{/each}
		</article>
	</section>
{:else if slice.slice_type === 'bandeau_de_soutien'}
	<BandeauSoutien {slice} />
{/if}
{/each}