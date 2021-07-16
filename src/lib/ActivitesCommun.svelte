<script>
  import PrismicDom from 'prismic-dom'
  export let body
</script>

<section class="pb-20">
  <div class="py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center -mx-4">
        {#each body as slice}
        {#if slice.slice_type === 'argumentaire'}
        <div class="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
          <div class="max-w-md">
            <h2 class="mb-3 text-4xl font-bold font-heading">{PrismicDom.RichText.asText(slice.primary.titre)}</h2>
            <p class="mb-6 max-w-sm text-gray-600 prose">{@html PrismicDom.RichText.asHtml(slice.primary.intro)}</p>
            <ul>
              {#each slice.items as item}
              <li class="mb-2 flex items-center space-x-2">
                <svg class="flex-none w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>{@html PrismicDom.RichText.asHtml(item.argument)}</span>
              </li>
              {/each}
            </ul>
          </div>
        </div>
        {:else if slice.slice_type === 'gallerie'}
        <div class="w-full lg:w-1/2">
          <div class="mb-4 flex flex-wrap items-end">
            <div class="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
              <img class="w-full h-32 lg:h-48 object-cover rounded" src={slice.items[0].illu.url} alt={slice.items[0].illu.alt}>
            </div>
            <div class="w-full lg:w-1/3 px-3">
              <img class="w-full h-32 object-cover rounded" src={slice.items[1].illu.url} alt={slice.items[1].illu.alt}>
            </div>
          </div>
          <div class="flex flex-wrap items-start">
            <div class="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
              <img class="w-full h-32 object-cover rounded" src={slice.items[2].illu.url} alt={slice.items[2].illu.alt}>
            </div>
            <div class="w-full lg:w-2/3 px-3">
              <img class="w-full h-32 lg:h-48 object-cover rounded" src={slice.items[3].illu.url} alt={slice.items[3].illu.alt}>
            </div>
          </div>
        </div>
        {/if}
        {/each}
      </div>
    </div>
  </div>
</section>
