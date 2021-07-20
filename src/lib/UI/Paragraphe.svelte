<script>
    import PrismicDom from 'prismic-dom'
    export let titre, intro
</script>

<div class="pb-8 w-full md:w-1/2 lg:w-full">
    <h3 class="font-bold pb-1 text-lg">{PrismicDom.RichText.asText(titre)}</h3>
    <div class="leading-loose">{@html PrismicDom.RichText.asHtml(intro)}</div>
</div>