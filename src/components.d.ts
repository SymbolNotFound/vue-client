// Read more: https://github.com/vuejs/core/pull/3399
import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    HelloWorld: typeof import('./components/HelloWorld.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
