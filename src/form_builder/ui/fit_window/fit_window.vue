<template>
  <div class="window">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/utils'
.window
	@include utils.f('col,as,gl')

	&::v-deep > *
		width: 100%
</style>
