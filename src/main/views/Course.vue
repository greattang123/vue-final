<template>
  <div>
    <h1>{{ course.name }}</h1>
    <div>
      <button>
        <router-link :to="`/courses/${cid}/homeworks`">
          <i class="material-icons">build</i>
        </router-link>
      </button>
      <button>
        <i class="material-icons">group_add</i>
      </button>
    </div>
    <div id="ccontent">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getCourse } from "@/main/api/Main";
export default {
  props: ["cid"],
  data: () => ({
    course: { name: null, inserTime: null }
  }),
  created() {
    getCourse({ cid: this.cid });
    bus.$on(bus.course, data => {
      this.course = data;
    });
  }
};
</script>
<style scoped>
#ccontent {
  border: 1px solid red;
}
</style>
