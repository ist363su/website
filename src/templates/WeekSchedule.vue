<template>
<Layout>
  <div v-html="$page.weekSchedule.content"></div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  weekSchedule(id: $id) {
    id
    title
    excerpt
    week
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.weekSchedule.title
    }
  }
}
</script>