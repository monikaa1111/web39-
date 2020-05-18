<template>
  <div>
          <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
    <top></top>
    <el-container>
      <el-header>
        <h2>完善个人简历后，才能申请签约开发者进行接单</h2>
      </el-header>
    </el-container>
    <div class="aaa">
      <div class="aaaa">
        <p class="aaa1">成为程序员客栈签约开发者后，才能在平台接单，包括平台派单类项目、雇佣项目等，并 享受交易担保等服务。</p>
        <p class="aaa1">申请签约需要满足以下条件：</p>
        <p class="aaa1">1.三年及以上正规互联网工作经验</p>
        <p class="aaa1">2.按签约规则如实填写个人简历</p>
        <p class="aaa1">3.具有契约精神、服务意识，能按约定高效完成开发</p>
        <p class="aaa1">4.不在程序员客栈黑名单（无开发黑历史）</p>
      </div>
      <div class="aaaa">
        <span class="aaaa2">实名认证</span>
        <span>
          <a href>去认证</a>
        </span>
      </div>
      <div class="aaaa3">
        <div class="aaaa4">
          <span class="aaaa5">基本信息</span>
          <div class="aaaa6"></div>
          <div class="ab">
            <!-- <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            > -->
              <el-form-item label="昵称" prop="name" style="width:320px;">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="工作状态" prop="region">
                <el-select v-model="ruleForm.region1" placeholder="请选择">
                  <el-option label="求职" value="qiuzhi"></el-option>
                  <el-option label="自由职业" value="ziyouzhiye"></el-option>
                  <el-option label="正常工作" value="zcgz"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="职业方向" prop="region">
                <el-select v-model="ruleForm.region2" placeholder="请选择">
                  <el-option v-for="(item,index) in ss" :key="index" :value="item.name" :label="item.name"></el-option>
                </el-select>
                <el-select v-model="ruleForm.region3" placeholder="请选择">
                  <el-option v-for="(item,index) in sss" :key="index" :value="item.name" :label="item.name"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所在地区" prop="region">
                <el-select v-model="ruleForm.region4" placeholder="请选择活动区域">
                  <el-option  v-for="(item,index) in sws" :key="index" :value="item.name" :label="item.name"></el-option>
                  <el-option label="西安" value="xian"></el-option>
                </el-select>
                <el-select v-model="ruleForm.region5" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工作日" required>
                <el-date-picker
                  v-model="value1"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="周末" required>
                <el-date-picker
                  v-model="value2"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']"
                ></el-date-picker>
              </el-form-item>
          </div>
        </div>
      </div>
      <div class="aaaad">
        <div class="aaaa4">
          <span class="aaaa5">个人信息</span>
        </div>
        <div class="ab">
            <el-form-item label="工作经历" required>
              <el-date-picker
                v-model="value3"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="个人介绍" required>
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea1"
                style="width:500px"
              ></el-input>
            </el-form-item>
            <el-form-item label="技能特长" required>
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea2"
                style="width:500px"
              ></el-input>
            </el-form-item>
            <el-form-item label="学历">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai1"></el-option>
                <el-option label="区域二" value="beijing2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="作品" required>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </el-form-item>
            <div class="aaaa9">
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" class="ap">立即创建</el-button>
              </el-form-item>
            </div>
        </div>
      </div>
    </div>
          </el-form>
  </div>
</template>

<script>
import top from "@/components/top";
export default {
  components: {
    top
  },
  data() {
    return {
        ss:[
            {name:'产品经理'},
            {name:'设计师'},
            {name:'前端'},
            {name:'移动端'},
            {name:'小程序'},
            {name:'游戏'},
            {name:'后端'},
            {name:'测试'},
        ],
        sss:[
            {name:'产品经理'},
            {name:'项目经理'},
            {name:'产品其他'},
        ],
        sws:[
            {name:'北京'},
            {name:'上海'},
            {name:'天津'},
            {name:'重庆'},
            {name:'河北'},

        ],
      value1: "",
      value2: "",
      value3: "",
      textarea1: "",
      textarea2: "",
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        region1: "",
        region2: "",
        region3: "",
        region4: "",
        region5: "",
        region6: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.aaa {
  width: 100%;
}
.aaaa {
  width: 1200px;

  margin: 10px auto;
  /* border: 1px solid black; */
  /* box-shadow: 2px 2px darkgray; */
}
.aaaa3 {
  width: 1200px;
  height: 500px;
  margin: 10px auto;
  /* border: 1px solid black; */

  /* box-shadow: 2px 2px darkgray; */
  position: relative;
  top: 0%;
  left: 0%;
}
.aaa1 {
  font-size: 16px;
  margin-top: 16px;
}
.aaaa2 {
  font-size: 18px;
  margin: 10px;
}
.aaaa4 {
  width: 1200px;
  height: 50px;
  /* border: 1px solid black; */
}
.aaaa5 {
  font-size: 18px;
  line-height: 50px;
  margin-left: 20px;
}
.aaaa6 {
  width: 300px;
  height: 100px;
  position: absolute;
  top: 0.5%;
  left: 80%;
}
.aaaa9 {
  width: 300px;
  height: 100px;
  position: absolute;
  top: 104%;
  left:4%;
}
.ab {
  width: 1200px;
  height: 500px;
  /* border: 1px solid black; */
  margin: 20px auto;
  margin-left: 20px;
}
.aaaad {
  width: 1200px;
  height: 500px;
  margin: 10px auto;
  /* border: 1px solid black; */

  /* box-shadow: 2px 2px darkgray; */
  position: relative;
  top: 0%;
  left: 0%;
}
</style>