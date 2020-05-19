<template>
<div>
     <top></top> 
    <div class="yx1">
        <div class="yx2">
            <div class="kuang1">
             <el-avatar :src="user.user_avatar" class="yx21"></el-avatar>
            <p class="yx22">{{user.user_name}}</p>
            <input type="button" class="yx23"  :inputv="message.prog_job_status"> 
            <div class="block" >
            <el-rate
                v-model="value2"
                :colors="colors" class="yx24">
            </el-rate>
            </div>
            </div>
            <div class="yx25">
                <p class="yx251">{{message.prog_wage_day}}/天</p>
                <p class="yx252">可工作地点:{{message.prog_area}}</p>
                 <p class="yx253">可工作时间:{{message.prog_hours}}</p>
                 <el-row>
                <el-button type="primary" class="yx254">按天预约</el-button>
                <el-button class="yx255">按月雇佣(荐)</el-button>
                <el-button class="yx255">和TA聊聊</el-button>
                </el-row>
            </div>
        </div>
        <div class="yx3">
            <div class="yx31">
                <div class="yx311"> &nbsp;&nbsp;&nbsp;&nbsp;个人介绍</div>
                
            </div>
            <div class="yx31">
                <div class="yx311"> &nbsp;&nbsp;&nbsp;&nbsp;工作经历</div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
import top from '@/components/top'
    export default {
        data(){
                return {
                value1: null,
                value2: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'], 
                message:"",
                Aemail:"",
                user:"",
            }
        },
        created(){
            this.Aemail=this.$route.query.info;
            console.log(this.Aemail);
            this.$axios.post("BQ/programmer/detailed/message",{user_email:this.Aemail})
            .then(res=>{
                console.log(res)
                this.message=res.data.data.programmer
                this.user=res.data.data.user

            })
        },
         components:{
      top,
    },
    }
</script>

<style scoped>
.yx1{
    width: 1210px;
    height: 600px;
    border:1px solid black; 
    margin: 50px auto;
}
.yx2{
    width: 400px;
    height: 600px;  
    border: 1px solid black;
    float: left;
    position: relative;
    top: 0%;
    left: 0%;
}
.kuang1{
    width: 400px;
    height: 300px;
    border:  1px solid black;

}
.yx3{
    width: 800px;
    height: 600px;
    border: 1px solid black;
    /* margin-left:10px;  */
    float: left;
}
.yx21{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;
    margin: 30px auto;
         position:absolute;
    top: 1%;
    left: 37%;

}
.yx22{
    width: 60px;
    height: 20px;
    /* border: 1px solid black; */
     position:absolute;
    top: 25%;
    left: 45%;
}
.yx23{
    width: 80px;
    height: 30px;
    position:absolute;
    top: 31%;
    left: 40%;

}
.yx24{
    position:absolute;
    top: 38%;
    left: 35.5%;
}
.yx25{
    width: 400px;
    height: 300px;
    border:1px solid black; 
    position: relative;;
    top: 0%;
    left: 0%;
}
.yx251{
    font-size: 20px;
    position: absolute;
    top: 8%;
    left: 28%;
}
.yx252{
    color: #96989c;
    font-size: 14px;
    position: absolute;
    top: 23%;
    left: 28%;
}
.yx253{
    width: 200px;
    height: 50px; 
    color: #96989c;
    font-size: 14px;
    position: absolute;
    top: 33%;
    left: 28%;
}
.yx254{
    width: 180px;
    height: 40px;
    margin-top:38%; 
    margin-left:28%; 
}
.yx255{
    width: 180px;
    height: 40px;
    margin-top:8px; 
    margin-left:28%; 
}
.yx31{
    width: 800px;
    height: 300px;
    border: 1px solid black;
}
.yx311{
    width: 800px;
    height: 40px;
    border-bottom:1px solid black;
    line-height: 40px;
}
</style>