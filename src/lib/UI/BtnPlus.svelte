<script>
    export let href
</script>

<div class="w-full mt-8 mb-3 self-start">
    <a sveltekit:prefetch {href} class="btn-plus flex items-center">
        <span>En savoir plus</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
    </a>
</div>