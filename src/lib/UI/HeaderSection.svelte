<script>
    import PrismicDom from 'prismic-dom'
    export let titre, text, styles, borderBgColor, h1 = false
</script>

{#if h1}
<h1 class="{styles} text-5xl md:text-6xl font-bold pb-4 md:text-center">{PrismicDom.RichText.asText(titre)}</h1>
{:else}
<h2 class="{styles} uppercase text-4xl font-black tracking-tight pb-4 md:text-center">{PrismicDom.RichText.asText(titre)}</h2>
<div class="w-32 h-2 {borderBgColor} mx-auto mb-8"></div>
{/if}
{#if text !== null}
<div class="md:text-center md:mx-auto text-gray-600 pb-5 md:pb-8 md:w-2/3">{@html PrismicDom.RichText.asHtml(text)}</div>
{/if}