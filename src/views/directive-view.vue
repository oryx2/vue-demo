<template>
    <div class="col s12">
        <button v-on="click: toggle" class="btn">toggle</button>
    </div>
    <div class="col s12">
        <div class="card" v-mshow="showmsg">
            <div class="card-content">
                <p>i am a card</p>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function(){
        return {
            showmsg:true
        }
    },
    directives:{
        mshow: require('../directives/mshow.js')
    },
    methods:{
        toggle: function(){
            this.showmsg = this.showmsg? false: true
        }
    }
}
</script>
