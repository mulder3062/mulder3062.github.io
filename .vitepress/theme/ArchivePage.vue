<template>
  <Layout>
    <div>
      <h1></h1>
      <div v-for="(posts, year) in groupedPosts" :key="year">
        <h2>{{ year }}</h2>
        <ul>
          <li v-for="post in posts" :key="post.path">
            <RouterLink :to="post.path">{{ post.title }}</RouterLink> ({{ post.date }})
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
console.log('ok');

export default {
  computed: {
    groupedPosts() {
      const posts = this.$site.pages
        .filter(page => page.frontmatter.date && page.regularPath.startsWith('/'))
        .map(page => ({
          title: page.title || page.regularPath,
          path: page.regularPath,
          date: page.frontmatter.date,
          year: new Date(page.frontmatter.date).getFullYear()
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      return posts.reduce((acc, post) => {
        if (!acc[post.year]) {
          acc[post.year] = [];
        }
        acc[post.year].push(post);
        return acc;
      }, {});
    }
  }
};
</script>
