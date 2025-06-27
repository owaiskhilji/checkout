<!-- <script>

</script> -->


<div class="flex items-center justify-center bg-[#3C3C3C] z-50 overflow-hidden py-10 px-4">
  <div
    class="relative w-full max-w-[1008px] h-auto xl:h-[840px] 
    bg-gradient-to-l from-transparent to-[#E5E5E5]/20
    backdrop-blur-md text-white rounded-[50px] p-6 shadow-xl border border-white/20"
  >
    <!-- Close Button -->
    <button class="w-[45px] h-[115px] absolute top-4 right-12 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[87px] xl:text-[87px] font-[600px] text-white hover:text-red-500">&times;</button>

    <!-- Icon + Heading -->
    <div class="flex flex-col xl:flex-row items-center xl:items-start gap-6 m-6">
      <div class="w-[120px] h-[120px] xl:w-[159.2px] xl:h-[159.2px] rounded-full bg-lime-400 flex items-center justify-center">
        <img src="/your-icon.png" alt="Icon" class="w-20 h-20 xl:w-24 xl:h-24" />
      </div>

      <div class="text-center xl:text-left xl:ml-6 relative lg:top-4 xl:lg:top-12">
        <h2
          class="font-readex font-medium text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60.14px] leading-[110%] capitalize"
        >
          Your Title Text
        </h2>
      </div>
    </div>

    <!-- Form Fields -->
    <form class="space-y-4 px-4 xl:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 lg:gap-y-2 gap-x-6 lg:mt-12 xl:mt-16">
        <!-- Field -->
        <div>
          <label for="product" class="block text-[20px] md:text-[28px] xl:text-[32px] font-[500px] text-white/50 mb-2 font-[inter]">Product Name :</label>
          <input type="text" id="product"
            class="font-[inter] w-full h-[80px] xl:h-[110px] rounded-[20px] bg-[#6D6868] border border-transparent focus:border-[#D8F474] focus:outline-none px-4 text-white" />
        </div>

        <!-- Field -->
        <div>
          <label for="des" class="block text-[20px] md:text-[28px] xl:text-[32px] font-[500px] text-white/50 mb-2 font-[inter]">Description :</label>
          <input type="text" id="des"
            class="w-full h-[80px] xl:h-[110px] rounded-[20px] bg-[#6D6868] border border-transparent focus:border-[#D8F474] focus:outline-none px-4 text-white" />
        </div>

        <!-- Field -->
        <div>
          <label for="key" class="block text-[20px] md:text-[28px] xl:text-[32px] font-[500px] text-white/50 mb-2 font-[inter]">Key Features :</label>
          <input type="text" id="key"
            class="w-full h-[80px] xl:h-[110px] rounded-[20px] bg-[#6D6868] border border-transparent focus:border-[#D8F474] focus:outline-none px-4 text-white" />
        </div>

        <!-- Field -->
        <div>
          <label for="target" class="block text-[20px] md:text-[28px] xl:text-[32px] font-[500px] text-white/50 mb-2 font-[inter]">Target Audience :</label>
          <input type="text" id="target"
            class="w-full h-[80px] xl:h-[110px] rounded-[20px] bg-[#6D6868] border border-transparent focus:border-[#D8F474] focus:outline-none px-4 text-white" />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center relative lg:top-2 xl:top-12">
        <button
          type="submit"
          class="w-[200px] xl:w-[278.17px] h-[70px] xl:h-[93.25px] bg-[#D8F474] rounded-[21.42px] text-black font-readex font-semibold text-[24px] xl:text-[34.28px] leading-[100%] shadow px-6 py-3"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
