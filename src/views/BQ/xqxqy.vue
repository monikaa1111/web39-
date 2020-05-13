<template>
    <div>
        <top></top>
        <div>
        <el-container>
        <el-header style="margin-top: 50px;" >{{id}}</el-header>
        <el-main>
                <span style="color:#999;">金额:{{jinge}}</span>
                <span style="color:#999">&nbsp;&nbsp; 类型:{{leixing}}</span>
                <el-button style="margin-left:500px;color:#fff;background-color:rgb(255,128,128)">参与项目</el-button>
                <span style="margin-left:40px;font-size:20px;">项目描述:</span>
                <el-input 
                type="textarea"
                placeholder="请输入内容"
                v-model="jianjie">
                </el-input>
                <span style="margin-left:40px;font-size:20px;">项目文档:</span>
                 <el-input 
                type="textarea"
                placeholder="请输入内容"
                v-model="jianjie">
                </el-input>
                 <p>{{xiangmuwendang1}}</p>
                
        </el-main>
        </el-container>
        </div>
    </div>
</template>

<script>
import top from '@/components/top'
export default {
    components:{
      top,
    },
    data(){
        return{
            id:"项目名称",
            leixing:"其他",
            jinge:"290",
            jianjie:"fcdfrgvfcrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
            xiangmuwendang:'',
        }

    }
}
</script>

<style scoped>
.el-header, .el-footer {
    width: 700px; 
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    margin:auto;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 700px;
    margin: auto;
  }
  body > .el-container{
      margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside{
      line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside{
      line-height: 320px;
  }
</style>