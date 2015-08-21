<template>
    <form class="col s12">
        <div class="row">
            <div class="input-field col s6">
              <input  id="first_name" type="text" class="validate" v-model="first_name">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" v-model="last_name">
              <label for="last_name">Last Name</label>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <span class="title">Your Name:</span>
                {{first_name}} {{last_name}}
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input type="number" v-model="income" id="Income" />
                <label for="Income">Income</label>{{income | rmb}}
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <button class="waves-effect waves-light btn" v-on="click: onClick">click me to get json</button>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                {{someData}}
            </div>
        </div>
    </form>
</template>
<script>
module.exports = {
    data: function () {
        return {
            message:'',
            amount:'',
            someData: ''
        }
    },
    filters:{
        rmb: require('../filters/rmb')
    },
    methods : {
        onClick: function(){
            this.$http.get('/json/request.json',function (data, status, request) {

            // set data on vm
            //this.$set('someData', JSON.stringify(data))
            this.someData = JSON.stringify(data)
            }).error(function (data, status, request) {
            // handle error
            })
        }
    }
}
</script>
