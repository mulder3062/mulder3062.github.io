<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "116f01fbc9ca34d038d8",
    clientSecret: "4367683d8a0ed5bf91c5cff7862c2da97c4d31c4",
    repo: "blog-comments",
    owner: "mulder3062",
    admin: ["mulder3062"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "ko-KR",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>
