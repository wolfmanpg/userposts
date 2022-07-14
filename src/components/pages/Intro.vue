<template>
      <page-header>User Posts App</page-header>

      <div class="mt-5 mb-5">
            <input
            class="w-full border rounded-xl shadow-xl outline-none appearance-none p-3 font-normal text-md"
            placeholder="Search User ID..."
            type="number"
            name="userId"
            id="userId"
            v-model="userId"
            @keyup="fetchUserPosts"
            />
      </div>

      <sub-header v-if="postsData.length > 0">Posts for user {{ currentUser.name }}</sub-header>

      <posts :postsData="postsData"></posts>
       
      <div class="flex justify-center mt-5" v-if="postsData.length > 0">
            <base-button title="View All Posts" :isLink="true" :url="viewAllLink"></base-button>
      </div>


</template>


<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";

import Posts from '../posts/Posts.vue';

export default {
      components: {
            Posts
      },
  setup() {

   const $store = useStore();
   const userId = ref('');
   const currentUser = ref({});
   const postsData = ref([]);

   //url link for viewing all posts of a use 
   const viewAllLink = computed( () => {
      return '/user/' + parseInt(userId.value) +'/posts';
   });

    return {
      userId,
      currentUser,
      postsData,
      viewAllLink,

      //function for fetching the posts of a user
      async fetchUserPosts(){

            postsData.value = [];
            currentUser.value = {};

            if (userId.value > 0){

                  $store.dispatch('user/updateCurrentUser', userId.value).then(async() => {

                        currentUser.value = $store.getters['user/getCurrentUser'];

                        //preparing the url 
                        let getUrl = 'https://gorest.co.in/public/v2/users/'+ userId.value +'/posts';
                        let response = await axios.get(getUrl);

                        //if the response has a success status prepare the user posts for showing them on the ui
                        if (response.status === 200){
                              postsData.value = response.data.slice(0, 3); //get only the first 3 posts
                        }

                  })
                  

            }
      }
      
    };
  },
};
</script>
