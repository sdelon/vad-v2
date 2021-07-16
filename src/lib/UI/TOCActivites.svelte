<script>
    import slugify from 'slugify'
    export let activitesIsOpen
    let el_is_hovered = false

    const showItem = e => {
        e.isOpen = !e.isOpen
        el_is_hovered = e.isOpen
    }
</script>

<div class="md:hidden sticky top-0 -ml-5">
    <ul class="flex justify-between flex-col sticky top-0 md:space-y-5 self-start">
        {#each activitesIsOpen as slice}
        {#if slice.slice_type === 'activite'}
            <li class="pb-1 md:pb-4 hover:font-medium flex items-center space-x-3 {el_is_hovered ? 'bg-gray-bg p-1 rounded shadow' : ''}">	
                <svg 
                on:click={() => showItem(slice)} 
                class="w-6 h-6 text-gray-800 hover:w-10 duration-150 cursor-pointer" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
                {#if el_is_hovered}
                <a class="whitespace-nowrap md:whitespace-normal text-gray-dark" href="./activites#{slugify(slice.primary.titre_activite[0].text)}">{slice.primary.titre_activite[0].text}</a>
                {/if}
            </li>
        {/if}
        {/each}
    </ul>
</div>
<div class="hidden md:block md:w-full md:col-span-2 p-3 sticky top-0 bg-bleu-light text-sm font-light rounded shadow-lg">
    <ul class="flex justify-between flex-col sticky top-0 md:space-y-5 self-start">
        {#each activitesIsOpen as slice}
        {#if slice.slice_type === 'activite'}
            <li class="pb-1 md:pb-4 hover:font-medium">			
                <a class="whitespace-nowrap md:whitespace-normal text-gray-dark" href="./activites#{slugify(slice.primary.titre_activite[0].text)}">{slice.primary.titre_activite[0].text}</a>
            </li>
        {/if}
        {/each}
    </ul>
</div>