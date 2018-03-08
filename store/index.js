import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-blog-ed.firebaseio.com/posts.json')
          .then(response => {
            const postsArray = [];

            for (const key in response.data) {
              postsArray.push({ ...response.data[key], id: key });
            }

            vuexContext.commit('setPosts', postsArray);
          })
          .catch(error => context.error(error));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };

        return axios
          .post('https://nuxt-blog-ed.firebaseio.com/posts.json', createdPost)
          .then(response => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: response.data.name
            });
          })
          .catch(error => console.log('error', error));
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            'https://nuxt-blog-ed.firebaseio.com/posts/' +
              editedPost.id +
              '.json',
            editedPost
          )
          .then(response => {
            vuexContext.commit('editPost', editedPost);
          })
          .catch(error => console.log(error));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
