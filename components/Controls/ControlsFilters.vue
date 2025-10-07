<script setup lang="ts">
const states = useFilters()

const resetAll = () => {
  states.value.forEach(state => {
    state.model = state.filter.type === 'FiltersRange' ? ['', ''] : 
                  state.filter.type === 'FiltersSelect' ? [] : ''
  })
}

watch(
  () => states.value.map(s => s.model),
  scrollToTop,
  { deep: true }
)
</script>

<template>
  <div class="hidden lg:flex flex-wrap items-center">
    <ControlsFilter 
      v-for="(state, index) in states" 
      :key="index"
      :filter="state.filter" 
      v-model="state.model"
    />
    <button @click="resetAll" class="btn btn-sm btn-ghost">
      <IconRestore />
    </button>
  </div>
</template>