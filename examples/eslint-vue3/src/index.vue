<template>
    <div class="class">
        <div
            id=""
            class=""
            style="color: red;"></div>
        <div
            id=""
            class="">
            asdf
        </div>
    </div>
</template>

<script lang="ts" setup>
import { log } from '@/utils/common'

log('eslint')
const a = ''
console.error(a)

defineProps({
  title: String,
})
</script>

<style lang="less">
.class {
    color: red;
     font-size: 12px;
}
</style>
