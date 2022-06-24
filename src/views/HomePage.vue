<template>
  <section>
    <div class="wrapper">
      <div class="sidebar">
        <SideBar />
      </div>
      <main>
        <div class="home-header">
          <h1>Home</h1>
        </div>
        <transition-group name="list" tag="div" class="home-body">
          <CookItem 
            v-for="post in searchedPosts"
            :post="post"
            :key="post.id"
          />
        </transition-group>
      </main>
    </div>
  </section>
</template>

<script>
  import SideBar from "@/components/SideBar.vue"
  import CookItem from "@/components/CookItem.vue"

  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'home-page',
    components: {
      SideBar, CookItem
    },
    computed: {
      ...mapState({
        posts: state => state.posts
      }),
      ...mapGetters(['searchedPosts'])
    },
    methods: {
      ...mapActions({
        fetchAllPosts: 'fetchPosts'
      }),
    },
    mounted() {
      this.fetchAllPosts();
    },
}

</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active,
.list-enter {
  transition: all .5s ease;
}

.list-enter-from,
.list-leave-to,
.list-leave {
  opacity: 0;
  transform: translateY(30px);
}
  .wrapper {
    display: flex;
  }
  .sidebar {
    width: 300px;
    margin-right: 15px;
    padding: 0 15px 0 0;
    border-right: 1px solid rgba(120, 120, 120, .4);
  }
  .home-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
    padding: 35px 0 0 0;
  }
  main {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    .wrapper {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
      margin-right: 0;
      padding: 0 15px0;
      border-right: none;
      margin-bottom: 30px;
    }
  }
  @media screen and(max-width: 700px) {
  .home-body {
    grid-template-columns: 1fr;
  }
}
</style>