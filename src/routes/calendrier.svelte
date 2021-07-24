<script context="module">
    export async function load({ fetch }) {
        const { sorted_events, nb_of_events } = await fetch('/api/calendrier').then(res => res.json())

        return {
            props: {
                sorted_events,
                nb_of_events
            }
        }
    }
</script>

<script>
    import Breadcrumb from '$lib/UI/Breadcrumb.svelte'

    export let sorted_events, nb_of_events
    let idx = 0
    let all_months = [
        {month: 'Janvier', nb: 1, is_active: false},
        {month: 'Février', nb: 2, is_active: false},
        {month: 'Mars', nb: 3, is_active: false},
        {month: 'Avril', nb: 4, is_active: false},
        {month: 'Mai', nb: 5, is_active: false},
        {month: 'Juin', nb: 6, is_active: false},
        {month: 'Juillet', nb: 7, is_active: false},
        {month: 'Août', nb: 8, is_active: false},
        {month: 'Septembre', nb: 9, is_active: false},
        {month: 'Octobre', nb: 10, is_active: false},
        {month: 'Novembre', nb: 11, is_active: false},
        {month: 'Décembre', nb: 12, is_active: false}
    ]

    const length_of_array = sorted_events.map(years => Object.keys(years).length)

    const get_nb_events_per_month = (year, month, idx) => {
        const events_in_selected_year = Object.values(year)[idx]
        const formatted_month = month.toString().length === 1 ? `0${month}` : `${month}`

        const length = Object.entries(events_in_selected_year).map(event => {
            if(event[0] === formatted_month) return event[1].length
        }).filter(value => value !== undefined)

        return length.length ? length : 0   
    }

    const prev_year = () => {
        if(idx > 0) {
            idx = (idx - 1) % length_of_array
        }
    }
    const next_year = () => idx = (idx + 1) % length_of_array
</script>

<Breadcrumb />
<div class="container py-8">
    <h2 class="text-gray-dark uppercase text-4xl font-black tracking-tight pb-4 text-center">Calendrier</h2>
    <div class="w-32 h-2 bg-gray-dark mx-auto mb-8"></div>
    <p class="max-w-lg mx-auto text-gray-700 text-center">Nous avons actuellement <span class="font-bold text-bleu-dark">{nb_of_events} événements</span> organisés et qui n'attendent que vous !</p>
</div>
<div class="container pb-20 flex space-x-3 md:space-x-8">
    <aside class="w-32">
        {#each sorted_events as year}
        <div class="w-full flex justify-between items-center pb-8">
            <svg on:click={prev_year} class="w-6 h-6 text-gray-dark cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <p>{Object.keys(year)[idx]}</p>
            <svg on:click={next_year} class="w-6 h-6 text-gray-dark cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </div>
        <div class="space-y-2">
            {#each all_months as month}
            <button 
            class:text-gray-800={month.is_active} 
            class:font-bold={month.is_active} 
            on:click={() => month.is_active = !month.is_active} 
            class="block text-left text-gray-500">
            {month.month} ({get_nb_events_per_month(year, month.nb, idx)})
            </button>
            {/each}
        </div>
        {/each}
    </aside>
    <section class="w-3/4">
        
    </section>
</div>