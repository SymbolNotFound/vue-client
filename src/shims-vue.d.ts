// This is a bit of a hack to type all components the same, but we will benefit
// more from type-aware references of other libraries from components than we
// will with type-awareness about specific component props.
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
