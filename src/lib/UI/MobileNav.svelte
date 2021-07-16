<script>
    import Nav from './Nav.svelte'
	import { fly } from 'svelte/transition'
</script>

<style style lang="postcss">
	aside {
		transition: left 0.3s ease-in-out
	}
</style>

<aside 
transition:fly={{delay: 250, duration: 800, x: -100}} 
class="md:hidden z-40 fixed inset-0 transition-transform overflow-y-auto bg-gray-dark">
<div class="mt-20 ml-12">
    <Nav 
    direction="flex-col"
    color="text-bleu-primaire hover:text-gray-bg hover:border-gray-bg"
    position="top-10 right-0"
    on:clickMobileItem />
</div>
</aside>