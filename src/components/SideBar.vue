<template>
  <aside>
    <h2>SideBar</h2>
    <my-input
      :modelValue="searchPanel"
      @update:modelValue="setSearchPanel"
      placeholder="Поиск...."
    />
    <ul class="tags">
      <li 
        v-for="tag in tags" 
        :key="tag.id"
        :class="{active: selectedTags.includes(tag.name)}"
        @click="addToSearchedTags(tag.name)"
      >
        {{tag.name}}
      </li>
    </ul>
  </aside>
</template>

<script>
  import MyInput from '@/components/UI/MyInput.vue'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'sidebar',
    components: {
      MyInput,
    },
    methods: {
      ...mapMutations(['setSearchPanel', 'setSearchedTags']),
      ...mapActions({
        fetchAllTags: 'fethTags'
      }),
      addToSearchedTags(name) {
        this.setSearchedTags(name)
      }
    },
    computed: {
      ...mapState({
        searchPanel: state => state.searchPanel,
        tags: state => state.tags,
        selectedTags: state => state.searchedTags
      }),
    },
    mounted() {
      this.fetchAllTags();
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    margin: 10px 0;

    li {
      padding: 5px 3px;
      font-size: 18px;
      cursor: pointer;
      transition: .2s;
    }
    li.active {
      color: steelblue;
    }
  }

  @media screen and (max-width: 900px) {
    .tags {
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 10px 10px 0 0;
        border-radius: 10px;
        padding: 5px 10px;
        border: 1px solid rgba(120, 120, 120, .4);
      }
      li.active {
        border: 1px solid rgba(70, 130, 180, .7);
      }
    }
  }
</style>