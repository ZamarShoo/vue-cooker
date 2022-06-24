<template>
  <section class="wrapper">
    <div class="section-wrapper">
      <div class="section-image">
        <img :src="post.img">
      </div>  
      <div class="section-info">
        <div class="title-wrapper">
          <h1>{{post.title}}</h1>
          <object
          :class="{activeLike: post.like}"
          @click="editLike(post.like)">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
        </object>
        </div>
        <ul class="tags">
          <li 
              v-for="tag in post.tags"
              :key="tag.id"
            >
              {{ tag }}
            </li>
        </ul>
        <p>{{post.excerpt}}</p>
      </div>
    </div>
    <div class="description"><p>{{post.description}}</p></div>
  </section>
</template>

<script>

import { mapActions, mapState, mapMutations } from 'vuex'

  export default {
    name: 'one-post-id',
    data() {
    return {
      postId: this.$route.params.id,
    };
    },
    computed: {
      ...mapState({
        post: state => state.post,
      }),
    },
    methods: {
      ...mapMutations(['setLikePost']),
      ...mapActions({
        fetchOnePost: 'setOnePost',
        LikePost: 'editLikePost'
      }),
      editLike(like) {
        const editPost = {
          "id": this.postId, "like": !like
        }
        this.LikePost(editPost)
        this.setLikePost()
      }
    },
    mounted() {
      this.fetchOnePost(this.postId);
    },
  }
</script>

<style lang="scss" scoped>
  .section-wrapper {
    display: flex;
  }
  .section-image {
    margin-right: 2vw;

    img {
      width: 50vw;
      height: 450px;
      object-fit: cover;
    }
  }

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vh;
    max-width: 750px;
  }

  h1 {
    font-size: 42px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;

    li {
      margin: 10px 10px 0 0;
      border-radius: 10px;
      padding: 5px 10px;
      border: 1px solid rgba(120, 120, 120, .4);
      cursor: pointer;
    }
  }
  .description {
    max-width: 750px;
    margin: 40px 0;
  }
  @media screen and(max-width: 1100px) {
    .section-image {
      margin-right: 0;

      img {
        width: 100%;
        height: 40vh;
      }
    }
    .section-wrapper {
      flex-direction: column;
    }
    .title-wrapper {
      margin-top: 5vh;
    }
    .wrapper {
      padding: 0
    }
    .description, .section-info {
      padding: 0 20px;
    }
    .description {
      max-width: 100%;
    }
  } 
</style>