function calculate()
{
  document.getElementById('Copy').style.visibility = 'visible';

  inputBuy = document.getElementById("InputBuy").value;
  inputSell = document.getElementById("InputSell").value;
  inputNumber = 1;

  heJiBuy = parseFloat(biLi) * parseFloat(inputBuy) * parseFloat(inputNumber);
  heJiSell = parseFloat(biLi) * parseFloat(inputSell) * parseFloat(inputNumber);

  chaJia = parseFloat(inputSell) - parseFloat(inputBuy);
  shouXu = parseFloat(heJiBuy) + parseFloat(heJiSell);
  shuiJingHe = parseFloat(shuiJing) * parseFloat(inputSell);

  jingDe = parseFloat(chaJia) - parseFloat(shouXu) - parseFloat(shuiJingHe);
  huoLi = parseFloat(jingDe) / parseFloat(inputBuy);

  console.log(inputBuy);
  console.log(inputSell);
  console.log(inputNumber);
  console.log(heJiBuy);
  console.log(heJiSell);
  console.log(chaJia);
  console.log(shouXu);
  console.log(shuiJingHe);
  console.log(jingDe);
  console.log(huoLi);

  document.getElementById("JingDe").innerHTML = "淨得  " + jingDe.toFixed(3);
  document.getElementById("HuoLi").innerHTML = "獲利  " + huoLi.toFixed(3);

  if(parseFloat(jingDe) < 0)
  {
    document.getElementById("JingDe").style.color = "red";
    document.getElementById("HuoLi").style.color = "red";
  }else
  {
    document.getElementById("JingDe").style.color = "black";
    document.getElementById("HuoLi").style.color = "black";
  }
}

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText((jingDe + "\t" + huoLi).toString());
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function clearBuy()
{
   document.getElementById('InputBuy').value = "";
}
function clearSell()
{
   document.getElementById('InputSell').value = "";
}
