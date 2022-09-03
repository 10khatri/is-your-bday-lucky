var dob = document.querySelector("#dob");
var luckyNo = document.querySelector("#ln");
var checkBtn = document.querySelector(".btn");
var output = document.querySelector(".output");

function checkLuckyNumber() {
  var curDate = dob.value;
  var date = new Date(curDate);
  var sum = getSum(date);
  var lNum = luckyNo.value;
  luckyOrNot(sum, lNum);


};
function getSum(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var sum = year + month + day;
  return sum;

};

function luckyOrNot(sum, lNum) {

  if (sum % lNum === 0) {
    output.innerHTML = "its a lucky no<span>&#129321 &#129321</span>";
  }
  else {

    output.innerHTML = "its not a luky no<span>&#128543</span>";


  }
};

checkBtn.addEventListener("click", checkLuckyNumber);