<script setup lang="ts">
import type { File } from '@/types/file'
import { FILE_TYPE_PDF, FILE_TYPE_IMG } from '@/types/file'

defineProps<{
  files: File[]
}>()

function print() {
  window.print()
}

const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)
    
    // Get extension from URL if not present in filename
    const urlExtension = url.split('.').pop()?.split('?')[0] || 'jpg'
    const finalFilename = filename.includes('.') ? filename : `${filename}.${urlExtension}`
    
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = finalFilename
    link.click()
    
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error)
    // Fallback: open in new tab if download fails
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row print:hidden">
    <div class="font-bold md:w-1/3 md:text-right md:p-4">
      Téléchargements
    </div>
    <div class="flex-1 md:p-4">
      <ul class="menu bg-base-200 rounded-box">
        <li v-for="file in files">
          <a v-if="file.type === FILE_TYPE_PDF" @click="print()">
            <IconFileTypePdf />
            <span class="truncate">{{ file.title }}</span>
          </a>
          <a
            v-if="file.type === FILE_TYPE_IMG"
            @click="file.link && file.title && downloadImage(file.link, file.downloadName || file.title)"
            class="cursor-pointer"
          >
            <IconPhoto />
            <span class="truncate">{{ file.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>