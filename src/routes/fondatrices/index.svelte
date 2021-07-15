<script context="module">
	export async function load({fetch}) {
		const { fondatrices } = await fetch('/fondatrices/fondatrices.json').then(res => res.json())

		return {
			props: {
				fondatrices
			}
		}
	}
</script>

<script>
	import SEOHead from '$lib/SEOHead.svelte'
	import PageTagHeader from '$lib/UI/PageTagHeader.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'
	import BandeauSoutien from '$lib/UI/BandeauSoutien.svelte'
    import PrismicDOM from 'prismic-dom'

	export let fondatrices
	$: ({ body } = fondatrices.data)
</script>

<style>
	form {
		@apply lg:w-1/2;
	}
</style>

<SEOHead
	title="Les fondatrices | Village Aux Dames"
	description="Cici et Sandra expliquent leurs motivations et les raisons qui les ont poussées à développer ce premier écolieu intergénérationnel LGBT+ | Village Aux Dames"
	image=""
	alt="" />

<section class="container">
	<PageTagHeader page="les fondatrices"/>
	<HeaderSection 
	h1={true}
	titre={fondatrices.data.titre_principal}
    text={null}
	styles="text-gray-dark pt-8" />
</section>
<section class="container pb-20 md:pb-24">
	<div class="font-light sm:w-1/2 prose">{@html PrismicDOM.RichText.asHtml(fondatrices.data.description_1)}</div>
	<img class="w-full h-[400px] object-cover py-12" src={fondatrices.data.image.url} alt={fondatrices.data.image.alt}>
	<div class="flex flex-col lg:flex-row justify-between lg:space-x-20">
		<form id="contact" class="order-last lg:order-first bg-bleu-light p-6 rounded-lg space-y-8 mt-12 lg:mt-24 shadow-lg">
			<div class="text-gray-dark"><p>Vous souhaitez passer des vacances dans un écovillage en devenir ? Vous êtes intéressés par la mouvance éco-lieux mais ne savez pas par où commencer ? Vous souhaitez rejoindre le projet du Village aux dames tant que résidentes  bénévole, intervenant externe ? Envoyez-nous un message</p></div>
			<div class="flex flex-col space-y-2">
				<label class="text-gray-700 font-light text-sm" for="nom">Votre nom</label>
				<input class="rounded-lg px-3 py-2" id="nom" type="text">
			</div>
			<div class="flex flex-col space-y-2">
				<label class="text-gray-700 font-light text-sm" for="email">Votre adresse email</label>
				<input class="rounded-lg px-3 py-2" id="email" type="email">
			</div>
			<div class="flex flex-col space-y-2">
				<label class="text-gray-700 font-light text-sm" for="message">Votre message</label>
				<textarea class="rounded-lg px-3 py-2" name="message" id="message" cols="30" rows="10"></textarea>
			</div>
			<button class="w-full bg-bleu-dark rounded-lg py-2 text-gray-100 uppercase font-bold tracking-wide" type="envoyer">Envoyer</button>
		</form>
		<div class="font-light sm:w-1/2 lg:text-right prose">{@html PrismicDOM.RichText.asHtml(fondatrices.data.description_2)}</div>
	</div>
</section>
{#each body as slice}
{#if slice.slice_type === "bandeau_de_soutien"}
    <BandeauSoutien {slice} />
{/if}
{/each}