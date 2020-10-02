
  export const setBtn = function (a,that) {
      if(a.className == ''&& that.showTips == false){
        a.className = 'more'
        that.showTips = true
        console.log(that.showTips);
        return
      }else if( a.className == 'more'&& that.showTips == true){
        a.className = ''
        that.showTips = false
        console.log(that.showTips);
      }
      console.log('无效');
      
  }




  export const timeMethod = (year,month,that) => {
    that.dayList = []
    //获取这个月一号的时间
    let dateThis = new Date(year,month,1)
    //获取这个月的最后一天
    let lastDay = new Date(year,month+1,0).getDate()
    that.lastDay = lastDay
    //返回一号是周几
    const getWeekDay = dateThis.getDay()
    that.weekDay = getWeekDay
            //console.log(getWeekDay);
    //用这个月一号的总时间减去一号前几天的毫秒数 得到上个月开始的天数
    let startTime = dateThis - getWeekDay*24*60*60*1000
            //console.log(startTime);
    let fuck = new Date(startTime).getDate()
            //console.log(fuck);
    for(let i =0 ;i < 42 ; i++) {
      that.dayList.push({
        id:i,
        month:month + 1,
        day:new Date(startTime + i*24*60*60*1000).getDate()
      })
    }
  }

  export const textarea = () => {
    
  }
     
     

  
  
