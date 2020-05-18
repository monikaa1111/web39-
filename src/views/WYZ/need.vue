<template>
    <div class="kuang">
        <h3 style="color: #303133;text-align:center;margin-top:15px;margin-bottom:15px">发布需求</h3>
        <div class="k1">
            <p class="k1-1">1、请提供详细的项目资料，以便于我们为您推荐合适的开发者</p>
            <p class="k1-1">2、整包项目收费标准：报价含14%的平台服务费，如需开票另收税费9.36%</p>
            <p class="k1-1">3、项目发布之后，客栈工作人员将在半个工作日内联系您</p>
        </div>
        <div class="one">
           <span class="one-1">第一步：项目名称</span>
           <span class="one-2">(了解更多)</span>
        </div>
        <el-form :model="demandForm" ref="demandForm">
            <div class="one1">
                <el-form-item  prop="proname">
                    <el-input v-model="demandForm.proname" placeholder="项目名不能为空"></el-input>
                </el-form-item>
            </div>
        <!-- <div class="one1"><el-input v-model="input" placeholder="项目名不能为空"></el-input></div> -->
        <div class="one">
           <span class="one-1">第二步：我的项目类型（可多选）</span>
        </div>
        <div class="two">
            <el-form-item prop="protype">
             <el-checkbox-group v-model="demandForm.protype">
                <el-checkbox label="Android"></el-checkbox>
                <el-checkbox label="iOS"></el-checkbox>
                <el-checkbox label="pc网站"></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
        </div>
        <div class="one">
           <span class="one-1">第三步：项目预算（元）</span>
        </div>
        <div class="three">
            <el-form-item prop="probuget">
                <el-input v-model="demandForm.probuget" placeholder="请输入您的项目预算"></el-input>
            </el-form-item>
            </div>
        <div class="one">
           <span class="one-1">第四步：我的项目介绍</span>
        </div>
        <div class="four">
            <el-form-item prop="desc">
            <el-input  :rows="2" placeholder="请输入内容" v-model="demandForm.desc"></el-input>
            </el-form-item>
        </div>
        <div class="five">
             <el-upload
                class="upload-demo"
                action
                multiple
                :limit="3"
                :http-request="uploadfile"
                >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
        <div class="six">
            <el-row>
            <el-button type="primary"  @click="submitForm('demandForm')">发布</el-button>
            <el-button type="info" @click="resetForm('demandForm')">重置</el-button>
            </el-row>
        </div>  
        </el-form>    
    </div>
</template>
<script>
export default {
    data() {
    return {
       fileList:{},
       demandForm:{
            proname: '',
            protype:[],
            probuget:'',
            desc:'',
       }
    }
  },
   methods: {
       uploadfile(par){
      console.log(par);
      this.fileList=par.file;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
    // this.$refs[formName].validate((valid) => {
        let fromdata=new FormData()
        fromdata.append("demand_file",this.fileList)
        fromdata.append("demand_budget",this.demandForm.probuget)
        fromdata.append("demand_detail",this.demandForm.desc)
        fromdata.append("demand_name",this.demandForm.proname)
        fromdata.append("demand_type",this.demandForm.protype)
        this.$axios.post('/wyz/insert/demand', fromdata).then(res=>{
          console.log(res);
        })
    //   })
    }
    },
}
</script>
<style>
    .six{
         height: 80px;
         width: 900px;
         margin: 20px auto;  
    }
    .five{
         height: 80px;
         width: 900px;
         margin: 20px auto;   
    }
    .four{
         height: 80px;
         width: 900px;
         margin: 20px auto;   
    }
    .three{
         height: 40px;
         width: 450px;
         margin: 20px 50px 20px;   
    }
    .two{
         height: 40px;
         width: 900px;
         margin: 20px auto;   
    }
    .one1{
         height: 40px;
         width: 450px;
         margin: 20px 50px 20px;   
    }
    .one-1{
        height: 30px;
        width: 100px;
        line-height: 30px;
        font-size: 13px;
        margin-left: 20px;
    }
    .one-2{
        height: 30px;
        width: 100px;
        line-height: 30px;
        font-size: 13px;
        margin-left: 20px;
        color: #73AFE0;
    }
    .one{
         height: 30px;
         width: 900px;
         margin: 10px auto;    
    }
    *{
        margin: 0px;
        padding: 0px;
    }
    .kuang{
        height: 1000px;
        width: 1000px;
        margin: auto;
        margin-top: 150px;
    }
    .k1{
        height: 90px;
        width: 900px;
        margin: auto;
        background-color: #EBF5FE;
    }
    .k1-1{
        height: 30px;
        width: 800px;
        margin: auto;
        line-height: 30px;
        font-size: 13px;
        margin-left: 20px;
        color: #73AFE0;
    }
</style>