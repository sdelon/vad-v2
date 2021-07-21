<script context="module">
    export async function load({ fetch }) {
        const { accueil } = await fetch('/api').then(res => res.json())

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

<section class="pb-20 relative">
	<div class="bg-tw-yellow-200 bg-opacity-50 w-full h-full absolute inset-0"></div>
	<div class="container flex justify-between relative">
		<div class="flex flex-col justify-between">
			<h1 class="text-6xl sm:text-7xl tracking-tight font-black text-gray-dark pb-6">{PrismicDom.RichText.asText(accueil.data.titre)}</h1>
			<h2 class="text-2xl font-medium text-gray-700 pb-10">{@html PrismicDom.RichText.asHtml(accueil.data.intro)}</h2>
			<div class="flex-none w-80">
				<a href="/" class="flex items-center cta">
					<span>{accueil.data.bouton_text}</span>
					<svg width="13px" height="10px" viewBox="0 0 13 10">
						<path d="M1,5 L11,5"></path>
						<polyline points="8 1 12 5 8 9"></polyline>
					</svg>
				</a>
			</div>
		</div>
		<img width="117" height="150" class="hidden md:block w-[350px] h-[350px] object-fit" src={logoVAD} alt="logo du Village Aux Dames">
	</div>
</section>
{#each accueil.data.body as slice}
{#if slice.slice_type === 'concept_clef'}
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
				<div class="flex flex-col md:flex-row md:space-x-8 lg:space-x-0 lg:flex-col">
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
				<div class="flex flex-col md:flex-row md:space-x-8 lg:space-x-0 lg:flex-col">
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
			<CardEvent isHomePage {event} uid={event.articles_to_link.uid} />
		{/each}
		</article>
	</section>
{:else if slice.slice_type === 'bandeau_de_soutien'}
	<BandeauSoutien {slice} />
{/if}
{/each}