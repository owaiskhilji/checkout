<script>
	import '../app.css';

	let { children } = $props();
</script>


<svelte:head>
  <script async src="https://cdn.promotekit.com/promotekit.js" data-promotekit="56e1b243-e4f1-416d-a752-9c9552d337f4"></script>
</svelte:head>




{@render children()}
