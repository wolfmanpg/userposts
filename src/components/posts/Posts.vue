<template>
  <div class="user-posts w-2/3 mx-auto">

    <div v-if="userPosts.length > 0">
      <ul class="grid grid-cols-3 gap-4">
        <li v-for="post in userPosts" :key="post.id" class="p-6 rounded overflow-hidden shadow-lg">
          <h2 class="text-2xl font-bold text-black mb-3 hover:text-primary"><router-link :to="'post/' + post.id">{{ post.title }}</router-link></h2>
          <p class="text-xl mt-5 mb-4">{{ post.body }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-center text-xl mt-8 mb-8">No posts found..</p>
    </div>

  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    postsData: {
      type: Object,
      required: true,
      default: null,
    },
  },
  setup(props) {
    const userPosts = computed(() => {

      //prepare the user posts
      return props.postsData.map((el) => {
        return {
          id: el.id,
          title: el.title.slice(0, 20) + "..",
          body: el.body.slice(0, 70) + "...",
        };
      });
    });

    return {
      userPosts,
    };
  },
};
</script>
