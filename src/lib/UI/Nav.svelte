<script>
    import { page } from '$app/stores'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    export let direction, color
</script>

<style style lang="postcss">
    .active {
        @apply border-bleu-primaire border-b-2 border-solid;
    }
</style>

<nav>
    <ul class="lg:max-w-screen-lg mx-auto flex {direction} list-reset text-sm md:space-x-2 lg:space-x-16">
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="uppercase {color} hover:text-gray-dark hover:border-b-2 hover:border-solid transition-colors duration-300" href="/" class:active={$page.path === '/'}>Accueil</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="uppercase {color} hover:text-gray-dark hover:border-b-2 hover:border-bleu-primaire hover:border-solid transition-colors duration-300" href="/projet" class:active={$page.path === '/projet'}>Le projet</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="uppercase {color} hover:text-gray-dark hover:border-b-2 hover:border-bleu-primaire hover:border-solid transition-colors duration-300" href="/activites" class:active={$page.path === '/activites'}>Activités</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="uppercase {color} hover:text-gray-dark hover:border-b-2 hover:border-bleu-primaire hover:border-solid transition-colors duration-300" href="/ateliers" class:active={$page.path === '/ateliers'}>Ateliers</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="uppercase {color} hover:text-gray-dark hover:border-b-2 hover:border-bleu-primaire hover:border-solid transition-colors duration-300" href="/agenda" class:active={$page.path === '/agenda'}>Agenda</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="uppercase {color} hover:text-gray-dark hover:border-b-2 hover:border-bleu-primaire hover:border-solid transition-colors duration-300" href="/fondatrices" class:active={$page.path === '/fondatrices'}>Fondatrices</a>
        </li>
    </ul>
</nav>