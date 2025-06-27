<script lang="ts">
  let mobileMenu = false;
let showToolsDropdown = false;
let showResourcesDropdown = false;

	import DropellaDarkIcon from './icons/darko.svelte';
  import AdspyIcon from '$src/lib/components/icons/pages-icons/adspy.png';
  import SalesTrackerIcon from '$src/lib/components/icons/pages-icons/sales.png';
  import ProductDatabaseIcon from '$src/lib/components/icons/pages-icons/product.png';
  import CompetitorResearchIcon from '$src/lib/components/icons/pages-icons/competorresearch.png';
//   import type { UserProfile } from '$src/lib/types/user';
//   import BlogIcon from '$src/lib/components/icons/BlogIcon.svelte';
//   import GraphIcon from '$src/lib/components/icons/GraphIcon.svelte';
  import { goto } from '$app/navigation';


// 	interface Tool {
// 		name: string;
// 		description: string;
// 		icon: string;
// 		link: string;
// 	}

	
// 	const toolsList: Tool[] = [
// 		{
// 			name: 'Ads Spy',
// 			description: 'Gain insights into ads',
// 			icon: AdspyIcon,
// 			link: '/adspy'
// 		},

// 		{
// 			name: 'Sales Tracker',
// 			description: 'Monitor sales performance',
// 			icon: SalesTrackerIcon,
// 			link: '/sales-tracker'
// 		},
// 		{
// 			name: 'Product Database',
// 			description: 'Find winning products',
// 			icon: ProductDatabaseIcon,
// 			link: '/product-database'
// 		},
// 		{
// 			name: 'Competitor Research',
// 			description: 'Analyze competitor strategies',
// 			icon: CompetitorResearchIcon,
// 			link: '/competitor-research'
// 		}
// 	];


//   interface Resource {
// 		name: string;
// 		icon: ConstructorOfATypedSvelteComponent;
// 		link: string;
// 	}

	
// 	const resourceList: Resource[] = [
// 		{
// 			name: 'Blog',
// 			icon: BlogIcon,
// 			link: '/blogs'
// 		},
// 		{
// 			name: 'Community',
// 			icon: GraphIcon,
// 			link: '/community'
// 		}
// 		// {
// 		// 	name: 'Dropella School',
// 		// 	icon: GraphIcon,
// 		// 	link: '/school'
// 		// }
// 	];


</script>

<div>
<nav class="w-full absolute px-6 py-4 flex items-center justify-between bg-transparent text-white z-50">
  <!-- Logo -->
  <div class="flex items-center relative top-12 left-[74px]">
    <!-- <img src="/logo.svg" alt="Logo" class="h-6 w-auto" /> -->
    <DropellaDarkIcon />
  </div>

  <!-- Desktop Menu -->

<div class="hidden  lg:block  lg:absolute lg:top-[70px] lg:left-[285px] lg:w-[709.57px] lg:pl-[95px]">
  <ul class="flex font-[Readex Pro] justify-center items-center gap-x-[52px] font-medium border-2 h-12 border-white rounded-lg">
    <li class="relative group">
      <span class="cursor-pointer text-[16px]">Tools ▾</span>
      <!-- <ul class="absolute top-8 left-0 hidden group-hover:block bg-black rounded-md shadow-lg p-2 space-y-1 w-64 z-10">
        					{#each toolsList as tool}
						<li>
							<button
								on:click={() => {
									goto(tool.link);
								}}
								class="group menu-title hstack gap-2 transition-all duration-200 hover:bg-base-200 rounded-sm"
							>
								<div class="vstack min-w-14 w-8 h-full">
									<img src={tool.icon} alt="Icon for {tool.name} page" />
								</div>
								<div class="vstack gap-1 text-start">
									<p class="text-base-content">{tool.name}</p>
									<p class="font-normal">{tool.description}</p>
								</div>
							</button>
						</li>
					{/each}
      </ul> -->
    </li>
    <li class="relative group">
      <span class="cursor-pointer text-[16px]">Resources ▾</span>
      <!-- <ul class="absolute top-8 left-0 hidden group-hover:block bg-black rounded-md shadow-lg p-2 space-y-1 w-64 z-10">
        {#each resourceList as resource}
						<li>
							<button
								on:click={() => {
									goto(resource.link);
								}}
								class="group menu-title hstack gap-2 hover:bg-base-200 rounded-sm transition-all duration-200"
							>
								<div class="vstack w-6 h-full text-[#D8F474]">
									<svelte:component this={resource.icon} />
								</div>
								<div class="vstack gap-1 text-start">
									<p class="text-base-content group-hover:text-[#D8F474]">{resource.name}</p>
								</div>
							</button>
						</li>
					{/each}
      </ul> -->
    </li>
    <li><a href="/pricing" class="hover:text-lime-400 text-[16px]">Pricing</a></li>
    <li><a href="/about" class="hover:text-lime-400 text-[16px]">About</a></li>
    <li><a href="/support" class="hover:text-lime-400 text-[16px]">Support</a></li>
  </ul>
</div>


<!-- Right Buttons -->

<div class="hidden  lg:block md:absolute lg:absolute  md:top-[85px] md:left-[1121px] lg:top-[82px] lg:left-[1121px]  w-[43px] h-[18px]">
  <a href="#" class="font-[Graphik] font-medium text-[16px] leading-[100%] tracking-[0%]">
    Login
  </a>
</div>
<div class="hidden lg:block md:absolute lg:absolute md:top-[80px] md:left-[1194px] lg:top-[72px] lg:left-[1194px]">
  <button class="inline-flex font-[Graphik] items-center w-[154px] h-[45px] px-[15px] py-[10px] gap-[10px] rounded-[10px] bg-[#D8F474] text-black font-semibold text-[16px] leading-[100%]">
    Get Started →
  </button>
</div>



  <!-- Hamburger Icon -->
  <!-- <button class="lg:hidden xl:hidden" on:click={() => mobileMenu = !mobileMenu}>
    <svg class="relative top-12 right-6 w-8 h-8 sm:top-12 sm:right-10 sm:w-8 sm:h-8 md:top-12 md:right-16 md:w-10 md:h-10 " fill="none" stroke="currentColor" stroke-width="2"
         viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button> -->

  <!-- Mobile Menu -->
  <!-- {#if mobileMenu} -->
    <div class=" absolute top-16 left-0 w-full bg-black text-white px-6 py-8 sm:py-6 space-y-6 sm:space-y-8 md:space-y-8 z-40 lg:hidden xl:hidden">
      <button 
	 on:click={() => showToolsDropdown = !showToolsDropdown} 
	  class="block py-2 text-[16px] sm:text-[22px] md:text-[26px] ">Tools ▾</button>
	  <!-- {#if showToolsDropdown}
	   <div class="pl-4 mt-2 space-y-1">
        	{#each toolsList as tool}
						<p>
							<button
								on:click={() => {
									goto(tool.link);
								}}
								class="group menu-title hstack gap-2 transition-all duration-200 hover:bg-base-200 rounded-sm"
							>
								<div class="vstack min-w-14 w-8 h-full">
									<img src={tool.icon} alt="Icon for {tool.name} page" />
								</div>
								<div class="vstack gap-1 text-start">
									<p class="text-base-content">{tool.name}</p>
									<p class="font-normal">{tool.description}</p>
								</div>
							</button>
						</p>
					{/each}
					</div>
	  {/if} -->
	

      <button
	   on:click={() => showResourcesDropdown = !showResourcesDropdown} 
	  class="block py-2 text-[16px] sm:text-[22px] md:text-[26px]">Resources ▾</button>
       <!-- {#if showResourcesDropdown}
        <div class="pl-4 mt-2 space-y-1">
          {#each resourceList as resource}
						<p>
							<button
								on:click={() => {
									goto(resource.link);
								}}
								class="group menu-title hstack gap-2 hover:bg-base-200 rounded-sm transition-all duration-200"
							>
								<div class="vstack w-6 h-full text-[#D8F474]">
									<svelte:component this={resource.icon} />
								</div>
								<div class="vstack gap-1 text-start">
									<p class="text-base-content group-hover:text-[#D8F474]">{resource.name}</p>
								</div>
							</button>
						</p>
					{/each}
        </div>
      {/if} -->
	  
	 
	  <a href="/pricing" class="block py-2 text-[16px] sm:text-[22px] md:text-[26px]">Pricing</a>
      <a href="/about" class="block py-2 text-[16px] sm:text-[22px] md:text-[26px]">About</a>
      <a href="/support" class="block py-2 text-[16px] sm:text-[22px] md:text-[26px]">Support</a>
      <a href="/login" class="block py-2 text-[16px] sm:text-[22px] md:text-[26px]">Login</a>
      <a href="/get-started" class="block font-[Graphic] rounded-[10px] bg-[#D8F474] text-black text-center px-4 py-2 sm:py-4 text-[16px] sm:text-[22px] md:text-[26px]">Get Started →</a>
    </div>
  <!-- {/if} -->

</nav>
  <div class="flex justify-center w-[1300px] relative left-14">
  <div class="w-full h-0 border-b-[1px] border-white relative top-36"></div>
</div>

</div>
