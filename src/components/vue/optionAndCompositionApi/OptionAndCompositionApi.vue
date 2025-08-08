<script setup lang="ts">

import OptionApi from "@/components/vue/optionAndCompositionApi/OptionApi.vue";
import CompositionApi from "@/components/vue/optionAndCompositionApi/CompositionApi.vue";
import {ref} from "vue";

let title = ref("")

function handleChangeTitle(newValue) {
  console.log('handleChangeTitle', newValue)
  title.value = newValue;
}
</script>

<template>
  <div style="background-color: #747bff">
    <h3>下面是选项式api</h3>
    <option-api :title="title"
                age="30"
                aaa="aaa是一个attribute"
                bbb="bbb是一个attribute"
                @noWhat="() => 'onNoWhat'"
                @change-title="handleChangeTitle"
    ></option-api>
    <h3>选项式api end</h3>
  </div>

  <br><br>
  <div style="background-color: orange">
    <h3>下面是组合式api</h3>
    <composition-api :title="title"
                     age="30"
                     aaa="aaa是一个attribute"
                     bbb="bbb是一个attribute"
                     @noWhat="() => 'onNoWhat'"
                     @change-title="handleChangeTitle"
    ></composition-api>
    <h3>组合式api end</h3>
  </div>
</template>

<style scoped>

</style>