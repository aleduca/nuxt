export default function(cookieName,value,expireDays){
  var d = new Date();
  d.setTime(d.getTime() + (expireDays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}