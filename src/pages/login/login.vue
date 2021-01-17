<template>
  <div class="loginout">
    <div class="logindiv">
    </div>
    <div class="MyLoginNav">
      <h3>毕业要求达成情况应届毕业生自评调查问卷</h3>
    </div>
    <div class="login">
      <div class="rightlogin">
        <div class="logininner">
          <p class="loginp">WELCOME</p>
          <el-form :model="ruleForm"  ref="ruleForm" class="phone">
            <el-form-item  prop="stuId">
              <el-input  prefix-icon="el-icon-s-custom" v-model.number="ruleForm.stuId" autocomplete="off" placeholder="请输入学号"><</el-input>
            </el-form-item>
<!--            <el-form-item prop="password">-->
<!--              <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>-->
<!--            </el-form-item>-->
            <el-form-item>
              <el-button type="primary" @click="login('ruleForm')" style="height: 40px;width:100%;padding: 0px 10px"><span class="loginspan">下一步</span></el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {LOGIN} from '../../api/types'
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        ruleForm: {
          stuId :'',
        },
      };
    },
    methods: {
      //登录
      async login(){
        var {stuId} = this.ruleForm
        if(stuId){
          var a = stuId+''
          if(a.length == 12){
            var result = await LOGIN({stuId})
            if(result.status == 0){   //已经注册填过信息
              this.$router.push({name:'success',query:{
                  stuId:JSON.stringify(stuId)
                }})
              this.resetForm('ruleForm')    //清空所有值
            }else if(result.status == 1){   //还没注册
              this.$router.push({name:'userInfo',query:{
                  stuId:JSON.stringify(stuId)
                }})
            }else{
              this.$message({
                message:result.data.message,
                duration:1500,
                type:'error'
              })
            }
          }else{
            this.$message({
              message:'请输入正确的学号',
              duration:1500,
              type:'warning'
            })
          }
        }else{
          this.$message({
            message:'学号不能为空',
            duration:1500,
            type:'warning'
          })
        }
      },
      //情况表单
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,html{
    height: 100%;
  }
  .loginout{
    .MyLoginNav{
      position: relative;
      height: 60px;
      //background: transparent;
      background: rgba(255,255,255,0.3);
      z-index: 2;
      h3{
        margin: 0;
        padding: 0;
        height: 60px;
        line-height: 60px;
        color: white;
        letter-spacing: 5px;
        margin-left: 30px;
      }
    }
    .logindiv{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url("./login.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: 1;
    }
    .login{
      position: absolute;
      z-index: 2;
      top:50%;
      left:50%;
      transform: translate3d(-50%,-60%,0);

      width:400px;

      border: 1px solid rgba(233,233,233,1);
      box-sizing: border-box;
      border-radius: 8px;
      .rightlogin{
        width: 400px;
        height: 100%;
        padding: 30px;
        background: rgba(255,255,255,0.3);
        border-radius: 8px;
        .logininner{
          p.loginp{
            font-size: 25px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-bottom: 30px;
            letter-spacing: 5px;

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .el-input__inner,.el-button{
            /*输入框椭圆*/
            border-radius: 20px;
          }
          .remember .el-form-item{
            margin-bottom: 0px;
          }
        }
      }
    }
  }
  @media screen and(max-width: 499px){
    .MyLoginNav{
      h3{
        font-size: 18px!important;
        letter-spacing: 1px!important;
        margin-left: 15px!important;
      }
    }
    .login{
      border: 0!important;
      top:48% !important;
      width: 100vw!important;
      transform: translate3d(-50%,-50%,0) !important;
      .rightlogin{
        width: 90%!important;
        padding: 20px!important;
        background: rgba(255,255,255,0) !important;
        margin: auto;
        p.loginp{
          font-size: 35px!important;
          margin-bottom: 60px!important;
          color: rgb(238,238,238);
        }
        .el-form-item{

        }
        .loginspan{
          letter-spacing: 5px;
          font-size: 16px;
        }
      }
    }
  }
</style>
