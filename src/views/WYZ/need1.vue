<template>
    <div >
        <h3 style="color: #303133;text-align:center;margin-top:15px;margin-bottom:15px">发布需求</h3>
        <ul class="a">
            <li>
                <div ><img class="a1" src="../../assets/xqsl.png" alt=""></div>
                <h3 class="a2">需求梳理</h3>
                <p class="a3">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。￥1980</p>
                <p class="a4">严选资深产品专家 更懂用户的需求</p>
                <p class="a4">标准产品文档 节约40%开发成本</p>
                <p class="a4">免费提供开发工期、报价评估服务</p>
                <p class="a5">
                    <el-row><el-button type="primary"><a class="a5" href="need">发布需求</a></el-button></el-row>
                </p>
                <a href="" class="a6">了解更多</a>
            </li>
            <li>
                <div ><img class="a1" src="../../assets/xqsl.png" alt=""></div>
                <h3 class="a2">需求梳理</h3>
                <p class="a3">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。￥1980</p>
                <p class="a4">严选资深产品专家 更懂用户的需求</p>
                <p class="a4">标准产品文档 节约40%开发成本</p>
                <p class="a4">免费提供开发工期、报价评估服务</p>
                <p class="a5">
                    <el-row><el-button type="primary"><a class="a5" href="need">发布需求</a></el-button></el-row>
                </p>
                <a href="" class="a6">了解更多</a>
            </li>
            <li>
                <div ><img class="a1" src="../../assets/xqsl.png" alt=""></div>
                <h3 class="a2">需求梳理</h3>
                <p class="a3">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。￥1980</p>
                <p class="a4">严选资深产品专家 更懂用户的需求</p>
                <p class="a4">标准产品文档 节约40%开发成本</p>
                <p class="a4">免费提供开发工期、报价评估服务</p>
                <p class="a5">
                    <el-row><el-button type="primary"><a class="a5" href="need">发布需求</a></el-button></el-row>
                </p>
                <a href="" class="a6">了解更多</a>
            </li>
        </ul> 
         <div class="b">
              <h3 style="color: #303133;text-align:center;margin-top:15px;margin-bottom:15px">我该如何选择合适的服务方案？</h3>
              <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="one" label="" width="180"></el-table-column>
                    <el-table-column prop="two" label="需求梳理" width="180"></el-table-column>
                    <el-table-column prop="three" label="整包项目" width="180"></el-table-column>
                    <el-table-column prop="four" label="云端工作" width="180"></el-table-column>
                    <el-table-column prop="five" label="短期雇佣"></el-table-column>
              </el-table>
         </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          one: '服务定义',
          two: '协助客户将产品想法转为专业的产品文档，明确产品功能。客栈将基于此进行报价。',
          three: '软件研发项目整体外包，覆盖功能设计、开发到测试全流程，交付完整的产品。',
          four:'按月聘用远程开发员工，支持灵活定制用工时间。',
          five:'自行筛选、预约平台的程序员，按工时计价。'

        }, {
          one: '服务定义',
          two: '协助客户将产品想法转为专业的产品文档，明确产品功能。客栈将基于此进行报价。',
          three: '软件研发项目整体外包，覆盖功能设计、开发到测试全流程，交付完整的产品。',
          four:'按月聘用远程开发员工，支持灵活定制用工时间。',
          five:'自行筛选、预约平台的程序员，按工时计价。'
        }, {
         one: '服务定义',
          two: '协助客户将产品想法转为专业的产品文档，明确产品功能。客栈将基于此进行报价。',
          three: '软件研发项目整体外包，覆盖功能设计、开发到测试全流程，交付完整的产品。',
          four:'按月聘用远程开发员工，支持灵活定制用工时间。',
          five:'自行筛选、预约平台的程序员，按工时计价。'
        }, {
          one: '服务定义',
          two: '协助客户将产品想法转为专业的产品文档，明确产品功能。客栈将基于此进行报价。',
          three: '软件研发项目整体外包，覆盖功能设计、开发到测试全流程，交付完整的产品。',
          four:'按月聘用远程开发员工，支持灵活定制用工时间。',
          five:'自行筛选、预约平台的程序员，按工时计价。'
        }]
      }
    }
  }
</script>
<style lang="">
    *{
        margin: 0px;
        padding: 0px;
    }
    .a{
        width: 1000px;
        height: 500px;
        /* border: 1px solid black; */
        margin: auto;
        list-style: none;
    }
    .a li{
    width: 300px;
    height: 450px;
    margin: 25px 15px ;
    border: 1px solid #DDDEE3;
    float: left;
    }
    .a li:hover{
        border: 2px solid #1E92F5;
    }
    .a1{
        width: 50px;
        height: 50px;
        margin-left:123px ;
        margin-top: 30px;
    }
    .a1:hover{
         width: 50px;
        height: 50px;
        background-image: url(../../assets/xqsl_hl.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    } 
    .a2{
        width: 77px;
        height: 30px;
        margin: 10px auto;
        color: #1D2A3A;
    }
    .a3{
        width: 290px;
        height: 50px;
        margin: 30px auto;
        color: #1D2A3A;
    }
    .a4{
        width: 250px;
        height: 30px;
        margin:auto;
        color: #666666;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
    }
    .a5{
        width: 100px;
        height: 50px;
        margin: auto;
        margin-top: 20px;
        text-decoration: none;
        color:white;
    }
    .a6{
        width: 200px;
        height: 30px;
        margin-left: 114px;
    }
    .b{
        width: 1000px;
        height: 500px;
        /* border: 1px solid black; */
        margin: auto;
        list-style: none;
    }
</style>