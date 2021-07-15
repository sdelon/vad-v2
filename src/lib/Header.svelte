<script>
    import Nav from '$lib/UI/Nav.svelte'

    export let logo, altLogo
</script>

<header id="header" class="bg-gray-bg md:pb-16 relative">
    <div class="flex flex-col justify-center items-center max-w-screen-lg xl:max-w-screen-xl mx-auto md:px-6 md:py-3 relative z-20">
        <div class="flex items-center mb-4">
            <a href="/">
                <img width="117" height="150" class="w-24 h-24 lg:w-24 lg:h-auto" src={logo} alt={altLogo}>
            </a>
        </div>
        <div class="hidden md:block w-full">
            <Nav
            direction="flex-row justify-between items-center"
            color="text-gray-dark" />
        </div>
    </div>
</header>