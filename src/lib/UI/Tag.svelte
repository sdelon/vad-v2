<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    export let isSelected, tag, resetIsClicked = false
</script>

<style>
    .selected {
        @apply bg-bleu-light;
    }

    label > input[type="checkbox"] {
        display: none;
    }
</style>

<li>
    <label class:selected={isSelected && resetIsClicked === false} class="bg-yellow uppercase hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300 text-gray-800 px-3 py-2 rounded-full font-bold text-sm tracking-wide cursor-pointer">
        <input type="checkbox" bind:checked={isSelected} on:change={() => dispatch('clickedTag', tag)}>
        <span>{tag}</span>
    </label>
</li>