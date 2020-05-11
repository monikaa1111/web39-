<template>
    <div>
        <top></top>
        <div class="img">  
        <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item.id">
      <img :src="item.idView" class="image">
    </el-carousel-item>
  </el-carousel>
  </div>  
    </div>

</template>

<script>
   import top from '@/components/top'
    export default {
        data(){
            return{
                //   item1:[{id:0,idView:require("../../assets/11.png")},     
                //    {id:1,idView:require("../../assets/iw.png")},]
            }

        },
    components:{
      top,
    },
}
</script>

<style scoped>
.img{
    height: 500px;
    border: 1px solid black;
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
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>