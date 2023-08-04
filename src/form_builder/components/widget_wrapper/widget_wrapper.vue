<script setup>
import { fit_wrapper, fit_card } from '@ui'
</script>

<template>
  <fit_wrapper
    vertical="large"
    :horizontal="false"
    background="background,contrast"
  >
    <fit_wrapper container>
      <fit_card>
        <slot />
      </fit_card>
    </fit_wrapper>
  </fit_wrapper>
</template>
