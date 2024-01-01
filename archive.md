---
title: "Archive"
date: 2024-01-01
author: "mulder"
description: "Archive"
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

# Archive

아카이브 {{ count }}

<Posts />

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>