<script lang="ts">
  import { onMount } from 'svelte';
  import { emailStore } from '../../store/emailStore';

  let buttonLabels: string[] = ["Copy", "View", "Send"];

  let emailsData: { subject: string; body: string; buttonLabel: string }[] = [];

  $: emailsData = $emailStore.map((email, i) => {
    let subject = "No Subject";
    let body = email;

    if (email.includes("Subject:")) {
      const lines = email.split('\n');
      // Filter out empty lines
      const subjectLine = lines.find(line => line.startsWith("Subject:"));
      subject = subjectLine ? subjectLine.replace("Subject:", "").trim() : "No Subject";
      body = lines.filter(line => !line.startsWith("Subject:")).join('\n').trim();
    } else {
      const lines = email.split('\n').filter(line => line.trim() !== '');
      subject = lines[0] || "No Subject";
      body = lines.slice(1).join('\n').trim();
    }

   // Ensure the subject is not empty
    if (!subject) {
      subject = "No Subject";
    }
    return {
      subject,
      body,
      buttonLabel: buttonLabels[i] || "No Action"
    };
  })

  onMount(() => {
    const Emails: any = localStorage.getItem('emails');
    const storedEmails: string[] = Emails ? JSON.parse(Emails) : [];
    emailStore.set(storedEmails);
  });
</script>



<div class="min-h-screen w-full bg-radial-[at_50%_50%] from-[#7f8f4a] to-[#080904] to-40% flex items-center justify-center py-24 mt-8">
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Card 01  -->
  {#each emailsData as item, i}
  <div class="bg-gradient-to-b from-[#0b0b0b] to-[#3a3f1c] text-white p-6 rounded-xl shadow-lg w-72 lg:w-80 flex flex-col h-[450px]">
    <h2 class="font-sans text-2xl font-bold">
      {item.subject}

    </h2>
    <!-- <p class="text-lime-400 font-semibold text-lg mt-1">$12.50/m</p> -->

    <p class="mt-8 text-sm max-length-500">
      {item.body.length > 400 ? item.body.slice(0, 400) + '......' : item.body}
    </p>

    <div class="mt-auto">
      <button class="bg-lime-300 font-semibold text-black px-4 py-2 rounded-md w-full mt-2">
        {item.buttonLabel}
      </button>
    </div>
  </div>
{/each}

<!-- <div>
<span class="text-lime-300 text-lg font-semibold ">
  Do you want to generate more emails?
</span>
  <a 
class="mx-auto text-white text-lg font-semibold underline "
href="/">
Home
</a>
</div> -->
</div>

</div>
