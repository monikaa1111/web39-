<template>
    <div class="box">
        <!-- <div class="box-left"> -->
        <el-tabs :tab-position="tabPosition" style="height: 450px;">
            <el-tab-pane label="我的工作">
                <div class="a">
                    <div :class="step==0 ? class1 : class2" @click="chengcolor(0)">待办任务(0)</div>
                    <div :class="step==1 ? class1 : class2" @click="chengcolor(1)">平台项目 (0)</div>
                    <div :class="step==2 ? class1 : class2" @click="chengcolor(2)">雇佣项目 (0)</div>
                    <div :class="step==3 ? class1 : class2" @click="chengcolor(3)">云端工作 (0)</div>
                </div>
                <div class="nav_right">
                    <div v-if="step==0">
                        <work></work>
                    </div>
                    <div v-if="step==1">
                    </div>
                    <div v-if="step==2">
                        <work></work>
                    </div>
                    <div v-if="step==3">
                        <work></work>
                    </div>
               </div>
                
            </el-tab-pane>
            <el-tab-pane label="主页管理">配置管理</el-tab-pane>
            <el-tab-pane label="技术信用">角色管理</el-tab-pane>
            <el-tab-pane label="协作群组">定时任务补偿</el-tab-pane>
            <el-tab-pane label="资金账户">用户管理</el-tab-pane>
            <el-tab-pane label="信息设置">配置管理</el-tab-pane>
            <el-tab-pane label="API交易平台">角色管理</el-tab-pane>
            <el-tab-pane label="代码托管GitInn">定时任务补偿</el-tab-pane>
            <el-tab-pane label="其他">定时任务补偿</el-tab-pane>
        </el-tabs>
        <!-- </div> -->
    </div>
</template>
<script>
import work from './infopeople/work'
export default {
    data() {
      return {
        step:0,
        class1:"item itemactive",
        class2:"item",
        tabPosition: 'left'
      };
      
    },
    components:{
        work
    },
    methods:{
        chengcolor(n){
            this.step=n;
        }
    }
  };
</script>
<style >
    *{
        margin: 0px;
        padding: 0px;
    }
    .box{
        width: 1000px;
        height: 500px;
        border:1px solid black;
        margin: 50px auto;
        padding: 20px;
    }
    .a{
        width: 500px;
        height: 30px;
        /* border:1px solid black; */
    }
    .item{
        width: 100px;
        height: 20px;
        text-align: center;
        margin-left: 10px;
        font: 13px;
        float: left;
        margin: 0px 0px;
        border-right:1px solid #999;
        line-height: 20px;
    }
    .itemactive{
    background: #409eff;
    color: #333;
    float: left
;
    }
</style>