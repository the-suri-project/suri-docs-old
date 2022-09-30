<script lang="ts" setup>
const props = defineProps<{
    title: string,
}>();
</script>

<template>
    <div class="container">
        <details class="details custom-container">
            <summary>{{ props.title }}</summary>
            <div class="content">
                <slot/>
            </div>
        </details>
    </div>
</template>

<style lang="scss" scoped>
.container {
  border-left: 4px solid #000000;
  border-image: linear-gradient(to bottom, #f5d279, #f5d15d, #f54bf1, #8623b2) 1;

  &:deep(blockquote > p) {
    font-size: inherit;
  }
}

details {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;

  border: none !important;
}
</style>
