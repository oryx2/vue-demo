<template>
<div class="section">
    <h5>Parent component</h5>
    <label>message to component A</label>
    <input v-model="message"></input>
</div>
<div class="divider"></div>
<div class="section">
    <h5>comp A</h5>
    <comp-a parent-msg="{{message}}"></comp-a>
</div>
<div class="divider"></div>
<div class="section">
    <h5>comp B</h5>
    <comp-b></comp-b>
</div>
</template>

<script>
var compA = require('../components/a.vue')
var compB = require('../components/b.vue')
module.exports = {

    data:function(){
        return {
            message: ''
        }
    },
    components:{
        'comp-a':compA,
        'comp-b':compB
    }

}

</script>
