//实现功能：将复杂的多层json转变为扁平化结构
//输入

var originData={
  key:'value',
  obj:{a:1},
  arr:[{a:[1,2]},{a:2}]
};
//输出
{
  'key':'value',
  'obj.a':1,
  'arr[0].a[0]':1,
  'arr[0].a[1]':2,
  'arr[1].a':2
}
function jsonFlat(data){
  if(data&&data instanceof Object){
    var result ={};//存放最终扁平化的json
    main(data,null,result);//中间参数为当前节点的父节点，初始化时从根节点开始，所以初始值为null
    return result
  }
}
function main(data,parentNode,result){
  if(data instanceof Object){//递归结束条件
    for(key in data){
      var value = eval('data.'+key.toString());
      if(Object.prototype.toString.call(value)==='[object Array]'){//判断数据类型是否是数组
        for (var i = value.length - 1; i >= 0; i--) {
          if (parentNode) {
            main(value[i],parentNode+'.'+key+'['+i+']',result)//当前节点设置为父节点，然后递归下去
          }else{
            main(value[i],key+'['+i+']',result)//递归遍历该数组
          }
          continue;
        }
      }
      if (Object.prototype.toString.call(value)==='[object Object]') {//判断数据类型是否是对象，其实在这里主要是鉴别是不是键值对
          if (parentNode) {
            main(value,parentNode+'.'+key,result)//遍历json
          }else{
            main(value,key,result)
          }
          continue;
      }
      if(parentNode){
        result[parentNode + "." + key] = value; 
      }else{
        result[key] = value; 
      }
    }
    return;
  }
  result[parentNode] = data;
}
console.log(jsonFlat(originData));//亲测无误
