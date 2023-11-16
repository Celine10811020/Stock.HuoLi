var inputBuy;
var inputSell;
var inputNumber;
var jingDe;
var huoLi;

var biLi = 0.001425;
var heJiBuy;
var heJiSell;
var shuiJing = 0.003;
var shuiJingHe;
var chaJia;
var shouXu;

document.getElementById("Calculate").onclick = function() {calculate()};
document.getElementById("Copy").onclick = function() {copyContent()};

document.getElementById("InputBuy").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    clearSell()
    document.getElementById("InputSell").focus();
  }
});
document.getElementById("InputSell").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    clearNumber()
    document.getElementById("InputNumber").focus();
  }
});
document.getElementById("InputNumber").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("Calculate").click();
  }
});

document.getElementById("InputBuy").onclick = function() {clearBuy()};
document.getElementById("InputSell").onclick = function() {clearSell()};
document.getElementById("InputNumber").onclick = function() {clearNumber()};
