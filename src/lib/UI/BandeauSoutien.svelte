<script>
    import PrismicDom from 'prismic-dom'
	import Image from '$lib/UI/Image.svelte'

    export let slice
</script>

<section class="container pb-20 md:pb-24">
	<div class="grid grid-cols-1 md:grid-cols-2 bg-bleu-dark rounded-lg">
		<div class="bg-gradient-to-b md:bg-gradient-to-tr from-bleu-primaire to-bleu-dark rounded-l-lg relative w-full h-80 md:h-full">
			<Image 
			src={slice.primary.image.url}
			mq_sizes="(min-width: 760px) 50vw, 100vw"
			alt={slice.primary.image.alt} 
			width={slice.primary.image.dimensions.width}
			height={slice.primary.image.dimensions.height}
			styles="rounded-l-lg h-full w-full absolute inset-0 object-cover mix-blend-overlay"/>
		</div>
		<div class="p-8 space-y-8">
			<h2 class="text-yellow-light text-4xl font-black">{PrismicDom.RichText.asText(slice.primary.titre_du_bandeau)}</h2>
			<div class="md:mx-auto text-yellow-light leading-7">{@html PrismicDom.RichText.asHtml(slice.primary.intro_du_bandeau)}</div>
			<a href={slice.primary.bouton_lien.url} class="block bg-yellow hover:bg-opacity-80 transition duration-500 text-gray-dark font-bold px-5 py-4 rounded-lg uppercase tracking-wide">{slice.primary.bouton_texte}</a>
		</div>
	</div>
</section>