<template>
  <textarea :value="modelValue" @input="updateTextarea" class="textarea">
  </textarea>
</template>

<script>
export default {
  name: 'my-textarea',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateTextarea(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.textarea {
  width: 100%;
  border: 1px solid rgba(120, 120, 120, .4);
  padding: 10px 15px;
  margin-top: 15px;
  background: #F7FCFC;
  font-family: 'Roboto', sans-serif;
}
</style>