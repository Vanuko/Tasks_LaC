// console.log("M'lady-_-")
// const axios = import 'axios' from 'cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// console.log(axios);
const axios = window.axios;
console.log(axios)
  function valueConvert() {
    var x = document.getElementById("euroField").value;
    axios.get('http://data.fixer.io/api/latest',  {
    params: {
        access_key: '74361e75f1b0d9bd9adb0009bb3dae43',
    }})
  .then(function (response) {
    if(x>0){
    let convTable = document.getElementsByClassName("convTable");
    convTable[0].style.display = "block";
  }else{
    let convTable = document.getElementsByClassName("convTable");
    convTable[0].style.display = "none";
  }
    let chfcov = response.data.rates.CHF;
    document.getElementById("chfId").innerHTML = chfcov * x;
    console.log(response);
    document.getElementById("euroId").innerHTML = x;
    document.getElementById("rateId").innerHTML = chfcov;
  })
  }

  


