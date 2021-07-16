<script context="module">
	export async function load({fetch}) {
		const { projet } = await fetch('/api/projet').then(res => res.json())

		return {
			props: {
				projet
			}
		}
	}
</script>

<script>
    import PrismicDOM from 'prismic-dom'
	import SEOHead from '$lib/SEOHead.svelte'
	import PageTagHeader from '$lib/UI/PageTagHeader.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'

	export let projet
    $: ({ body } = projet.data)
</script>

<style>
    .concept-container {
        @apply pb-8 pr-8;
    }
</style>

<SEOHead
	title="Projet Associatif | Village Aux Dames"
	description="Découvrez le Village Aux Dames, un écolieu intergénérationnel LGBT+ qui participe à un mode de vie alternatif, solidaire et participatif | Village Aux Dames"
	image=""
	alt="" />

<section class="container">
	<PageTagHeader page="Le projet associatif"/>
	<HeaderSection 
	h1={true}
	titre={projet.data.titre_principal}
	text={projet.data.intro_principale} 
	styles="text-gray-dark pt-8" />
</section>
{#each body as slice}
    {#if slice.slice_type === "le_projet_en_3_idees"}
    <section class="container pb-20 grid grid-cols-1 md:grid-cols-2 space-y-8 sm:space-y-0">
        <div class="flex flex-col justify-between space-y-6">
            {#each slice.items as idee}
            <div class="concept-container">
                <h2 class="text-xl uppercase font-black pb-1 text-bleu-dark">{PrismicDOM.RichText.asText(idee.titre_du_concept)}</h2>
                <div class="text-gray-dark leading-7 prose">{@html PrismicDOM.RichText.asHtml(idee.description_concept)}</div>
            </div>
            {/each}
        </div>
        <img class="md:hidden order-first w-full h-[300px] object-cover pb-8" src={projet.data.image_1.url} alt={projet.data.image_1.alt}>
        <div class="hidden md:flex flex-col justify-between space-y-5">
            <img class="order-last w-full h-full object-cover" src={projet.data.image_1.url} alt={projet.data.image_1.alt}>
            <img class="order-last w-full h-full object-cover" src={projet.data.image_2.url} alt={projet.data.image_2.alt}>
        </div>
    </section>
    {:else if slice.slice_type === "liste_des_partenaires"}
    <section class="container pb-20 md:pb-24 text-center">
        <h2 class="text-gray-dark uppercase text-4xl font-black tracking-tight pb-4 md:text-center">{PrismicDOM.RichText.asText(slice.primary.titre_section)}</h2>
        <div class="w-32 h-2 bg-gray-dark mx-auto mb-8"></div>
        <div class="py-12 grid grid-cols-4 md:grid-cols-6 gap-8">
            {#each slice.items as logo}
                <img src={logo.logo.url} alt={logo.logo.alt}>
            {/each}
        </div>
        <div class="md:text-center md:mx-auto text-gray-600 pb-5 md:pb-8 md:w-2/3 prose">{@html PrismicDOM.RichText.asHtml(slice.primary.intro)}</div>
        <a href="/" class="inline-block cta-btn">{slice.primary.bouton_texte}</a>
    </section>
    {/if}
{/each}