<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
</script>

<aside  
class="fixed bottom-20 md:bottom-5 right-3 md:right-5 z-30">
    <div class="flex items-center space-x-3"
    on:click={() => dispatch('open_calendar')}>
        <div class="bg-bleu-dark rounded-full w-14 sm:w-36 h-14 flex justify-center sm:justify-start sm:space-x-2 items-center transition duration-500 ease-in-out cursor-pointer shadow-lg">
            <div class="flex justify-center items-center w-9 h-9 rounded-full border-2 border-solid border-gray-100 hover:border-gray-200 duration-500 shadow-xl cursor-pointer mx-1">
                <svg class="w-5 h-5 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <p class="hidden sm:block text-gray-100">Calendrier</p>
        </div>
    </div>
</aside>
