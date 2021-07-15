<script>
    import PrismicDom from 'prismic-dom'
    import slugify from 'slugify'

    export let slice, order
</script>

<div id={slugify(slice.primary.titre_activite[0].text)} class="flex flex-col lg:flex-row justify-between">
    <img class="{order} w-full lg:w-60 h-60 object-cover rounded-lg pb-6 lg:pb-0" src={slice.primary.image.url} alt={slice.primary.image.alt}>
    <div class="{order === "lg:order-first" ? "lg:text-right lg:ml-20" : "text-left lg:mr-20"}">
        <h2 class="text-2xl font-black text-bleu-dark pb-2">{PrismicDom.RichText.asText(slice.primary.titre_activite)}</h2>
        <div class="text-gray-dark leading-6 font-light">{@html PrismicDom.RichText.asHtml(slice.primary.texte_activite)}</div>
    </div>
</div>