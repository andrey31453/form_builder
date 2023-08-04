<template>
  <div class="buttons_wrapper">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/utils/f' as *

.buttons_wrapper
	@include f('je')
</style>
