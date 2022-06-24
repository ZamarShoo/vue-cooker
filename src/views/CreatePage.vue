<template>
  <section class="wrapper">
    <h1>Create</h1>
    <form @submit.prevent>
    <my-input
      :modelValue="title"
      @update:modelValue="changeTitle"
      placeholder="Заголовок"
    />
    <my-input
      :modelValue="img"
      @update:modelValue="changeImg"
      placeholder="Изображение"
    />
    <ul class="tags">
      <li 
        v-for="tag in tagsAll" 
        :key="tag.id"
        :class="{active: this.selectedTags.includes(tag.name)}"
        @click="addToSearchedTags(tag.name)"
      >
        {{tag.name}}
      </li>
    </ul>
    <my-textarea
      :modelValue="excerpt"
      @update:modelValue="changeExcerpt"
      placeholder="Краткое описание"
    />
    <my-textarea
      :modelValue="description"
      @update:modelValue="changeDescription"
      placeholder="Основной текст"
    />
    <button
      @click="createPost"
    >Create</button>
    </form>
  </section>
</template>

<script>

  import { mapState, mapGetters, mapActions } from 'vuex'
  import MyInput from "@/components/UI/MyInput.vue"
  import MyTextarea from "@/components/UI/MyTextarea.vue"

  export default {
    name: 'create-post',
    data() {
      return {
        title: '',
        img: '',
        selectedTags: [],
        excerpt: '',
        description: '',
        like: false
      };
    },
    components: {
      MyInput, MyTextarea
    },
    computed: {
      ...mapState({
        tagsAll: state => state.tags,
      }),
    },
    methods: {
      ...mapActions(['loadNewPost', 'fethTags']),
      changeTitle(title) {
        this.title = title
      },
      changeImg(img) {
        this.img = img
      },
      changeExcerpt(excerpt) {
        this.excerpt = excerpt
      },
      changeDescription(description) {
        this.description = description
      },
      createPost() {
        this.loadNewPost({
          title: this.title,
          img: this.img,
          excerpt: this.excerpt,
          description: this.description,
          tags: this.selectedTags
        })
        this.title = '',
        this.img = '',
        this.selectedTags = [],
        this.excerpt = '',
        this.description = ''
      },
      addToSearchedTags(tag) {
        if(!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags = this.selectedTags.filter(tagArr => tagArr !== tag)
      }
      }
    },
    mounted() {
      this.fethTags();
    }
  }
</script>

<style lang="scss" scoped>
  form {
    max-width: 650px;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 250px;
  }
 .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
    max-width: 650px;

    li {
      margin: 10px 10px 0 0;
      border-radius: 10px;
      padding: 5px 10px;
      border: 1px solid rgba(120, 120, 120, .4);
      cursor: pointer;
      transition: .2s;
    }
    li.active {
      color: steelblue;
      border: 1px solid rgba(70, 130, 180, .7);
    }
  }
  button {
    display: inline-block;
    padding: 15px 37px;
    background: steelblue;
    color: white;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    margin-top: 15px;
  }
</style>