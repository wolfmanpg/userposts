import { createRouter, createWebHistory } from "vue-router";

import Intro from "./components/pages/Intro.vue";
import UserPosts from "./components/pages/UserPosts.vue";
import AddPost from "./components/pages/AddPost.vue";
import ViewPost from "./components/pages/ViewPost.vue";

import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Intro },
    { path: "/user/:id/posts", props: true, component: UserPosts },
    { path: "/user/:id/posts/add", props: true, component: AddPost },

    { path: "/post/:id", props: true, component: ViewPost },

    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
