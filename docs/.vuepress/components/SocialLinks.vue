<script lang="ts" setup>
import {SocialButtons} from '../constants';
</script>

<template>
    <div class="social-links">
        <div class="nav-item" v-for="socialButton in SocialButtons">
            <a class="social-link"
               :href="socialButton.link"
               target="_blank"
               rel="noopener noreferrer"
               :aria-label="socialButton.ariaLabel">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="icon github-icon"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     :aria-label="socialButton.ariaLabelIcon"
                     style="width: 1.25rem; height: 1.25rem; vertical-align: middle;">
                    <path :d="socialButton.svgPath"></path>
                </svg>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.social-links {
  display: flex;
}

.social-link {
  display: inline-block;
  margin: auto;
  padding: 6px;
  color: var(--dark-grey);
  line-height: 1;

  &:hover {
    color: #f5bc43;
  }
}

@media (max-width: 719px) {
  .social-links {
    display: none;
  }
}
</style>