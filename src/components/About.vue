<template>
  <div class="about">
    <p>全路径参数$route.fullPath内容如下：{{ $route.fullPath }}</p>
    <p>路径参数$route.params内容如下：{{ $route.params }}</p>
    <p>查询参数$route.query内容如下：{{ $route.query.q1 }}</p>
    <p>锚点参数$route.hash内容如下：{{ $route.hash }}</p>
    <p>$route内容如下：{{ $route }}</p>
    <p>$router内容如下：{{ $router }}</p>

  </div>
</template>

<script lang="ts">
export default {
  name: 'About',
}
</script>