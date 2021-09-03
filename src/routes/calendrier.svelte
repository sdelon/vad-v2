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
    import { setContext } from 'svelte'
    import Breadcrumb from '$lib/UI/Breadcrumb.svelte'
    import EventCalendar from '$lib/UI/EventCalendar.svelte'
    import calendar_illu from '/static/images/calendar-illu.png'

    export let sorted_events, nb_of_events
    let idx = 0
    const all_months = [
        {month: 'Janvier', nb: '01', is_active: false},
        {month: 'Février', nb: '02', is_active: false},
        {month: 'Mars', nb: '03', is_active: false},
        {month: 'Avril', nb: '04', is_active: false},
        {month: 'Mai', nb: '05', is_active: false},
        {month: 'Juin', nb: '06', is_active: false},
        {month: 'Juillet', nb: '07', is_active: false},
        {month: 'Août', nb: '08', is_active: false},
        {month: 'Septembre', nb: '09', is_active: false},
        {month: 'Octobre', nb: '10', is_active: false},
        {month: 'Novembre', nb: '11', is_active: false},
        {month: 'Décembre', nb: '12', is_active: false}
    ]

    setContext('all_months', all_months)

    $: is_calendar_empty = all_months.filter(month => month.is_active)
    const length_of_array = sorted_events.map(years => Object.keys(years).length)

    const get_month_data = (year, month, is_length = false) => {
        return Object.entries(year).map(event => {
            if(event[0] === month) return is_length ? event[1].length : event[1]
        }).filter(value => value !== undefined)
    } 

    const get_events_per_month = (year, month) => get_month_data(year, month)

    const get_nb_events_per_month = (year, month, idx) => {
        const events_in_selected_year = Object.values(year)[idx]
        const length = get_month_data(events_in_selected_year, month, true)

        return length.length ? length : 0   
    }

    const prev_year = () => {
        if(idx > 0) idx = (idx - 1) % length_of_array
    }

    const next_year = () => idx = (idx + 1) % length_of_array
</script>

<Breadcrumb />
<div class="container pt-8">
    <h2 class="text-gray-dark uppercase text-4xl font-black tracking-tight pb-4 text-center">Calendrier</h2>
    <div class="w-32 h-2 bg-gray-dark mx-auto mb-8"></div>
    <p class="max-w-lg mx-auto text-gray-700 text-center">Nous avons actuellement <span class="font-bold text-bleu-dark">{nb_of_events} événements</span> qui n'attendent que vous !</p>
</div>
<div class="container pb-20 flex space-x-3 md:space-x-10">
    {#each sorted_events as year}
    <aside class="w-32">
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
    </aside>
    <section class="w-3/4">
        {#if is_calendar_empty.length < 1}
            <p class="mx-auto text-gray-700 text-lg font-medium max-w-lg text-center">Pour connaître tous les événements organisés au Village Aux Dames par mois, sélectionnez un mois en particulier.</p>
            <img class="w-auto h-auto mx-auto" src={calendar_illu} alt="">
        {:else}
            {#each all_months as month (month.nb)}
            {#if month.is_active}
            <p class="text-3xl sm:text-7xl text-gray-dark font-light pb-8">{month.month} <span class="font-thin sm:text-5xl">{Object.keys(year)[idx]}</span></p>
            <EventCalendar events={get_events_per_month(Object.values(year)[idx], month.nb)}/>
            {/if}
            {/each}
        {/if}
    </section>
    {/each}
</div>