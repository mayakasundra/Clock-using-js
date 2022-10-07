function showTime(){
    let date= new Date();
    let h= date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    var session = "AM";
        if(h==0){
            h=12;
        }
    if(h>12){
        h=h-12;
        session = "PM";
    }

    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    document.getElementById("myClock").innerHTML = `${h}:${m}:${s} ${session}`;
  
}

setInterval(showTime,1000)


function showDate(){
    var days = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
    let d=new Date();
    let day=days[d.getDay()];
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month=months[d.getMonth()];
    document.getElementById("myDate").innerHTML = `${day},${d.getDate()} ${month} ${d.getFullYear()}`;

}
showDate();

