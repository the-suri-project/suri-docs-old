<script lang="ts" setup>
const props = defineProps<{
    title: string,
}>();
</script>

<template>
    <div class="container">
        <details class="details custom-block">
            <summary>{{ props.title }}</summary>
            <div class="content">
                <slot/>
            </div>
        </details>
    </div>
</template>

<style lang="scss" scoped>
.container {
  border-left: var(--vp-c-brand) 4px solid;
  border-image: linear-gradient(to bottom, #f5d279, #f5d15d, #f54bf1, #8623b2) 1;

  &:deep(blockquote > p) {
    font-size: inherit;
  }
}

details.details {
  position: relative;
  border-radius: 0;
  padding: 0;

  summary {
    color: var(--vp-c-white);
    margin: 0;
    padding: 16px 16px 16px;
    cursor: pointer;
  }

  &[open] {
    summary {
      padding: 16px 16px 0;
    }
  }
}

div.content {
  padding: 0 16px 8px;
}
</style>
