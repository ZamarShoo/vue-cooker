import { createStore } from 'vuex'
import db from "@/firebase/index.js";
import { getDocs, getDoc, updateDoc, addDoc, doc, collection } from "firebase/firestore";
import '@/prototype/index.js'

const postsColRef = collection(db, "posts");
const tagsColRef = collection(db, "tags");


export default createStore({
  state: () => ({
    posts: [],
    post: {},
    tags: [],
    searchedTags: [],
    searchPanel: '',
    openModal: false,
    mobileNavIsOpen: false
  }),
  getters: {
    sortedPosts(state) {
      
      if (!state.searchedTags.length) {
        return [...state.posts]
      }
      else {
        return [...state.posts]
          .filter(post => post.tags.contains(state.searchedTags))
      }
    },
    searchedPosts(state, getters) {
      return getters.sortedPosts
        .filter(post => post.title.toLowerCase()
        .includes(state.searchPanel.toLowerCase()))
    },
    likedPost(state) {
      return [...state.posts]
        .filter(post => post.like == true)
    }
  },
  mutations: {
    setSearchPanel(state, searchPanel) {
      state.searchPanel = searchPanel
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
    setTags(state, tags) {
      state.tags = tags;
    },
    setSearchedTags(state, tag) {
      if(!state.searchedTags.includes(tag)) {
        state.searchedTags.push(tag);
      } else {
        state.searchedTags = state.searchedTags.filter(tagArr => tagArr !== tag)
      }
    },
    setLikePost(state) {
      state.post.like = !state.post.like
    },
    setModal(state, modal) {
      state.openModal = modal
    },
    setMobileNavIsOpen(state, active) {
      state.mobileNavIsOpen = active
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      let postSnapShot = await getDocs(postsColRef);
      let posts = [];
      postSnapShot.forEach((post) => {
        let cityData = post.data();
        cityData.id = post.id;
        posts.push(cityData);
      });
      commit('setPosts', posts)
    },
    async setOnePost({state, commit}, id) {
      let cityRef = doc(postsColRef, id);
      let posts = cityRef;
      let post = await getDoc(posts);
      let postData = post.data();
      commit('setPost', postData)
    },
    async loadNewPost({state, commit}, newPost) {
      await addDoc(postsColRef, newPost);
      commit('setModal', true)
    },
    async fethTags({state, commit}) {
      let tagsSnapShot = await getDocs(tagsColRef);
      let tags = [];
      tagsSnapShot.forEach((tag) => {
        let tagData = tag.data();
        tagData.id = tag.id;
        tags.push(tagData);
      });
      commit('setTags', tags)
    },
    async editLikePost({state, dispatch}, editPost) {
      const postDocRef = doc(db, "posts", editPost.id);
      await updateDoc(postDocRef, {
        "like": editPost.like,
      });
      dispatch('fetchPosts')
    }
  }
})
