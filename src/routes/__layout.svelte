<script>
  import '../app.postcss'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import FacebookSVG from '../../static/images/icon-library.svg#icon-facebook'
  import logoVAD from '../../static/images/logo-arbre-VAD-v2.svg'
</script>

<Header
logo={logoVAD}
altLogo="Village Aux Dames" />
<main class="bg-gray-bg relative z-10">
	<slot />
</main>
<Footer 
urlFb={FacebookSVG}/>
