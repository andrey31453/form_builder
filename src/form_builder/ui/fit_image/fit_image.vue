<script setup>
// props
import { use_props } from '@composables'
const props = defineProps(
  use_props({
    url: '',
    contain: false,
  })
)
const background_size = props.contain ? 'contain' : 'cover'
</script>

<template>
  <div class="image_cont">
    <div
      class="image"
      :style="{
        'background-image': `url(${url})`,
        'background-size': background_size,
      }"
    />
  </div>
</template>

<style lang="sass" scoped>
@import '@styles/utils/position'
@import '@styles/utils/image'

.image_cont
	@extend ._relative_
	@extend ._full

.image
	@include absolute(0)
	@extend ._background_
</style>
