<script setup lang="ts">
import type { Item } from "@/types/item"
import type { PageInfo } from "@/types/pageInfo"

const { provider } = useRuntimeConfig().public.api
const page = usePage()
const sort = useSort()
const filters = useFilters()

const { data, error } = await useFetch<{ items: Item[], pageInfo: PageInfo }>(`api/${provider}`, {
  query: { page, sort, filters }
})

const items = computed(() => data.value?.items || [])
const pageInfo = computed(() => data.value?.pageInfo || null)
</script>

<template>
  <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
  <div v-else-if="items" class="min-h-screen justify-center flex px-8">
    <div class="max-w-screen-2xl w-full mx-auto">
      <Controls class="my-4" :pageInfo="pageInfo" />
      <TableView :items="items" />
    </div>
  </div>
</template>