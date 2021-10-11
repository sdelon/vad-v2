<script context="module">
    export const prerender = true

	export async function load({fetch}) {
		const { fondatrices } = await fetch('/api/fondatrices').then(res => res.json())

		return {
			props: {
				fondatrices
			}
		}
	}
</script>

<script>
	import PrismicDOM from 'prismic-dom'
	import SEOHead from '$lib/SEOHead.svelte'
	import PageTagHeader from '$lib/UI/PageTagHeader.svelte'
	import HeaderSection from '$lib/UI/HeaderSection.svelte'
	import BandeauSoutien from '$lib/UI/BandeauSoutien.svelte'
	import Image from '$lib/UI/Image.svelte'

	export let fondatrices
	$: ({ body } = fondatrices.data)
</script>

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

<section>
    <div class="container px-4 mx-auto">
        <div class="prose mb-20 mx-auto text-gray-600 font-medium">{@html PrismicDOM.RichText.asHtml(fondatrices.data.intro)}</div>
        <div class="flex flex-wrap -m-8 mb-8 md:mb-20">
            <Image 
            src={fondatrices.data.image_1.url}
            mq_sizes="(min-width: 1024px) 70vw, 100vw"
            alt={fondatrices.data.image_1.alt}
            width={fondatrices.data.image_1.dimensions.width}
            height={fondatrices.data.image_1.dimensions.height}
            container_styles="w-full lg:w-2/3 h-96 p-8"
            styles="w-full h-full object-cover" />
            <Image 
            src={fondatrices.data.image_2.url}
            mq_sizes="(min-width: 1024px) 30vw, 100vw"
            alt={fondatrices.data.image_2.alt}
            width={fondatrices.data.image_2.dimensions.width}
            height={fondatrices.data.image_2.dimensions.height}
            container_styles="w-full lg:w-1/3 h-96 p-8"
            styles="w-full h-full object-cover" />
        </div>
        <article class="max-w-none prose">
            <div class="max-w-2xl mx-auto text-gray-800">{@html PrismicDOM.RichText.asHtml(fondatrices.data.description)}</div>
        </article>
    </div>
</section>
<section class="py-20">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FEF08A" fill-opacity="1" d="M0,0L48,26.7C96,53,192,107,288,154.7C384,203,480,245,576,229.3C672,213,768,139,864,106.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <div class="bg-tw-yellow-200">
        <div id="contact" class="container px-4 mx-auto">
            <div class="mx-auto text-center">
                <h2 class="mt-2 text-6xl font-black text-gray-800 pb-5">Contacter l'équipe</h2>
                <p class="max-w-md mx-auto text-gray-800">Vous souhaitez soutenir le Village aux Dames et contribuer à ce lieu d'échanges de savoir-faire ? Vous mobiliser autour d’enjeux sociétaux comme la discrimination, l'isolement social et le stress au quotidien ? Vous voulez rejoindre le projet du Village aux Dames en tant que résident·e, bénévole ou intervenant·e externe ou encore passer des vacances dans un écovillage en devenir ? Envoyez-nous un message pour qu'on en discute !</p>
            </div>
            <form name="contact" method="POST" data-netlify="true" action="/merci" class="max-w-lg mx-auto p-6 rounded-lg space-y-8 mt-8">
                <input type="hidden" name="form-name" value="contact" aria-hidden="true">
                <div class="flex flex-col space-y-2">
                    <label class="text-gray-700 font-medium text-sm" for="nom">Votre nom</label>
                    <input class="rounded-lg px-3 py-2" id="nom" type="text">
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="text-gray-700 font-medium text-sm" for="email">Votre adresse email</label>
                    <input class="rounded-lg px-3 py-2" id="email" type="email">
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="text-gray-700 font-medium text-sm" for="message">Votre message</label>
                    <textarea class="rounded-lg px-3 py-2" name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button class="w-full bg-bleu-dark hover:bg-bleu-primaire duration-300 rounded-lg py-2 text-gray-100 uppercase font-bold tracking-wide" type="submit">Envoyer</button>
            </form>
        </div>
    </div>
    <svg class="rotate-180 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FEF08A" fill-opacity="1" d="M0,0L48,26.7C96,53,192,107,288,154.7C384,203,480,245,576,229.3C672,213,768,139,864,106.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
</section>
{#each body as slice}
{#if slice.slice_type === "bandeau_de_soutien"}
    <BandeauSoutien {slice} />
{/if}
{/each}