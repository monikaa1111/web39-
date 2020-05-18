<template>
    <div>
        <top></top> 
        <el-carousel :interval="5000" arrow="always" id="boo">
            <el-carousel-item v-for="item in list.length" :key="item" >
              <img :src="list[item-1]"/>
                </el-carousel-item>
          </el-carousel>
          <div>
            <h2 class="d">程序员客栈</h2>
            <p class="d1">提供您所需的全套软件开发服务</p>
            <el-row class="d2"> 
            <el-button type="primary" class="d3">发布您的需求</el-button>
            <a href="jianli"><el-button  class="d3">申请签约接单</el-button></a>
            </el-row>
        </div>
        <div>
          <p class="dd">开发服务项目</p>
          <div class="a">
          <div class="a1">
            <div class="gga1 a11">
              <div class="a111"></div>
              <div class="gga2 a112"></div>
              <p class="a113">需求梳理</p>
            </div>
             <p class="a12">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</p>
             <div class="ggb1">
               <p class="ggb1 a13">①. 严选资深产品专家 更懂用户的需求</p>
               <p class="ggb1 a13">②. 标准产品文档 节约40%开发成本</p>
               <p class="ggb1 a13">③. 免费提供开发工期、报价评估服务</p>
             </div>
             <input type="button" value="了解详情" class="a14">
          </div>
          <div class="a1">
             <div class="gga1 a21">
              <div class="a111"></div>
              <div class="gga2 a22"></div>
              <p class="a113">整包项目</p>
            </div>
             <p class="a12">一站式软件开发服务，智能匹配优质开发者，五星级的过程体验和交付质量。</p>
             <div class="ggb1">
               <p class="ggb1 a13">①. 专属项目经理全程跟进 轻松高效</p>
               <p class="ggb1 a13">②. 标准化开发流程 可视化在线监管</p>
               <p class="ggb1 a13">③. 按阶段付款 平台托管担保</p>
             </div>
             <input type="button" value="了解详情" class="a14">
          </div>
          <div class="a1">
             <div class="gga1 a31">
              <div class="a111"></div>
              <div class="gga2 a32"></div>
              <p class="a113">云端工作</p>
            </div>
             <p class="a12">按月聘用程序员，最快一天到岗，节省55%的人力成本。</p>
             <div class="ggb1">
               <p class="ggb1 a13">①. 优选5年+经验的资深开发者</p>
               <p class="ggb1 a13">②. 可选全职兼职，支持定制每周工时</p>
               <p class="ggb1 a13">③. 每天提交日报，进度可控</p>
             </div>
             <input type="button" value="了解详情" class="a14">
          </div>
          </div>
        </div>
        <div>
            <p class="d" style="margin-top:20px;">优秀程序员推荐</p>
              <div class="y">
                <div class="y1" v-for="(item,index) in message " :key="index" @click="jump(index)" >
                  <img :src="top[index]" class="yyy">
                  <!-- <div class="y11">{{item.user_avatar}}</div> -->
                   <img :src="item.user_avatar" class="y11">
                   <div class="y12">
                     <p class="y13">{{item.user_name}}</p>
                  <p class="y14">{{item.user_role}}</p>
                   <p class="y14">{{item.user_email}}</p>
                  <p></p>
                </div>
                </div>
              </div>
        </div>
        <div>
          <p class="d" style="margin-top:20px;">交易与服务流程</p>
          <div class="fw">
            <div class="fw1">
              <p class="fw11">// 01</p>
              <img src="../../assets/fw1.png" class="fwtupian">
              <p class="fw12">发布需求</p>
              <p class="fw13 ">不知道项目如何报价？</p>
              <p class="fw13 ff1">在这里，3分钟自动估算。</p>
              <p class="fw13 ff2">覆盖 App、Web、HTML5、微信公众号等常用功能。</p>
              <p class="fw14">查看项目报价</p>
            </div>
                    <div class="fw1">
              <p class="fw11">// 02</p>
              <img src="../../assets/fw2.png" class="fwtupian">
              <p class="fw12">确认合作</p>
              <p class="fw13 ">海量开发者，技能多样化，</p>
              <p class="fw13 ff1">实现技能需求匹配，</p>
              <p class="fw13 ff2">确认合作开发者。</p>
            </div>
                    <div class="fw1">
              <p class="fw11">// 03</p>
              <img src="../../assets/fw3.png" class="fwtupian">
              <p class="fw12">资金托管</p>
              <p class="fw13 ">项目款分阶段托管，自助验收支付开发者。</p>
              <p class="fw13 ff1">高达 1000 万元保险赔付机制，</p>
              <p class="fw13 ff2">全方位保障开发进度。</p>
            </div>
                    <div class="fw1">
              <p class="fw11">// 04</p>
              <img src="../../assets/fw4.png" class="fwtupian">
              <p class="fw12">无忧交付</p>
              <p class="fw13 ">云计算软件协作工具，</p>
              <p class="fw13 ff1">提供代码托管、文档管理、代码质量报告等，</p>
              <p class="fw13 ff2">让项目过程的每一步都有迹可循，随时监管。</p>
            </div>
                    <div class="fw1">
              <p class="fw11">// 05</p>
              <img src="../../assets/fw5.png" class="fwtupian">
              <p class="fw12">无忧质保</p>
              <p class="fw13 ">项目质保期内，开发者义务修复BUG及调优，</p>
              <p class="fw13 ff1">保障运营无忧。</p>
            </div>
          </div>
        </div>
        <div class="ee">
          <div class="ee1">
            <h3 class="ee11">337,597,822</h3>
            <h4 class="ee22">累计总金额</h4>
          </div>
           <div class="ee1">
             <h3 class="ee11">11,826</h3>
             <h4 class="ee22">项目数量</h4>
           </div>
            <div class="ee1">
               <h3 class="ee11">170,408</h3>
               <h4 class="ee22">注册开发者</h4>
            </div>
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
              list:[
                require("../.././assets/11.png"),
                require("../.././assets/opp.png"),
                require("../.././assets/timg22.png")
              ],
              top:[
                require("../.././assets/qq.png"),
                require("../.././assets/qqq.png"),
                require("../.././assets/qqqq.png"),
                require("../.././assets/qqqqq.png"),
                require("../.././assets/5.png"),
                 require("../.././assets/6.png"),
                  require("../.././assets/7.png"),
                   require("../.././assets/8.png"),

              ],
              message:[
                
              ]
            }
        },
        created(){
          this.$axios.post('/BQ/excellent').then(res=>{
            console.log(res)
            this.message=res.data.data.showExcellent
          })
        },
            methods: {
              jump(aa){
                this.$router.push("/youxiu?info="+this.message[aa].user_email);
              }
            }
    
}
</script>

<style scoped>
#boo{
  height: 500px;
}
img{
  width: 100%;
    height: 100%;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    height: 500px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    height: 500px;
  }
  .d{
    font-size: 26px;
    text-align: center;
    margin: 10px 0;
  }
  .dd{
    font-size: 26px;
    text-align: center;
    margin-top: -2%;
    margin-bottom: 2%;
  }
  .d1{
    text-align: center;
    font-size: 18px;
    color: dimgrey
  }
  .d2{
    width: 460px;
    height: 100px;
    margin: 10px auto;
  }
  .d3{
    width: 220px;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
  }
  .a{
    width: 1200px;
    height: 540px;
    margin: 10px auto;
  }
  .a1{
    width: 380px;
    height: 540px;
    box-shadow: 2px 2px rgb(153, 151, 151);
    float: left;
    margin-left: 14px ;
    position: relative;
     top: 0%;
     left: 0;
   }
   .gga1{
     width: 380px;
     height: 200px;
     position: relative;
     top: 0%;
     left: 0;
     }
     .a11{
       background-image: url(../../assets/12.jpg);
     background-size: 100% 100%;
     }
     .a21{
              background-image: url(../../assets/1333.jpg);
              background-size: 100% 100%;
     }
     .a31{
       background-image: url(../../assets/1999.jpg);
              background-size: 100% 100%;
     }
     .a111{
          width: 380px;
          height: 200px;
          background-color:black;
          opacity:0.4;
     }
   .gga2{
     width: 60px;
     height:60px;
     position: absolute;
     top: 22%;
     left: 41%;
   }
   .a112{
     background-image: url(../../assets/1.png);
     background-size: 100% 100%;
   }
   .a22{
       background-image: url(../../assets/2.png);
     background-size: 100% 100%;
   }
   .a32{
       background-image: url(../../assets/3.png);
     background-size: 100% 100%;
   }
   .a113{
     font-size: 20px;
     color: white;
     position: absolute;
          top: 62%;
          left: 39%;
   }
   .a12{
     width: 280px;
     margin:30px auto;
     font-size: 15px;
   }
   .ggb1{
     width: 280px;
     margin: 20px auto;
     font-size: 14px;
     color:dimgrey
   }
   .a13{
     margin-top:10px; 
   }
   .a14{
     width: 150px;
     height: 40px;
     background-color: white;
     border:1px solid darkgrey; 
     position: absolute;
     top: 86%;
     left: 30.5%;
     cursor: pointer;
   }
   .a .a1 .a14:hover{
     background-color:#409EFF
   }
   .fw{
     width: 1250px;
     height: 1600px;
     margin: 10px auto; 
     
    
   }
   .fw1{
     width: 1250px;
     height: 300px;
     box-shadow: 1px 1px 1px 1px rgb(207, 198, 198);
     margin: 10px 0;
     float: left;
      position: relative;
     top: 0;
     left: 0%;
   }
   .fw11{
     color:dimgrey;
     position: absolute;
     top: 16%;
     left:18%;
   }
   .fwtupian{
     width: 500px;
     height: 240px;
     position: absolute;
     top: 6%;
     left: 50%;
   }
   .fw12{
     font-size: 30px;
      position: absolute;
     top: 26%;
     left: 20%;
   }
   .fw13{
     font-size: 16px;
     color: #979FA8;
      position: absolute;
     top: 40%;
     left: 20%;
   }
   .ff1{
      position: absolute;
     top: 46%;
     left: 20%;
   }
    .ff2{
      position: absolute;
     top: 52%;
     left: 20%;
   }
   .fw14{
     font-size: 14px;
      position: absolute;
     top: 66%;
     left: 20%;
   }
   .ee{
     width: 1200px;
     height: 100px;
     margin: 20px auto;
   }
   .ee1{
     width: 360px;
     height: 100px;
     float: left;
     margin-left: 30px ;
   }
   .ee11{
     font-size: 32px;
     text-align: center;
     color:#1E1E1E;
     margin-top:10px; 
   }
   .ee22{
     text-align: center;
     color: #1E1E1E;
     margin-top:10px;
   }
   .y{
     width: 1210px;
     height: 500px;
     margin: 26px auto; 
     /* border: 1px solid black; */
     box-shadow: 1px 1px 1px 1px rgb(212, 202, 202);
   }
   .y1{
     width: 300px;
     height: 250px;
    
     float: left;
     position: relative;
     top: 0%;
     left: 0%;
   }
   .y11{
     width: 100px;
     height: 100px;
     /* border: 1px solid black; */
     border-radius: 50%;
     position: absolute;
     top: 16%;
     left: 33%;
   }
   .y12{
     width: 300px;
     height: 100px;
     position: absolute;
     top: 60%;
     left: 0%;
   }
   .y13{
     font-weight: bold;
     text-align:center;
     font-size: 20px;
     margin-top:5px;
   }
   .y14{
     margin-top:5px;
      text-align:center;
     font-size: 16px;
   }
   .yyy{
     width: 40px;
     height: 40px;
     /* border: 1px solid black; */
     margin-left: 20px;
     margin-top: 20px;
   }
</style>