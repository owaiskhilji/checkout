<script lang="ts">
  let loading = false;

  async function handleCheckout() {
    loading = true;

    const referralId = window.promotekit_referral || null;
console.log('Referral ID:', referralId);
console.log('window.promotekit_referral',window.promotekit_referral);
    try {

 await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referral: referralId })
      });

      const data = await res.json();
      console.log('Response from server:', data);

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Fetching error.');
        loading = false;
      }

    } catch (error) {
      console.error('Error fetching referral ID:', error);
      loading = false;
      return;
    }
  }
</script> 

<svelte:head>
  <script async src="https://cdn.promotekit.com/promotekit.js" data-promotekit="56e1b243-e4f1-416d-a752-9c9552d337f4"></script>
</svelte:head>



<div class="text-center my-8">
  <h1 class="text-3xl font-bold mb-4">Subscribe</h1>
  
<button on:click={handleCheckout} disabled={loading} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50">
  {loading ? 'Redirecting...' : 'Subscribe Now'}
</button>

</div>