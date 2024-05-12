<script setup>

</script>

<template>
    <ul class="relative flex flex-row gap-x-2">
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#9A348E] 100 font-medium text-white rounded-full group-focus:bg-gray-200 ">
          <span>1</span>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-80">
          Choose Tags
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600"></div>
    </li>

    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#9A348E] 100 font-medium text-white rounded-full group-focus:bg-gray-200">
          <span>2</span>
        </span>
        <span class="ms-2 text-sm font-medium text-white dark:text-neutral-200">
          Amount Of People
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
    </li>

    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#9A348E] 100 font-medium text-white rounded-full group-focus:bg-gray-200 ">
          <span>3</span>
        </span>
        <span class="ms-2 text-sm font-medium text-white dark:text-neutral-200">
          Final Result
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
    </li>
  </ul>
</template>