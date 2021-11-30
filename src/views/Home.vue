<template>
  <div style="padding: 10px">
<!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary">add</el-button>
      <el-button type="primary">del</el-button>
      <el-button type="primary">update</el-button>
    </div>
<!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-row :gutter="4">
        <el-input v-model="seach" placeholder="请输入关键字" style="width: 20%"/>
        <el-button type="primary" circle style="margin-left: 5px ">查询</el-button>
      </el-row>
    </div>
<!--    表格区域-->
    <div style="margin: 10px 0">
      <el-table :data="tableData"  border>
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="230">
          <template #default>
            <el-button type="text" size="small" @click="handleClick">
              <el-button type="primary" size="mini" round>详情</el-button>
            </el-button>
            <el-button type="text" size="small">
              <el-button type="success" size="mini" round>编辑</el-button>
            </el-button>
            <el-button type="text" size="small" >
                <el-popconfirm title="Are you sure to delete this?">
                  <template #reference>
                    <el-button type="danger" size="mini" round>删除</el-button>
                  </template>
                </el-popconfirm>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--    分页-->
      <div class="demo-pagination-block" style="margin: 10px 10px">
        <!--      <span class="demonstration">All combined</span>-->
        <el-pagination
            v-model:currentPage="currentPage4"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            :current-page="1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="30"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>





<!--    <div>-->
<!--      <el-table :data="tableData" style="width: 100%" height="250">-->
<!--        <el-table-column fixed prop="date" label="Date" width="150" />-->
<!--        <el-table-column prop="name" label="Name" width="120" />-->
<!--        <el-table-column prop="state" label="State" width="120" />-->
<!--        <el-table-column prop="city" label="City" width="320" />-->
<!--        <el-table-column prop="address" label="Address" width="600" />-->
<!--        <el-table-column prop="zip" label="Zip" width="120" />-->
<!--      </el-table>-->
<!--    </div>-->

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

export default {
  setup() {
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`)
    }

    return {
      currentPage1: ref(5),
      currentPage2: ref(5),
      currentPage3: ref(5),
      currentPage4: ref(4),
      handleSizeChange,
      handleCurrentChange,
    }
  },
    data() {
      return {
        seach:'',
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office',
          },
        ],
      }
    },
  methods: {
    handleClick() {
      console.log('click')
    },
  },
    name: "Home",
    components: {
    }
  }
</script>


