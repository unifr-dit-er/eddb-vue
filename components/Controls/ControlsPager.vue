<script setup lang="ts">
import type { PageInfo } from "@/types/pageInfo"

const props = defineProps<{
  pageInfo: PageInfo | null
}>()

const { api } = useRuntimeConfig().public
const page = usePage()

const { data: total } = await useFetch<number>(`/api/${api.provider}/count`)

const maxPage = computed(() => Math.max(1, Math.ceil((props.pageInfo?.totalRows || 1) / api.limit)))

const clampPage = (newPage: number) => Math.max(1, Math.min(newPage, maxPage.value))

watch(page, (newPage) => {
  const clamped = clampPage(newPage)
  if (newPage !== clamped) {
    page.value = clamped
  }
  scrollToTop()
})

watch(() => props.pageInfo?.totalRows, () => {
  page.value = clampPage(page.value)
})
</script>

<template>
  <div class="flex items-center">
    <p class="mr-4 hidden lg:block">
      <strong>{{ pageInfo?.totalRows }}</strong> résultats sur <strong>{{ total }}</strong> au total
    </p>
    <button v-if="!pageInfo?.isFirstPage" class="btn btn-sm ml-2" @click="page--">
      <IconPrev />
    </button>
    <div class="mx-2">Page</div>
    <input 
      v-model="page" 
      @focus="($event.target as HTMLInputElement).select()" 
      type="text" 
      class="input input-bordered input-md input-primary text-center font-bold max-w-14" 
    />
    <div class="font-bold mx-2">/ {{ maxPage }}</div>
    <button v-if="!pageInfo?.isLastPage" class="btn btn-sm" @click="page++">
      <IconNext />
    </button>
  </div>
</template>