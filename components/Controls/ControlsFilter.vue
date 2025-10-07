<script setup lang="ts">
import type { Filter } from "@/types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "@/types/filter"

const props = defineProps<{
  filter: Filter
}>()

const model = defineModel<any>({ required: true })

// Charger les options dynamiquement pour les SELECT
const { data: options } = props.filter.type === FILTER_TYPE_SELECT && props.filter.apiCriteria
  ? await useFetch<string[]>(`/api/nocodb/distinct/${props.filter.apiCriteria}`)
  : { data: ref(props.filter.options || []) }

const hasValue = computed(() => {
  if (props.filter.type === FILTER_TYPE_RANGE) {
    return model.value[0] || model.value[1]
  }
  if (props.filter.type === FILTER_TYPE_SELECT) {
    return model.value.length > 0
  }
  return !!model.value
})

const reset = () => {
  if (props.filter.type === FILTER_TYPE_RANGE) {
    model.value = ['', '']
  } else if (props.filter.type === FILTER_TYPE_SELECT) {
    model.value = []
  } else {
    model.value = ''
  }
}

const validateNumber = (value: string) => /^-?\d*$/.test(value) ? value : ''
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': hasValue }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconForms v-if="filter.type === FILTER_TYPE_TEXT" />
      <IconListDetails v-else-if="filter.type === FILTER_TYPE_SELECT" />
      <IconBracketsContain v-else-if="filter.type === FILTER_TYPE_RANGE" />
      {{ filter.title }}
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl border-2 border-slate-200">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <p v-if="filter.info" class="text-sm italic mb-2">{{ filter.info }}</p>
        
        <!-- Text Input -->
        <input 
          v-if="filter.type === FILTER_TYPE_TEXT"
          v-model.trim="model" 
          :placeholder="filter.info" 
          type="text" 
          class="input input-bordered w-full" 
        />
        
        <!-- Select Checkboxes -->
        <div v-else-if="filter.type === FILTER_TYPE_SELECT" class="max-h-80 overflow-auto">
          <label 
            v-for="option in options" 
            :key="option"
            class="flex items-center mb-2 cursor-pointer"
          >
            <input 
              type="checkbox" 
              :value="option" 
              v-model="model" 
              class="checkbox checkbox-sm checkbox-primary mr-4"
            >
            {{ option }}
          </label>
        </div>
        
        <!-- Range Inputs -->
        <div v-else-if="filter.type === FILTER_TYPE_RANGE" class="flex items-center gap-2">
          <input 
            :value="model[0]"
            @input="model[0] = validateNumber(($event.target as HTMLInputElement).value)"
            type="text" 
            pattern="-?\d*"
            inputmode="numeric"
            class="input input-bordered w-20" 
          />
          <span>&#8211;</span>
          <input 
            :value="model[1]"
            @input="model[1] = validateNumber(($event.target as HTMLInputElement).value)"
            type="text" 
            pattern="-?\d*"
            inputmode="numeric"
            class="input input-bordered w-20" 
          />
        </div>
        
        <div class="flex justify-end mt-2">
          <button @click="reset" class="btn btn-sm btn-ghost">
            <IconRestore />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>