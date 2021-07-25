<script>
    import { fade } from 'svelte/transition'
    import { getContext } from 'svelte'
    import PrismicDom from 'prismic-dom'
    import Image from '$lib/UI/Image.svelte'

    export let events

    const months = getContext('all_months')

    const format_month_name = nb => {
        const selected_month = months.filter(month => month.nb === nb.toString())[0]
        return selected_month.month
    }

    const format_date_calendrier = (debut, fin) => {
        const jour_debut = debut.split(/[-]/)[2]
        const jour_fin = fin.split(/[-]/)[2]
        const mois_debut = format_month_name(debut.split(/[-]/)[1])
        const mois_fin = format_month_name(fin.split(/[-]/)[1])

        if(mois_debut === mois_fin) return `Du ${jour_debut} au ${jour_fin} ${mois_fin}`
        else return `Du ${jour_debut} ${mois_debut} au ${jour_fin} ${mois_fin}`
    }
</script>

<article transition:fade class="pb-20 w-full">
    <div class="w-full bg-gray-200 h-[2px]"></div>
    {#if events.length}
    <div class="divide-y-2">
        {#each events[0] as event}
        <div class="sm:grid sm:grid-cols-6 sm:gap-6">
            <div class="flex flex-row justify-center items-center sm:flex-col text-yellow space-x-4 sm:space-x-0 sm:space-y-4 text-center py-2">
                <p class="font-black text-3xl">{event.data.date_debut.split(/[-]/)[2]}</p>
                <p class="text-2xl tracking-widest">{format_month_name(event.data.date_debut.split(/[-]/)[1])}</p>
            </div>
            <Image 
                src={event.data.image_principale.url} 
                mq_sizes="(min-width: 760px) 10vw, 100vw"
                alt={event.data.image_principale.alt}
                width={event.data.image_principale.dimensions.width}
                height={event.data.image_principale.dimensions.height}
                container_styles="w-full h-32"
                styles="w-full h-full object-cover"/>
            <div class="col-span-3 py-2 flex flex-col justify-between">
                <p class="text-bleu-dark font-semibold text-sm">#{event.data.categorie}</p>
                <h2 class="text-lg font-black tracking-wide text-gray-800">{PrismicDom.RichText.asText(event.data.titre)}</h2>
                <p class="text-gray-500 text-sm">{format_date_calendrier(event.data.date_debut, event.data.date_fin)}</p>
            </div>
            <div class="bg-bleu-dark hover:shadow-lg duration-300 flex justify-center items-center py-2 sm:py-0">
                <a sveltekit:prefetch href="/{event.data.page}/{event.uid}">
                    <svg class="w-6 h-6 text-gray-100 cursor-pointer hover:scale-150 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
        </div>
        {/each}
    </div>
    {:else}
    <p>Il n'y a pas encore d'événement prévu à cette date.</p>
    {/if}
</article>
