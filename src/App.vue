<template>
<ModalPopup v-show="modal"/>
  <Header />
  <router-view/>
</template>


<script>
  import { mapState } from 'vuex'

  import Header from "@/components/Header.vue"
  import ModalPopup from "@/components/ModalPopup.vue"
  export default {
    components: {
      Header, ModalPopup
    },
    computed: {
      ...mapState({
        modal: state => state.openModal
      }),
    },
  }
</script>

<style>
  ::-webkit-scrollbar {width:0px;}
  * {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    color: #333333;
  }

  section {
    max-width: 1480px;
    margin: 0 auto;
  }

  .wrapper {
    padding: 50px 20px;
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    background: #F7FCFC;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  svg path {
    transition: .2s
  }
  .activeLike svg path{
    fill:red; fill-opacity:1;
  }
</style>