<template>
  <page-header>Add Post</page-header>

  <div class="mt-10 flex flex-col">
    <div v-show="successMsg" class="p-5 pl-0 text-xl text-success">
      <p>{{ successMsg }}</p>
    </div>

    <div class="mt-10">
      <label class="text-xl" for="title">Title:</label>
      <input
        type="text"
        class="w-full border rounded-xl shadow-xl outline-none appearance-none p-3 font-normal text-md"
        v-model="title"
      />
    </div>

    <div class="mt-10">
      <label class="text-xl" for="title">Body:</label>
      <textarea
        class="w-full border rounded-xl shadow-xl outline-none appearance-none p-3 font-normal text-md"
        v-model="body"
      />
    </div>

    <div class="mt-10">
      <base-button title="Save" @click="savePost"></base-button>

      <base-button
        title="Back"
        :url="'/user/' + currentUser.id + '/posts'"
        :isLink="true"
      ></base-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup(props) {
    const $store = useStore();
    const currentUser = ref($store.getters["user/getCurrentUser"]);

    const title = ref("");
    const body = ref("");
    const successMsg = ref("");

    return {
      currentUser,
      title,
      body,
      successMsg,

      async savePost() {
        const postData = {
          title: title.value,
          body: body.value,
        };

        //make the post url to save the post
        const postUrl =
          "https://gorest.co.in/public/v2/users/" +
          currentUser.value.id +
          "/posts";

        const response = await axios.post(postUrl, postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 0950e82306cb2afa0744dba5cda38eaf8934990292f4c6be9bdb3d41fef88d24",
          },
        });

        //show success message
        if (response.statusText === "Created") {
          successMsg.value = "Post has been added successfully";

          setTimeout(() => {
            successMsg.value = "";
          }, 2000);
        }

      },
    };
  },
};
</script>
