<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  let prompt = '';
  const dispatch = createEventDispatcher();

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (prompt.trim().length === 0) return;
    dispatch('generate', prompt);
  }
</script>

<form on:submit={handleSubmit} class="w-full max-w-xl">
  <input bind:value={prompt} placeholder="Enter a topic or keyword..." class="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring" />
  <button type="submit" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Generate Idea</button>
</form>