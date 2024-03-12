export default function(cookienName,value,expireMinutes){
  var d = new Date();
  d.setTime(d.getTime() + (expireMinutes*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookienName + "=" + value + ";" + expires + ";path=/";
}