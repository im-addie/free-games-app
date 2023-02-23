export function dateFormat(d){
  var monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"]

  var t = new Date(d);
  return t.getDate()+' '+monthNames[t.getMonth()]+' '+t.getFullYear();
}