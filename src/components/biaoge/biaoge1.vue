<template>
  <div class="biaoge1">
    <div class="keChengListDiv">
      <ul style="border-top: 1px solid black">
        <div class="leftDiv">
          <span>课程类型</span>
        </div>
        <div class="minDiv">
          <li>
            <div class="nameDiv">
                  <span>
                   课程名称
                  </span>
            </div>
            <div class="choicelist" style="height: 35px;line-height: 35px;font-size: 18px;">
              <span>支撑高度</span>
            </div>
          </li>
        </div>
      </ul>
      <ul>
        <div class="leftDiv">
          <span>数学</span>
        </div>
        <div class="minDiv">
          <li>
            <div class="nameDiv">
                  <span>
                    高等数学
                  </span>
            </div>
            <div class="choicelist">
              <el-radio-group v-model="radio">
                <el-radio :label="3">非常高</el-radio>
                <el-radio :label="6">较高</el-radio>
                <el-radio :label="9">一般</el-radio>
                <el-radio :label="6">较低</el-radio>
                <el-radio :label="9">非常低</el-radio>
              </el-radio-group>
            </div>
          </li>
          <li>
            <div class="nameDiv">
                  <span>
                    高等数学
                  </span>
            </div>
            <div class="choicelist">
              <el-radio-group v-model="radio">
                <el-radio :label="3">非常高</el-radio>
                <el-radio :label="6">较高</el-radio>
                <el-radio :label="9">一般</el-radio>
                <el-radio :label="6">较低</el-radio>
                <el-radio :label="9">非常低</el-radio>
              </el-radio-group>
            </div>
          </li>
          <li>
            <div class="nameDiv">
                  <span>
                    高等数学
                  </span>
            </div>
            <div class="choicelist">
              <el-radio-group v-model="radio">
                <el-radio :label="3">非常高</el-radio>
                <el-radio :label="6">较高</el-radio>
                <el-radio :label="9">一般</el-radio>
                <el-radio :label="6">较低</el-radio>
                <el-radio :label="9">非常低</el-radio>
              </el-radio-group>
            </div>
          </li>
          <li>
            <div class="nameDiv">
                  <span>
                    高等数学
                  </span>
            </div>
            <div class="choicelist">
              <el-radio-group v-model="radio">
                <el-radio :label="3">非常高</el-radio>
                <el-radio :label="6">较高</el-radio>
                <el-radio :label="9">一般</el-radio>
                <el-radio :label="6">较低</el-radio>
                <el-radio :label="9">非常低</el-radio>
              </el-radio-group>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data () {
      return {}
    },
    methods: {},
    watch: {},
    computed: {},
    created () {

    },
    mounted () {

    },
    beforeDestroy () {

    },
    destroyed () {

    },
  }
</script>

<style lang="less">
  .biaoge1{
    .keChengListDiv{
      margin-top: 20px;
      ul{
        color: rgb(20,20,20);
        margin: 0;
        padding: 0;
        position: relative;
        &:before,&:after{
          content: '';
          display: table;
          clear: both;
        }
        div{
          display: inline-block;
          text-align: center;
          box-sizing: border-box;
        }
        .leftDiv{
          width: 25%;
          height: 100%;
          position: absolute;
          border-bottom: 1px solid black;
          border-left: 1px solid black;
          span{
            position: absolute;
            font-size: 18px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            color: rgb(20,20,20);
          }
        }
        .minDiv{
          width: 75%;
          float: right;
          li{
            list-style: none;
            position: relative;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            &:before,&:after{
              content: '';
              display: table;
              clear: both;
            }
            .nameDiv{
              width: 66%;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              span{
                position: absolute;
                font-size: 18px;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%,-50%,0);
              }
            }
            .choicelist{
              width: 34%;
              float: right;
              border-left: 1px solid black;
              border-right: 1px solid black;
              .el-radio{
                text-align: left;
                display: block;
                height: 25px;
                line-height: 25px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and(max-width: 768px) {
    .biaoge1{
      .keChengListDiv{
        margin: 20px 0;
        ul{
          color: rgb(20,20,20);
          margin: 0;
          padding: 0;
          position: relative;
          &:before,&:after{
            content: '';
            display: table;
            clear: both;
          }
          div{
            display: inline-block;
            text-align: center;
            box-sizing: border-box;
          }
          .leftDiv{
            width: 25%;
            height: 100%;
            position: absolute;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            span{
              position: absolute;
              font-size: 16px;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%,-50%,0);
              color: rgb(20,20,20);
            }
            .keType{
              font-size: 14px;
            }
          }
          .minDiv{
            width: 75%;
            float: right;
            li{
              list-style: none;
              position: relative;
              margin: 0;
              padding: 0;
              border-bottom: 1px solid black;
              border-left: 1px solid black;
              &:before,&:after{
                content: '';
                display: table;
                clear: both;
              }
              .nameDiv{
                width: 60%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                span{
                  position: absolute;
                  font-size: 16px;
                  top: 50%;
                  left: 50%;
                  transform: translate3d(-50%,-50%,0);
                }
              }
              .choicelist{
                width: 40%;
                float: right;
                border-left: 1px solid black;
                border-right: 1px solid black;
                .el-radio{
                  text-align: left;
                  display: block;
                  height: 22px;
                  line-height: 22px;
                }
              }
              .myZhiCheng{
                font-size: 16px!important;
              }
            }
          }
        }
      }
    }
  }
</style>
