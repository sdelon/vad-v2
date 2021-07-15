<script>
    import { getContext, createEventDispatcher } from 'svelte'
    import Tag from './Tag.svelte'

    let resetIsClicked
    let tags = getContext('tagsContext')
    const dispatch = createEventDispatcher()

    const handleClickTag = tag => {
        resetIsClicked = false
        dispatch('filterByTag', tag)
    }

    const resetAllTags = () => {
        dispatch('reset')
        resetIsClicked = true
    }
</script>

<ul class="flex items-center flex-wrap gap-4 py-8">
    <li>
        <button on:click={resetAllTags} class="uppercase bg-gray-dark hover:bg-gray-700 hover:shadow transition duration-300 text-yellow-light px-3 py-2 rounded-full font-bold text-sm tracking-wide whitespace-nowrap cursor-pointer">Tous les ateliers</button>
    </li>
    {#each tags as tag}
        <Tag {resetIsClicked} {tag} on:clickedTag={() => handleClickTag(tag)}/>
    {/each}
</ul>
