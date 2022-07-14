<template>
  <page-header>Posts for user {{ currentUser.name }}</page-header>

  <div class="mt-5 mb-5 flex justify-center">
      <base-button title="Add New Post" 
      :url="'/user/' + currentUser.id + '/posts/add'"
      :isLink="true"
      >
      </base-button>
  </div> 


  <div class="mt-10">
    <posts :postsData="postsData"></posts>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

import Posts from "../posts/Posts.vue";

export default {
  components: {
    Posts,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup(props) {
    const $store = useStore();
    const postsData = ref([]);
    const currentUser = ref($store.getters["user/getCurrentUser"]);

    const initPostsData = async () => {
      //preparing the url
      let getUrl =
        "https://gorest.co.in/public/v2/users/" + props.id + "/posts";
      let response = await axios.get(getUrl);

      //if the response has a success status prepare the user posts for showing them on the ui
      if (response.status === 200) {
        postsData.value = response.data;
      }
    };

    initPostsData();

    return {
      postsData,
      currentUser,
    };
  },
};
</script>
