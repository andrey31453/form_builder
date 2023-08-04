<script setup>
// props
import { use_props } from '@composables'
const props = defineProps(
  use_props({
    title: '',
  })
)
</script>

<template>
  <div class="title">{{ title }}</div>
</template>

<style lang="sass" scoped>
@use '@styles/classes/content'

.title
	@include content.title
</style>
