<script context="module">
	export async function load({ fetch }) {
		const { activites } = await fetch('/activites/activites.json').then(res => res.json())
        
        return {
            props: {
                activites
            }
        }
	}
</script>

<script>
	import slugify from 'slugify'
	import SEOHead from '$lib/SEOHead.svelte'
	import PageTagHeader from '$lib/UI/PageTagHeader.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'
	import CardActivite from '$lib/UI/CardActivite.svelte'
	
    export let activites
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
<section class="container pb-20 grid grid-cols-1 md:grid-cols-7 gap-5">
	<div class="w-72 md:w-full md:col-span-2 p-3 sticky top-0 bg-bleu-light text-sm font-light rounded shadow-lg">
		<ul class="flex justify-between flex-col sticky top-0 md:space-y-5 self-start">
			{#each body as slice}
            {#if slice.slice_type === 'activite'}
			<li class="pb-1 md:pb-4 hover:font-medium">			
				<a class="whitespace-nowrap md:whitespace-normal text-gray-dark" href="./activites#{slugify(slice.primary.titre_activite[0].text)}">{slice.primary.titre_activite[0].text}</a>
			</li>
            {/if}
			{/each}
		</ul>
	</div>
	<div class="col-span-5 space-y-12 lg:space-y-20">
		{#each body as slice, i}
        {#if slice.slice_type === 'activite'}
			<CardActivite {slice} order={i % 2 === 0 ? "lg:order-first" : "lg:order-last"}/>
		{/if}
            {/each}
	</div>
</section>