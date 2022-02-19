<template>
    <span :title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
</template>

<script setup>
import { createApp } from 'vue'

const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}

createApp(AttributeBinding).mount('#bind-attribute')

</script>
