function calendar(year,month){
  var day = new Date(year,month-1,0); 
  var preDay = new Date(year,month-2,0); 
  var total = day.getDate();//该月总天数
  var preTotal = preDay.getDate();//上月总天数
  var start = day.getDay();//该月第一天是周几
  var daysArr = [[], [], [], [], [], []]; // 6*7的日历数组
  const getDay = day => (day <= preTotal? day : (day <= (preTotal + total)) ? day - preTotal : day - (preTotal + total)); // 日期处理
  for (let i = 0; i < 7; i += 1) {
    let virtualDay = (preTotal - start) + i;
    for (let j = 0; j < 6; j += 1) {
      daysArr[j][i] = getDay(virtualDay + (j * 7));
    }
  }
  var title = ['周天','周一','周二','周三','周四','周五','周六']
  daysArr.unshift(title);
  var table = document.createElement("table");
  var test = document.body;//测试结点
  test.appendChild(table);
  var tr ='';
  var td = '';
  var sum = '';
  for(var i = 0;i<daysArr.length;i++){
    td = '';
    for(var j = 0;j<daysArr[i].length;j++){
        td=td+'<td>'+daysArr[i][j]+'</td>';
    }
    tr ='<tr>'+td+'</tr>';
    sum = sum+tr;
  }
  table.innerHTML = sum;
}
calendar(2017,4);//测试案例