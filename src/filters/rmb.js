module.exports = function(value){
    if(!value){
        return;
    }
    var nummapping = {
        0:'',
        1:'壹',
        2:'贰',
        3:'叁',
        4:'肆',
        5:'伍',
        6:'陆',
        7:'柒',
        8:'捌',
        9:'玖'
    }
    var decimalmapping = {
        1:'',
        2:'拾',
        3:'佰',
        4:'仟',
        5:'万',
        9:'亿'
    }
    var sb = ''
    var length = value.length
    if(length){
        sb += '元'
    }
    for(var i = 1;i<=length;i++){
         var c = value[length-i]
         if(c==='0'){
             if(length-i>0){
                 sb += '零'
             }
             continue
         }
         if(i>5&&i<9){
             sb += decimalmapping[i-4]
         }else if(i>9){
             sb += decimalmapping[i-9]
         }else{
             sb += decimalmapping[i]
         }
         sb += nummapping[c]
    }
    return sb.split("").reverse().join("");;
}
