<template>
  <div class="yl-button">
    <button> 
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'yl-button',
  props: ['color','type','icon'],
  data () {
    return {

    }
  },
  created() {
    console.log(this.$attrs);
  }
}
</script>

<style>

</style>