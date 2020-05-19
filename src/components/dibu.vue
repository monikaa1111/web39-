<template>
    <div>
        <div class="di1">
            <div class="di">
                <a href="#"><img src="../assets/logo1.png" alt=""></a>
                <div class="jz_t">
                    <h5 style="margin:5px 0px 15px">重点城市程序员兼职推荐</h5>
                    <div class="jz">
                        <a href="#">北京程序员兼职</a>
                        <a href="#">上海程序员兼职</a>
                        <a href="#">深圳程序员兼职</a>
                        <a href="#">杭州程序员兼职</a>
                        <a href="#">广州程序员兼职</a>
                        <a href="#">成都程序员兼职</a>
                        <a href="#">武汉程序员兼职</a>
                        <a href="#" style="margin:0px 0px 0px 70px">更多</a>
                    </div>
                </div>
                <div class="jz_t">
                    <h5 style="margin:5px 0px 15px">重点岗位程序员兼职推荐</h5>
                    <div class="jz">
                        <a href="#">Java兼职</a>
                        <a href="#">C++兼职</a>
                        <a href="#">PHP兼职</a>
                        <a href="#">C兼职</a>
                        <a href="#">C#兼职</a>
                        <a href="#">Python兼职</a>
                        <a href="#">Ruby兼职</a>
                        <a href="#">Node.js兼职</a>
                        <a href="#">Android兼职</a>
                        <a href="#">iOS兼职</a>
                        <a href="#">前端兼职</a>
                        <a href="#" style="margin:0px 0px 0px 33px">更多</a>
                    </div>
                </div>
                <div class="di2">
                   <span>
                    <a href="#" style="margin-left:0px">App下载</a>
                    <a href="#">帮助</a>
                    <a href="#">关于我们</a>
                    <a href="#">合作伙伴</a>
                    <a href="#">意见反馈</a>
                    © 程序员客栈
                    <a href="#" style="margin-left:0px">远程工作</a>
                    </span>
                    <div class="di2_right">
                        <p><a href="#">浙ICP备15029175号</a></p>
                        <p>
                            <img src="../assets/badge.png">
                            <a href="#" style="float:right;height:20px;line-height:25px;margin: 0px 0px 0px 5px;">浙公网安备 33011002011566号</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.di2_right a{
    text-decoration:none;
    color: #4a4a4a;

}
.di2_right p img{
    margin:3px 0px 0px 0px;
}
.di2_right p{
    float: right;
    font-size: 11px;
    /* border: 1px solid red; */
}
.di2_right{
    width: 193px;
    height: 50px;
    /* border: 1px solid red; */
    float: right;
    margin-top:10px ;
}
.di2 span{
    font-size: 12px;
    color: #ccc;
    /* margin-left: 30px; */
    /* float: left; */

}
.di2 a:hover{
    color: #1782d9;
}
.di2 span a{
    text-decoration:none;
    font-size: 11px;
    color: #4a4a4a;
    margin:0px 15px 0px;
    line-height: 61px;
}
.di2{
    width: 1000px;
    height: 61px;
    /* border: 1px solid red; */
    float: left;
    margin-top:30px ;
}
.jz a:hover{
    color: #1782d9;
}
.jz a{
    font-size: 12px;
    color: #4a4a4a;
    text-decoration:none;
    margin-right: 10px;
}
.jz_t{
    /* border: 1px solid red; */
    width: 790px;
    height: 63px;
    float: right;
}
.di a img{
    /* border: 1px solid rebeccapurple; */
    width: 115px;
    height: 38px;
    float: left;
}
.di{
    height: 126px;
    width: 1000px;
    border-bottom: 1px solid #ccc;
    /* border: 1px solid red; */
    margin: 30px auto 20px;
    padding: 0px 0px 25px 0px;
    /* background-color: #fff; */
}
.di1{
    margin-top: 50px;
    background-color: white;
    height: 200px;
    border:1px solid white;
}
</style>