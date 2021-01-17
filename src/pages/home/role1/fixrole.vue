<template>
  <div class="fixrolediv">
    <div class="fixroleblack"></div>
    <div class="fixrole" v-show="showrole1">
      <el-form :model="ruleForm" :rules="rules" label-position="right" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div class="title">
          <i class="el-icon-close" @click="close"></i>修改角色：
        </div>
        <el-form-item label="角色名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入角色名,不得超过八个字"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" placeholder="请输入备注，不得超过100个字"></el-input>
        </el-form-item>
        <el-form-item label="菜单权限" prop="menus">
          <el-tree
            :data="menus"
            ref="tree"
            show-checkbox
            node-key="id"
            :props="defaultProps"
            @check-change="handleCheckChange"
            v-show="menus"
          >
          </el-tree>
        </el-form-item>
      </el-form>
      <div style="height: 36px;margin-top: 30px;">
        <el-row style="float: right;">
          <el-button type="danger" style="padding: 10px 20px;" @click="close">取消</el-button>
          <el-button type="primary" style="padding: 10px 20px;" @click="updaterole">确定</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {REQMENUS,UPLOADROLE} from '../../../../api/types'
  export default {
    data () {
      return {
        ruleForm: {
          name: '',
          remark:'',
          menus:'',
        },
        rules:{
          name: [
            { required: true, message: '请输入角色名', trigger: 'blur' },
            { max: 8, message: '角色名不得超过8个字', trigger: 'blur' }
          ],
          remark: [
            { required: true, message: '请写备注', trigger: 'blur' },
            {max: 100, message: '不得超过100个字', trigger: 'blur' }
          ],
          menus: [
            { required: false},
          ],
        },
        defaultProps: {
          label: 'name'
        },
        pageNum:1,
        pageSize:1000,
      }
    },
    computed:{
      ...mapState(['menus','showrole1'])
    },
    props:{
      role:{
        required:true
      }
    },
    created(){
      if(this.menus.length<=0){
        this.reqmenus()
      }
    },
    mounted () {
      this.ruleForm.name = this.role.name
      this.ruleForm.remark = this.role.remark
    },
    watch:{
      role(newval,oldval){
        this.ruleForm.name = newval.name
        this.ruleForm.remark = newval.remark
      },
      deep:true,
    },
    methods: {
      ...mapActions(['reqMenus1','showfixrole']),
      //关闭窗口
      close(){
        this.$refs.tree.setCheckedKeys([])   //清除树状图之前选择的值
        this.showfixrole(false)
      },
      //获取选中的点
      handleCheckChange() {
        let res = this.$refs.tree.getCheckedNodes()
        let arr = []
        res.forEach((item) => {
          arr.push(item.id)
        })
        this.ruleForm.menus = arr
        console.log(this.ruleForm.menus)
      },
      //获取菜单列表
      async reqmenus(){
        var {pageNum,pageSize} = this
        var params = new FormData()
        params.append('pageNum',pageNum)
        params.append('pageSize',pageSize)
        this.loading = true
        var result = await REQMENUS(params)
        this.loading = false
        if(result.code == 200){
          this.reqMenus1(result.data.content)
        }else{
          var message = result.msg
          this.$message({
            message:message,
            type:'error',
            duration:1500
          })
        }
      },
      //修改角色
      async updaterole(){
        var {name,remark,menus} = this.ruleForm
        if(name.trim()&&remark.trim()){
          console.log(menus)
          var result = await UPLOADROLE(name,remark,menus)
          if(result.code == 200){
            this.$message({
              message:'修改成功',
              type:'success',
              duration:1500
            })
            this.resetForm('ruleForm')
            this.close()
          }else{
            var message = result.msg
            this.$message({
              message:message,
              type:'error',
              duration:1500
            })
          }
        }else{
          this.$message({
            message:'请输入角色的完整信息',
            type:'warning',
            duration:1500
          })
        }
      },
      //清空数据
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style lang="less">
  @keyframes myIn
  {
    from {
      margin-top: 60px;
      opacity: 0.8;
    }
    to {
      margin-top: 80px;
      opacity: 1;
    }
  }

  @-webkit-keyframes myIn /* Safari 与 Chrome */
  {
    from {
      margin-top: 60px;
      opacity: 0.8;
    }
    to {
      margin-top: 80px;
      opacity: 1;
    }
  }

  @media screen and(max-width: 799px){
    .addrole {
      width: 60%;
    }
  }

  .fixrolediv{
    .fixroleblack{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      background: rgba(0,0,0,.6);
      z-index: 2000;
    }
    .fixrole{
      animation: myIn .6s 0s ease;
      -webkit-animation: myIn .6s 0s ease; /* Safari 与 Chrome */
      width: 40%;
      min-width: 300px;
      position: absolute;
      left: 50%;
      margin-top: 80px;
      transform: translate3d(-50%,0,0);
      background-color: white;
      border-radius: 5px;
      padding: 20px;
      z-index: 2222;
      .title{
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 25px;
        i{
          height: 30px;
          margin-top: 10px;
          font-size: 22px;
          color: grey;
          float: right;
        }
        i:hover{
          color:black;
          cursor: pointer;
        }
      }
    }
  }
</style>
