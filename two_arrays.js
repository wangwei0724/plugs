function remix(arr1,arr2) {
  if(arr1 instanceof Array&&arr2 instanceof Array){
    var intersection = [];//交集
    var union = [];//并集
    var difference = [];//差集
    var result = {
      intersection:intersection,
      union:union,
      difference:difference
    }
    if (arr1.length==0&&arr2.length==0) {//前三个判断空数组等特殊条件
      return result;
    }else if(arr1.length==0&&arr2.length>0){
      union = difference = arr2;
      return result;
    }else if(arr1.length>0&&arr2.length==0){
      union = difference = arr1;
      return result;
    }else{
      var hash = {};//利用对象属性值唯一来哈希
      var arr = arr1.concat(arr2);//将两个数组合成一个数组
      for (var i = arr.length - 1; i >= 0; i--) {
        if(!hash[arr[i]]){
          hash[arr[i]]=1;//利用哈希标记
        }else{
          hash[arr[i]]++;//区别开交集和差集
        }
      }
      for(key in hash){
        if (hash[key]==1) {
          difference.push(key);
        }else{
          intersection.push(key);
        }
        union.push(key);
      }
      return result;
    }
  }else{
    return false;
  }
}
