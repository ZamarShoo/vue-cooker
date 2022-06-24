<template>
  <section>
    <div class="wrapper">
      <main>
        <div class="home-header">
          <h1>What I like</h1>
        </div>
        <transition-group name="list" tag="div" class="home-body">
          <CookItem 
            v-for="post in likedPost"
            :post="post"
            :key="post.id"
          />
        </transition-group>
      </main>
    </div>
  </section>
</template>

<script>

  import CookItem from "@/components/CookItem.vue"
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'home-page',
    components: {
      CookItem
    },
    computed: {
      ...mapState({
        posts: state => state.posts
      }),
      ...mapGetters(['likedPost'])
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
  .wrapper {
    display: flex;
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
  .list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

@media screen and(max-width: 700px) {
  .home-body {
    grid-template-columns: 1fr;
  }
}
</style>