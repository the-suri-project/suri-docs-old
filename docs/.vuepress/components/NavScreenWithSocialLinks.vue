<script lang="ts" setup>
import NavScreen from 'vuepress-theme-hope/modules/navbar/components/NavScreen.js';
import {SocialButtons} from '../constants';</script>

<template>
    <NavScreen>
        <template #after>
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
                             style="width: 1.75rem; height: 1.75rem; vertical-align: middle;">
                            <path :d="socialButton.svgPath"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </template>
    </NavScreen>
</template>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 20px
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
</style>