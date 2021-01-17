<template>
  <div class="role">
    <div style="padding: 20px;">
        <el-button type="primary" icon="el-icon-plus" style="margin-top: -5px;" @click="addrole">新增角色</el-button>
        <transition name="slide-fade" ><AddRole v-show="showrole"></AddRole></transition>
        <transition name="slide-fade" ><FixRole v-show="showrole1" v-bind:role="role"></FixRole></transition>
        <div class="lis">
          <el-table
            :data="roles"
            stripe
            border
            style="width: 100%;"
            v-show="Roles"
          >
            <el-table-column
              prop="name"
              label="名称"
              min-width="120"
            >
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注"
              min-width="250"
            >
            </el-table-column>
            <el-table-column
              prop="createBy"
              label="更新者"
              min-width="120"
            >
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="更新时间"
              min-width="100"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              min-width="150"
            >
              <template slot-scope="scope">
                <el-button @click="fix(scope.row)" type="text" class="rolebutton">修改权限</el-button>
                <el-button type="text" class="rolebutton" @click="deleterole">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pc">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="Roles.totalSize">
          </el-pagination>
        </div>
        <div class="mobile">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="Roles.totalSize">
          </el-pagination>
        </div>
      </div>
  </div>
</template>

<script>
  import {REQROLES} from '../../../../api/types'
  import {mapActions,mapState} from 'vuex'
  import AddRole from './addrole'
  import FixRole from './fixrole'
  import '../../../../assets/animate.css'
  export default {
    data () {
      return {
        pageSize:12,        //行数
        pageNum:1,         //当前页
        loading:false,      //是否加载中
        Roles:[],           //角色全部信息列表
        roles:[],           //单纯角色信息列表
        role:'',            //选中角色
      }
    },
    computed:{
      ...mapState(['showrole','showrole1'])
    },
    components:{
      AddRole,
      FixRole,
    },
    created(){
      this.reqrolespage(1)
    },
    mounted () {
      this.choiceMenuId('role')
    },
    methods: {
      ...mapActions(['choiceMenuId','showaddrole','showfixrole']),
      handleSizeChange(val) {
        this.reqrolespage(val)
      },
      handleCurrentChange(val) {
        this.reqrolespage(val)
      },
      //获取角色列表
      async reqrolespage(pagenum){
        this.loading = true
        this.pageNum = pagenum
        var {pageNum,pageSize} = this
        if(pageNum&&pageSize){
          var params = new FormData()
          params.append('pageNum',pageNum)
          params.append('pageSize',pageSize)
          var result = await REQROLES(params)
          if(result.code == 200){
            this.loading = false
            this.Roles = result.data
            this.roles = this.Roles.content
            this.roles.map(item=>{
              item.createTime = item.createTime.slice(0,10)
            })
            console.log(this.roles)
          }else{
            this.loading = false
            var message = result.msg
            this.$message({
              message:message,
              duration:1500,
              type:'error'
            })
          }
        }
      },
      //修改
      fix(item){
        this.role = item
        this.showfixrole(true)
      },
      //新增角色
     addrole(){
        this.showaddrole(true)
      },
      //修改角色
      deleterole(){
        this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
      }
    },
  }
</script>

<style lang="less">
  @media screen and(max-width: 500px){
    .rolebutton{
      margin-left: 10px!important;
    }
  }
  .role{
    width: 100%;
    margin-top: 10px;
    background-color: white;
    .lis{
      margin-top: 30px;
      min-height: 637px;
    }
    div.cell{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    td{
      padding: 4px 0!important;
    }
    .rolebutton{
      margin-left: 20px;
    }
    .el-pagination{
      margin-top: 15px;
      height: 40px;
      text-align: center;
    }
  }
</style>
