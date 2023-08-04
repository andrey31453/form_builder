<script setup>
import * as templates from './templates/_bunddle'

import { use_config_store } from '@store'
const config = use_config_store()
const template_is = config.template.is
</script>

<template>
  <component :is="templates[template_is]" />
</template>
