<template>
    <div class="box1">
        <div>
            <h2 class="d1">登录</h2>
        </div>
        <input type="text" class="d2" placeholder="您的邮箱">
        <input type="text" class="d2 d3" placeholder="您的密码">
        <p class="d4">没有账号？快速注册</p>
        <p class="d5">找回密码</p>
        <input type="button" class="d6" value="登录">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box1{
    width: 500px;
    height: 300px;
    border: 1px solid black;
    margin: 140px auto;
    position: relative;
    top: 0%;
    left: 0;
}
.d1{
    text-align: center;
}
.d2{
    width: 360px;
    height: 40px;
    border-radius: 5px;
    border:1px solid black;
    position: absolute;
    top: 26%;
    left: 13%;
    text-indent:1em
}
.d3{
     position: absolute;
    top: 50%;
    left: 13%;
}
.d4{
    font-size: 14px;
    position: absolute;
    top: 64%;
    left: 13%;
}
.d5{
    font-size: 14px;
    position: absolute;
    top: 64%;
    left: 72%;
}
.d6{
    width: 280px;
    height: 40px;
    position: absolute;
    top: 78%;
    left: 21%;
    cursor: pointer;
    }
</style>