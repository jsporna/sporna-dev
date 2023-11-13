<script>
export default {
  props: {
    author: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="quote">
    <blockquote>
      <slot></slot>
    </blockquote>
    <p>{{ author }}</p>
  </div>
</template>

<style>
.quote blockquote {
  border-left-color: red;
}

.quote blockquote + p {
  text-align: right;
}
</style>