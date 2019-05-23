import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function getMain() {
  axios.get("/main").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.courses, response.data.courses);
      bus.$emit(bus.user, response.data.user);
    }, 1000);
  });
}

export function postCourse(data) {
  axios.post("admin/courses", data.course).then(response => {
    setTimeout(() => {
      bus.$emit(bus.courses, response.data.courses);
    }, 1000);
  });
}

export function getCourse(data) {
  axios.get(`/courses/${data.cid}`).then(response => {
    setTimeout(() => {
      bus.$emit(bus.course, response.data.course);
    }, 1000);
  });
}

export function getHomeworks(data) {
  axios.get(`/courses/${data.cid}/homeworks`).then(response => {
    setTimeout(() => {
      bus.$emit(bus.homeworks, response.data.homeworks);
    }, 1000);
  });
}
export function postHomework(data) {
  axios
    .post(`admin/courses/${data.cid}/homeworks`, data.homework)
    .then(response => {
      setTimeout(() => {
        bus.$emit(bus.homeworks, response.data.homeworks);
      }, 1000);
    });
}
