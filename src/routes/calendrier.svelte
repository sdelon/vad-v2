<script context="module">
    export async function load({ fetch }) {
        const { all_events } = await fetch('/api/all-events').then(res => res.json())

        return {
            props: {
                all_events
            }
        }
    }
</script>

<script>
    import Breadcrumb from '$lib/UI/Breadcrumb.svelte'

    export let all_events
</script>

<Breadcrumb />
<section class="container pt-8 pb-20">
    <h2 class="text-gray-dark uppercase text-4xl font-black tracking-tight pb-4 md:text-center">Calendrier</h2>
    <div class="w-32 h-2 bg-gray-dark mx-auto mb-8"></div>
    <p class="max-w-lg mx-auto text-gray-700 text-center">Nous avons actuellement <span class="font-bold text-bleu-dark">{all_events.length} événements</span> organisés et qui n'attendent que vous !</p>
</section>