import DefaultTheme from "vitepress/theme";
import Archive from "./components/Archive.vue";
import Tag from "./components/Tag.vue";
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Archive", Archive);
    app.component("Tag", Tag);
  },
};
