<script>
    export let currentEvents, nbOfPostsToLoad
</script>

<div class="mx-auto my-12 flex justify-center">
    <button 
    on:click={() => currentEvents = currentEvents + nbOfPostsToLoad}
    class="bg-yellow hover:bg-yellow-light px-8 py-3 rounded-lg text-gray-dark uppercase text-lg font-bold tracking-wide mx-auto">Plus d'ateliers</button>
</div>