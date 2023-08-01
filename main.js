var userName = prompt("Vui lòng nhập tên :");
var myAge = prompt("Nhập tuổi dô bạn ei");
console.log("userName:",userName);
console.log("myAge : ", myAge);

var showInfo = ("tên tui là : " + userName + "và năm nay tui" + myAge + "tuổi")

alert(showInfo);

var theH1 = document.getElementById("ele_h1");
console.log("Thẻ h1 : ", theH1);

console.log("Thẻ H1 content :", theH1.textContent);

theH1.textContent = showInfo;
