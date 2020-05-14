<template>
    <div class="kuang">
          <div class="k1">邮箱重新设置密码</div>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item   prop="email">
              <el-input v-model="ruleForm.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <div class="k2" @click="djyx">发送重置邮件</div>
            <div class="k4"><el-input v-model="ruleForm.input" placeholder="请输入验证码"></el-input></div>
           <el-form-item  prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入新的密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码"></el-input>
          </el-form-item> 
          <div class="k3">重置密码</div>
        </el-form>
    </div>
</template>
<script>
      export default {
        data() {
          var validateEmail = (rule, value, callback) => {
            if (value =='') {
              callback(new Error('请输入邮箱'));
            } else if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(value)){
              callback(new Error('请输入正确的邮箱'));
            }
        
          };
       var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!(/9]{6,18}$/).test(value)) {  
          callback(new Error('密码必须是6~18位之间的数字'));
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      
          return {
            ruleForm:{
              email:'',
              pass:'',
              checkPass:'',
              input:'',
            },
             rules: {
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
          }
        },
        //自定义函数的
        methods:{
          djyx(){
              this.$axios.get('/wyz/communicate',{
                user_email:this.ruleForm.email
              }).then(res=>{
                console.log(res);
              })
          }
        },
      
    }
</script>
<style>
    .kuang{
      width: 400px;
      height: 400px;
      margin-top: 80px;
      margin-left: 400px;
      /* border: 1px solid red; */
    }
    .k1{
      text-align: center;
      line-height: 80px;
      font-size: 18px;
      height: 80px;
      margin-left: 80px;
    }
    .k2{
      width: 300px;
      margin-left: 100px;
      margin-bottom: 20px;
      text-align: center;
      line-height: 40px;
      font-size: 13px;
      background-color: #4289DB;
      border-radius: 3px;
      color: white;
      cursor: pointer;
   }
   .k4{
      width: 300px;
      margin-left: 100px;
      margin-bottom: 20px;
   }
   .k2:hover{
     background-color: #1372BD;
   }
   .k3{
     width: 300px;
      margin-left: 100px;
      margin-bottom: 20px;
      text-align: center;
      line-height: 40px;
      font-size: 13px;
      background-color: #4289DB;
      border-radius: 3px;
      color: white;
      cursor: pointer;
   }
   .k3:hover{
     background-color: #1372BD;
   }
</style>