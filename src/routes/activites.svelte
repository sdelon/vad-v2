<script context="module">
	export async function load({ fetch }) {
		const { activites, activitesIsOpen } = await fetch('/api/activites').then(res => res.json())
        
        return {
            props: {
                activites,
				activitesIsOpen
            }
        }
	}
</script>

<script>
	import SEOHead from '$lib/SEOHead.svelte'
	import PageTagHeader from '$lib/UI/PageTagHeader.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'
	import CardActivite from '$lib/UI/CardActivite.svelte'
	import ActivitesCommun from '$lib/ActivitesCommun.svelte'
	import TOCActivites from '$lib/UI/TOCActivites.svelte'

    export let activites, activitesIsOpen
    $: ({ body } = activites.data)
</script>

<SEOHead
	title="Les activités | Village Aux Dames"
	description="Découvrez le Village Aux Dames, un écolieu intergénérationnel LGBT+ qui participe à un mode de vie alternatif, solidaire et participatif | Village Aux Dames"
	image=""
	alt="" />

<section class="container">
	<PageTagHeader page="Les activités"/>
	<HeaderSection 
	h1={true}
	titre={activites.data.titre_principal}
	text={activites.data.intro_principale} 
	styles="text-gray-dark pt-8" />
</section>
<section class="container pb-16 grid grid-cols-1 md:grid-cols-7 gap-5 relative">
	<TOCActivites {activitesIsOpen}/>	
	<div class="pl-6 md:pl-0 col-span-5 space-y-12 lg:space-y-20">
		{#each body as slice, i}
        {#if slice.slice_type === 'activite'}
			<CardActivite {slice} order={i % 2 === 0 ? "lg:order-first" : "lg:order-last"}/>
		{/if}
		{/each}
	</div>
</section>
<ActivitesCommun {body} />