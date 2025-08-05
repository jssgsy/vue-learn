<script setup>

import {reactive} from "vue";

let detailData = reactive({
  username: 'zs',
  age: 30,
  address: '浙江省杭州市',
  subject: 'subject xxx'
})
</script>

<template>
  <!--默认展示三列-->
  <a-descriptions title="详情页">
    <a-descriptions-item label='用户名'>{{ detailData.username }}</a-descriptions-item>
    <a-descriptions-item label='年龄'>{{ detailData.age }}</a-descriptions-item>
    <a-descriptions-item label='地址'>{{ detailData.address }}</a-descriptions-item>
    <a-descriptions-item label='subject'>{{ detailData.subject }}</a-descriptions-item>
  </a-descriptions>

  <br>
  <!--带边框，即就是以表格形式展示-->
  <a-descriptions title="User Info" bordered>
    <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
    <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
    <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
    <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Status" :span="3">
      <a-badge status="processing" text="Running"/>
    </a-descriptions-item>
    <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
    <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
    <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
    <a-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br/>
      Database version: 3.4
      <br/>
      Package: dds.mongo.mid
      <br/>
      Storage space: 10 GB
      <br/>
      Replication factor: 3
      <br/>
      Region: East China 1
      <br/>
    </a-descriptions-item>
  </a-descriptions>

</template>

<style scoped>

</style>