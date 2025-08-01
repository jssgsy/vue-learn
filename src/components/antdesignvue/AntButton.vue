<script setup lang="ts">
import {DownloadOutlined} from "@ant-design/icons-vue";

</script>

<template>
<br>
<!--  六种类型-->
  <div>
    <h3>六种类型-用type属性表示：</h3>
    <a-button type="primary">primary</a-button>
    <a-button type="default">default</a-button>
    <a-button type="dashed">dashed</a-button>
    <a-button type="ghost">ghost</a-button>
    <a-button type="link">link</a-button>
    <a-button type="text">text</a-button>
  </div><br>

<!--  四种状态-->
  <div>
    <h3>四种状态-对应四个属性：</h3>
    <a-button type="primary" danger>primary</a-button>
    <a-button type="primary" ghost>primary</a-button>
    <a-button type="primary" disabled>primary</a-button>
    <a-button type="primary" loading>primary</a-button>
  </div><br>

  <!--  三种形状-->
  <div>
    <h3>三种形状(大小随着形状变化)：</h3>
    <a-button type="primary" shape="circle">circle</a-button>
    <a-button type="primary" shape="default">default</a-button>
    <a-button type="primary" shape="round">round</a-button>
  </div><br>

  <!--  三种大小-->
  <div>
    <h3>三种大小：</h3>
    <a-button type="primary" size="large">large</a-button>
    <a-button type="primary" size="middle">middle</a-button>
    <a-button type="primary" size="small">small</a-button>
  </div><br>

  <!--  自定义按钮图标-->
  <div>
    <h3>自定义按钮图标：</h3>
    <a-button type="primary">下载
      <template v-slot:icon>
        <DownloadOutlined />
      </template>
    </a-button>
    <a-button type="primary">
      <template v-slot:icon>
        <DownloadOutlined />
      </template>
    </a-button>
  </div><br>


</template>

<style scoped>

</style>