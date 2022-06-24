<template>
  <article>
    <div class="cookitem--header">
      <img :src="post.img">
    </div>
    <div class="cookitem--body">
      <div class="title-wrapper">
        <h3>{{ post.title }}</h3>
        <object
          :class="{activeLike: post.like}"
          @click="editLike(post.id, post.like)">
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
      <a class="btn"
        @click="$router.push(`/posts/${post.id}`)"
      >
        Подробнее
      </a>
    </div>
  </article>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    },
    methods: {
      ...mapActions(['editLikePost']),
      editLike(id, like) {
        const editPost = {
          "id": id, "like": !like
        }
        this.editLikePost(editPost)
      }
    }
  }
</script>

<style lang="scss" scoped>
article {
      box-shadow: 0 10px 20px rgb(10 24 77 / 25%);
      background-color: #FFF;
      border-radius: 10px;
}
  .cookitem--header {
    height: 250px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px 10px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .cookitem--body {
    padding: 30px 20px;
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
  h3 {
    font-size: 28px;
  }
  a.btn {
    display: inline-block;
    padding: 15px 37px;
    background: steelblue;
    color: white;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 15px;
  }
  @media screen and (max-width: 800px) {
    .cookitem--header {
    height: 200px;
  }
  
  .cookitem--body {
    padding: 15px 20px;
  }
  }
</style>