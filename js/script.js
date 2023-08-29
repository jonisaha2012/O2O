// PRELOADING 

window.onload = function () {
  document.getElementById('Main').style.display = 'hidden';
  window.setTimeout(fadeout, 500);
  GetData();
  document.getElementById('Main').style.display = 'show';
}

function fadeout() {
  document.querySelector('.preloader').style.opacity = '0';
  document.querySelector('.preloader').style.display = 'none';
}

function GetData(){

    // Get the query string part of the URL
    var queryString = window.location.search;
    let Api = "AKfycbzQP8d6qMy9O_b3QsOp74qwXKX1IqCqLHkMNx2X4TKIM6cP9zJjSpIT4l9kk14iDF-J";
    let Total_Url_Number = queryString.substring(1);
    // console.log (queryString.substring(1).length);
    if (Total_Url_Number.length ==13){
      var pair = Total_Url_Number.split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]).substring(1);
      var Query_Value = "?"+key+"="+value;

      let Credentials = "https://script.google.com/macros/s/"
      let Url = Credentials+Api+"/exec"+Query_Value;
      getText(Url);


    //   fetch('https://script.google.com/macros/s/AKfycbzQP8d6qMy9O_b3QsOp74qwXKX1IqCqLHkMNx2X4TKIM6cP9zJjSpIT4l9kk14iDF-J/exec?O=1615175660').then(res => res.json()).then(data => { console.log(data)});

      // console.log(JSON.stringify(Data2));
    }else{
      window.setTimeout(fadeout, 8000);
      document.getElementById('Main').innerHTML="NO DATA FOUND";
      
      
    }

  }
    async function getText(Url) {
 
        let x = await fetch(Url).then(res => res.json()).then(data => {
            document.getElementById('card__title').innerHTML = data.Name;
            document.getElementById('Contact').innerHTML = data.Number;
            document.getElementById('Debit').innerHTML = data.Debit+"Tk";
            document.getElementById('Credit').innerHTML = data.Credit+"Tk";
            document.getElementById('Balance').innerHTML = data.Balance+"Tk";
            document.getElementById('Image').src = data.Image;

            generateQRCode(data.Number);


        //   console.log(data.Name)


        });

                          }

    function generateQRCode(Num) {
    // alert(Num);
    // let Numbers = Num.substring(1);
    // alert(Numbers);

    let website = "https://saha-metaverse.github.io/H2O/?O="+Num;

    if (website) {
        // let qrcodeContainer = document.getElementById("qrcode");
        // qrcodeContainer.innerHTML = "";
        // new QRCode(qrcodeContainer, website);
        /*With some styles*/
        let qrcodeContainer2 = document.getElementById("qrcode-2");
        qrcodeContainer2.innerHTML = "";
        new QRCode(qrcodeContainer2, {
        text: website,
        width: 180,
        height: 180,
        colorDark: "#020203",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
        });
        document.getElementById("qrcode-container").style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
    }
