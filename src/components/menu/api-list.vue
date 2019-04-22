<template>
  <div>
    <table class="tbl">
      <tr>
        <th width="10%">序号</th>
        <th width="20%">接口名称</th>
        <th width="70%">调用方式</th>
      </tr>
      <tr v-for="(item,index) in apiList" :key="index">
        <td>{{index ++}}</td>
        <td>{{item.name}}</td>
        <td>{{item.methods}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="text/javascript">

  import container from '@/components/container';
  import {getApiList} from "@/api/http-request";

  export default {
    name: '',
    components: {
      container
    },
    data() {
      return {
        apiList: [],
        isLoading: false,
        page:1,
        pageSize: 10
      }
    },
    computed: {},
    watch: {},
    created() {
      this.init();
    },
    methods: {
      init() {
        this.apiList = [];
        this.isLoading = true;
        getApiList(this, {page:1,pageSize:20}).then(res => {
          if (res.code === '200') {
            this.apiList = res.data;
          }
        }).catch(err => {
        }).finally(() => {
          this.isLoading = false;
        });
      }
    }
  }

</script>

<style scoped>
  table {
    border: solid 1px;
    margin: 0 auto;
    padding: 0 auto;
    line-height: normal;
    /*文字左对齐*/
    text-align:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*display: -webkit-box;*/
    /*-webkit-box-orient: vertical;*/
  }
</style>
