<script>
    import '../app.postcss'
    import { onMount } from 'svelte'
    import Header from '$lib/Header.svelte'
    import Footer from '$lib/Footer.svelte'
    import FacebookSVG from '../../static/images/icon-library.svg#icon-facebook'
    import logoVAD from '../../static/images/logo-arbre-VAD-v2.svg'

	onMount(() => {
      import('https://unpkg.com/agnostic-axe@3').then(({ AxeObserver, logViolations }) => {
        const MyAxeObserver = new AxeObserver(logViolations)
        MyAxeObserver.observe(document)
      })
    })
</script>

<Header
logo={logoVAD}
altLogo="Village Aux Dames" />
<main class="bg-gray-bg min-h-screen relative z-10">
	<slot />
</main>
<Footer 
urlFb={FacebookSVG}/>
