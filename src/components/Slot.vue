<template>
  <div class="z-slot">
    <h2>Slots</h2>
    <table class="slot-table">
      <thead>
      <tr>
        <th class="z-slot-title" v-for="(item,index) in columns" :key="index">{{ item.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data" :key="index">
        <td class="z-slot-title td" v-for="(value,key) in item" :key="key">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Object
    },
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.z-slot {
  width: 100%;
  overflow-x: auto;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }

  .slot-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .z-slot-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }

  .td {
    color: #606266;
    font-size: 14px;
  }
}
</style>
