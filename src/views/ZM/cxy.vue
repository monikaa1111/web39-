<template>
    <div id="box">
        <top></top>
        <div class="top">
            <div class="top_right">平台程序员兼职</div>
            <p>共有<span style="float:none"> 43241 </span>位兼职程序员符合条件</p>
        </div>
        <!-- 分类选择 -->
        <div class="xz">
            <div class="xz1">
                <span>角色</span>
                <a href="#">全部</a>
                <a href="#" title="产品经理">产品经理</a>
                <a href="#" title="设计师">设计师</a>
                <a href="#" title="前端">前端</a>
                <a href="#" title="移动端">移动端</a>
                <a href="#" title="小程序">小程序</a>
                <a href="#" title="游戏">游戏</a>
                <a href="#" title="后端">后端</a>
                <a href="#" title="测试">测试</a>
                <a href="#" title="游戏">游戏</a>
                <a href="#" title="DBA">DBA</a>
                <a href="#" title="运维">运维</a>
            </div>
            <div class="xz1">
                <span>地点</span>
                <a href="#" title="北京">北京</a>
                <a href="#" title="上海">上海</a>
                <a href="#" title="深圳">深圳</a>
                <a href="#" title="杭州">杭州</a>
                <a href="#" title="广州">广州</a>
                <a href="#" title="成都">成都</a>
                <a href="#" title="武汉">武汉</a>
                <a href="#" title="南京">南京</a>
                <a href="#" title="西安">西安</a>
                <a href="#" title="重庆">重庆</a>
                <a href="#" title="长沙">长沙</a>
                <a href="#" title="厦门">厦门</a>
            </div>
            <div class="xz1">
                <span>行业</span>
                <a href="#">全部</a>
                <a href="#" title="电子商务">电子商务</a>
                <a href="#" title="社交">社交</a>
                <a href="#" title="人工智能">人工智能</a>
                <a href="#" title="媒体门户">媒体门户</a>
                <a href="#" title="工作软件">工具软件</a>
                <a href="#" title="消费生活">消费生活</a>
                <a href="#" title="金融">金融</a>
                <a href="#" title="医疗健康">医疗健康</a>
                <a href="#" title="企业服务">企业服务</a>
            </div>
            <div class="xz1">
                <span>其他</span>
                <span style="margin: 0px 0px 0px 15px;">排序</span>
                <el-row class="block-col-2">
                <el-col :span="12">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="width:130px;">
                        默认<i class="el-icon-arrow-down el-icon--right" style="margin-left: 90px;"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>默认</el-dropdown-item>
                        <el-dropdown-item>评价从高到低</el-dropdown-item>
                        <el-dropdown-item>价格从高到低</el-dropdown-item>
                        <el-dropdown-item>价格从低到高</el-dropdown-item>
                        <el-dropdown-item>最近有空</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                </el-row>
                <span style="margin: 0px 0px 0px 15px;">自由职业</span>
                <el-row class="block-col-2">
                <el-col :span="12">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="width:130px;">
                        不限<i class="el-icon-arrow-down el-icon--right" style="margin-left: 90px;"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>不限</el-dropdown-item>
                        <el-dropdown-item>是</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                </el-row>
                <span style="margin: 0px 0px 0px 15px;">认证开发者</span>
                <el-row class="block-col-2">
                <el-col :span="12">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="width:130px;">
                        不限<i class="el-icon-arrow-down el-icon--right" style="margin-left: 90px;"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>不限</el-dropdown-item>
                        <el-dropdown-item>产品经理</el-dropdown-item>
                        <el-dropdown-item>项目经理</el-dropdown-item>
                        <el-dropdown-item>自由工作者</el-dropdown-item>
                        <el-dropdown-item>云端工作者</el-dropdown-item>
                        <el-dropdown-item>整包协助开发者</el-dropdown-item>
                        <el-dropdown-item>驻场开发者</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                </el-row>
            </div>
        </div>
        <div class="zhong">
            <div class="zhong_left">
                首页>平台程序员兼职
            </div>
            <div class="zhong_right" title="最新好评">最新好评</div>
            <div class="zhong_right" title="按月雇佣">按月雇佣</div>
            <div class="zhong_right" title="整包项目">整包项目</div>
        </div>
        <!-- 程序员简约信息 -->
        <div class="xx">
            <div class="tx">
                <div class="tx1"></div>
                <el-button size="mini" style="margin:20px 5px;">已签约</el-button>
            </div>
            <div class="zhong_nr">
                <span class="bt">吉林市优辆汽车科技服务有限公司</span>
                <span class="bt">iOS开发</span>
                <span class="bt1">吉林</span>
                <span class="bt1">出行用车</span>
                <span class="bt1">3年</span>
                <div class="xj">
                <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
                </div>
                <p>
                    <span style="font-weight:bold;">技能：</span>
                    <span style="font-size: 14px;">Objective-C</span>
                </p>
                <p>
                    <span style="font-weight:bold;">作品：</span>
                    <a href="#">优辆车服</a>
                    <a href="#">差旅天下</a>
                    <a href="#">优辆约车</a>
                </p>
                <p>
                    <span class="yysh">可工作地点：</span>
                    <span class="yysh" style="margin: 0px 60px 0px 0px ;">远程</span>
                    <span class="yysh">可预约时间：</span>
                    <span class="yysh">工作日5:00-22:00、周末05:00-22:00</span>
                </p>
            </div>
            <div class="xx_right">
                <p>
                    <span>300 </span>
                    元/天
                </p>
                <el-button type="primary" style="margin:10px 0px 10px 10px">按天预约</el-button>
                <el-button type="primary" plain>按月雇佣</el-button>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>
<script>
import bottom from '../../components/dibu'
import top from '../../components/top'
    export default {
    data() {
      return {
        value: 3.5
      }
    },
    components:{
        bottom,
        top
    },
  }
</script>

<style scoped>
.xx_right p{
    line-height: 30px;
    font-size: 14px;
    /* border: 1px solid red; */
    height: 30px;
    color: #2994f2;

}
.xx_right p span{
    margin:0px 0px 0px 20px;
    font-size: 25px;
    margin-bottom: 10px;
    color: #2994f2;
}
.xx_right{
    border-left: 1px solid #ccc;
    height: 162px;
    width: 130px;
    float: left;
    padding: 0px 0px 0px 40px;
}
.yysh{
    font-size: 14px;
    color: #666;
}
.zhong_nr p a:hover{
    color: #258fe6;
}
.zhong_nr p a{
    color: #333333;
    text-decoration:none;
    font-size: 14px;
}
.zhong_nr p{
    /* border: 1px solid red; */
    float: left;
    width: 600px;
    margin: 4px 10px ;

}
.xj{
    float: left;
    /* border: 1px solid red; */
    width: 690px;
    margin: 10px ;
}
.zhong_nr{
    width: 650px;
    /* border: 1px solid red; */
    float: left;
    margin-left:50px ;
}
.bt1{
    float: left;
    /* border: 1px solid red; */
    margin-left:10px ;
    font-size: 12px;
    color:rgba(0, 0, 0, .6);
    font-weight:bold;
    padding: 2px 8px;
    border-radius:3px ;
    margin-top: 3px;
    background-color: #e8e8e8;
}
.bt{
    float: left;
    /* border: 1px solid red; */
    margin-left:10px ;
    font-size: 20px;
    color: #333333;
}
.tx1{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid rebeccapurple;
}
.tx{
    height: 166px;
    width: 80px;
    /* border: 1px solid red; */
    float: left;

}
#box{
    background-color: #F7F7F7;
}
.top{
    width: 960px;
    height: 54px;
    border: 1px solid #eeeded;
    margin:20px auto;
    padding: 0px 20px;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.top_right{
    /* border: 1px solid eeeded; */
    width: 130px;
    margin-top:17px ;
    color: #258fe6;
    float: left;
    font-size: 14px;

}
.top p{
    float:right;
    margin-top:17px ;
    color: #919AA7;
    font-size: 14px;
}
.top p span{
    color: #258fe6;
}  
.xz{
    width: 960px;
    height: 244px;
    padding:20px;
    border: 1px solid #eeeded;
    margin: 0px auto;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.xz1{
    height: 40px;
    width: 890px;
    margin: 0px 0px 10px;
    float: left;
    border-bottom: 1px solid #eeeded;
    padding: 7px 15px;
    float: left;

}
.xz1 a{
    padding: 7px 15px;
    color: #555555;
    text-decoration: none;
    font-size: 14px;
}
.xz1 a:hover{
    color: #258fe6;
    background-color: #b1d7fe;
}
span{
    color: #555;
    float: left;
}
.el-dropdown-link {
    cursor: pointer;
    /* color: #409EFF; */
}
.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.el-row{
    float: left;
    margin: 0px 20px ;
    border: 1px solid #ccc;
    padding: 0px 10px;
    width: 150px;
    /* height: 50px; */
}
.zhong{
    width: 1000px;
    height: 38px;
    /* border: 1px solid #eeeded; */
    margin: 12px auto;
}
.zhong_left{
    line-height: 38px;
    color: #919AA7;
    font-size: 14px;
    float: left;
}
.zhong_right{
    float: right;
    line-height: 28px;
    border: 1px solid rgba(231, 231, 231, 1);;
    border-radius: 5px;
    height: 28px;
    /* margin-top: 5px; */
    padding: 3px 20px;
    font-size: 14px;
    background-color: white;
    color: #666;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.xx{
    height: 160px;
    width: 960px;
    padding: 30px 20px;    
    border: 1px solid rgba(231, 231, 231, 1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 10px auto;
    background-color: white;
}
</style>