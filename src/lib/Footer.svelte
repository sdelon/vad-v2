<script>
    import MobileNav from './UI/MobileNav.svelte'

    export let urlFb
    let isMobileNav = false, windowSize
</script>

<svelte:window bind:innerWidth={windowSize}/>
<div class="fixed md:hidden bottom-0 w-full h-16 bg-gray-dark flex justify-center items-center space-x-4 text-gray-100 z-50">
    <p>Menu</p>
    {#if isMobileNav}
        <svg on:click={() => isMobileNav = !isMobileNav} class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    {:else}
        <svg on:click={() => isMobileNav = !isMobileNav} class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    {/if}
</div>
<footer class="bg-gray-bg">
    <section class="lg:max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-8 border-b-2 border-gray-300 border-solid text-gray-dark px-5 xl:px-0">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-12 col-span-2">
            <div class="space-y-3">
                <h2 class="font-medium">Projet Associatif</h2>
                <ul class="flex flex-col space-y-2 justify-between font-light">
                    <li><a sveltekit:prefetch href="/">Histoire du V.A.D.</a></li>
                    <li><a sveltekit:prefetch href="/">Concept</a></li>
                    <li><a sveltekit:prefetch href="/">Fondatrices</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h2 class="font-medium">Ateliers</h2>
                <ul class="flex flex-col space-y-2 justify-between font-light">
                    <li><a sveltekit:prefetch href="/">Formations</a></li>
                    <li><a sveltekit:prefetch href="/">Stages</a></li>
                    <li><a sveltekit:prefetch href="/">Woofing</a></li>
                    <li><a sveltekit:prefetch href="/">Calendrier</a></li>
                    <li><a sveltekit:prefetch href="/">Expérimentation</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h2 class="font-medium">Activités</h2>
                <ul class="flex flex-col space-y-2 justify-between font-light">
                    <li><a sveltekit:prefetch href="/">Ferme pédagogique</a></li>
                    <li><a sveltekit:prefetch href="/">Epicerie solidaire</a></li>
                    <li><a sveltekit:prefetch href="/">Ecotourisme</a></li>
                    <li><a sveltekit:prefetch href="/">Coworking</a></li>
                    <li><a sveltekit:prefetch href="/">Hébergement</a></li>
                </ul>
            </div>
        </div>
        <div class="lg:text-right">
            <h2 class="text-gray-dark font-bold">Contactez le Village aux Dames</h2>
            <p class="font-light text-gray-600 py-3">Vous souhaitez contacter le VAD pour Efficiently administrate user friendly platforms via market positioning solutions. Efficiently innovate wireless networks for world-class e-services. Energistically.</p>
            <button class="bg-bleu-primaire hover:bg-bleu-light transition duration-500 font-medium uppercase tracking-wide text-sm text-gray-dark px-5 py-3 rounded-lg">Nous contacter</button>
        </div>
    </section>
    <div class="lg:max-w-screen-lg mx-auto md:flex justify-between items-center py-8 px-5 lg:px-0">
        <p class="font-sans font-thin text-sm pb-4 md:pb-0"><span>© 2021 Village Aux Dames</span> - Design et conception: <a href="https://sdelon.com/">sdelon </a>| <a class="font-light" href="/mentions-legales">Mentions légales</a> | <a class="font-light" href="mailto:xxx@gmail.com">Contact</a></p>
        <a href="https://www.facebook.com/thelezteam" aria-label="Facebook du Village Aux Dames">
            <svg title="lien Facebook pour la page Village Aux Dames" class="text-gray-dark hover:text-gray-300 cursor-pointer" fill="currentColor" role="img" width="18" height="18">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href={urlFb}></use>
            </svg>
        </a>
    </div>
</footer>


{#if isMobileNav}
<MobileNav
on:clickMobileItem={() => isMobileNav = !isMobileNav } />
{/if}