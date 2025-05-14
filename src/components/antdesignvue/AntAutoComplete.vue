<script>
import {AutoComplete} from "ant-design-vue";
import {ref} from "vue";

export default {
  name: 'AntAutoComplete',
  setup() {
    const value = ref('');
    const options = ref([
      { value: 'Apple' },
      { value: 'Banana' },
      { value: 'Cherry' },
    ]);

    const onSelect = (value) => {
      console.log('onSelect', value);
    };

    const onSearch = (searchText) => {
      console.log('onSearch', searchText);
    };

    return {
      value,
      options,
      onSelect,
      onSearch,
    };
  }
}
</script>

<template>
  <a-auto-complete
      v-model:value="value"
      :options="options"
      style="width: 200px"
      placeholder="请输入内容"
      @select="onSelect"
      @search="onSearch"
  />
</template>

<style scoped>

</style>