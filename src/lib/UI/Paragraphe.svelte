<script>
    import PrismicDom from 'prismic-dom'
    export let titre, intro
</script>

<div class="pb-8">
    <h3 class="font-bold pb-1 text-lg">{PrismicDom.RichText.asText(titre)}</h3>
    <div class="leading-loose">{@html PrismicDom.RichText.asHtml(intro)}</div>
</div>