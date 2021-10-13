<script>
    export let href
</script>

<style>
:global(.btn-plus) {
	--bg-yellow: #DFAF2C;
	--border-radius: 17.5px;
    display: block;
	position: relative;
	margin: auto;
	padding: 15px 25px 15px 12px;
	transition: all .5s ease;
	height: var(--height);
}

:global(.btn-plus::before) {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	border-radius: var(--border-radius);
	background: var(--bg-yellow);
	width: 100%;
	height: 100%;
	clip-path: circle(20% at 5% 18%);
	transition: all .8s ease;
}

:global(.btn-plus:hover::before) {
	clip-path: circle(75%);
}

:global(.btn-plus span) {
	position: relative;
	font-size: 15px;
	line-height: 18px;
	font-weight: 800;
	letter-spacing: .15em;
	text-transform: uppercase;
}
</style>

<div class="mt-8 mb-3 self-start cursor-pointer">
    <a sveltekit:prefetch {href} class="btn-plus">
        <span>En savoir plus</span>
    </a>
</div>