bucketListUpdate()
// this function is for the description and the properties
var price = "";
var description = "";

document.getElementById("check-clear").addEventListener("click", clearBucketList);
var buyButton = document.getElementsByClassName("buyNow");


for (var btn = 0; btn < buyButton.length; btn++) {
  buyButton[btn].addEventListener("click", function () { bucketBuyNow(this); });
}

function bucketBuyNow(para) {
  var products = [];
  var prices;
  var goods;
  var bucketList = [];
  var bucketListStr;


  while (para = para.previousSibling) {


    if (para.nodeType === 5) continue;

    if (para.className == "title") {
      prices = para.innerText;

    }
    if (para.className == "buy_item") {
      goods = para.innerText;

    }
    products.push(para);
  }

  var goods_item = {
    item_name: goods,
    cost: prices
  };

  var product_item = JSON.stringify(goods_item);

  if (!sessionStorage.getItem("bucketList")) {
    bucketList.push(product_item);

    bucketListStr = JSON.stringify(bucketList);


    sessionStorage.setItem('bucketList', bucketListStr);
    bucketConfirmAdd(goods);
    bucketListUpdate();

  } else {
    bucketList = JSON.parse(sessionStorage.getItem('bucketList'));
    bucketList.push(product_item);

    bucketListStr = JSON.stringify(bucketList);
    sessionStorage.setItem('bucketList', bucketListStr);
    bucketConfirmAdd(goods);
    bucketListUpdate();
  }
}

function bucketListUpdate() {
  var sum = 0;
  var cost = 0;
  var items = 0;
  var item_name = "";
  var items_total = "";

  if (sessionStorage.getItem('bucketList')) {

    var bucket = JSON.parse(sessionStorage.getItem('bucketList'));

    items = bucket.length;

    for (var j = 0; j < items; j++) {
      var bkt = JSON.parse(bucket[j]);

      cost = parseFloat(bkt.cost.split('$')[1]);

      item_name = bkt.item_name;


      items_total += "<tr><td>" + item_name + "</td><td>$" + cost.toFixed(2) + "</td></tr>";
      sum += cost;
    }
  }

  document.getElementById("amount").innerHTML = sum.toFixed(2);
  document.getElementById("items-total").innerHTML = items_total;
  document.getElementById("qty").innerHTML = items;

}

function bucketConfirmAdd(makeup_name) {
  var confirmation = makeup_name + " Success!";
  var notification = document.getElementById("notification");
  notification.innerHTML = confirmation;

  if (!notification.classList.contains("confirmation")) {
    notification.classList.add("confirmation");
  }

}

function clearBucketList() {
  if (sessionStorage.getItem('bucketList')) {
    sessionStorage.removeItem('bucketList');
    bucketListUpdate();

    var notification = document.getElementById("notification");
    notification.innerHTML = "";

    if (notification.classList.contains("confirmation")) {
      notification.classList.remove("confirmation");
    }
  }
}



// other functions

function changeFunction() {
  var eyeshadowBrand = document.getElementById("eyeshadow").value;
  if (eyeshadowBrand == "revlon") {
    price = "$50";
    description = "This a premium brand";

  } else if (eyeshadowBrand == "mac") {
    price = "$65";
    description = "This is a lovely brand";

  } else if (eyeshadowBrand == "sleek") {
    price = "$78";
    description = "This is a beautiful brand";
  }
  document.getElementById("eye-price").innerHTML = price;
  document.getElementById("eye-descrption").innerHTML = description;
}


function replaceFunction() {
  var concelarBrand = document.getElementById("concelar").value;
  if (concelarBrand == "revlon") {
    price = "$35";
    description = "This a premium brand";

  } else if (concelarBrand == "mac") {
    price = "$60";
    description = "This is a lovely brand";

  } else if (concelarBrand == "sleek") {
    price = "$57";
    description = "This is a beautiful brand";
  }
  document.getElementById("concelar-price").innerHTML = price;
  document.getElementById("concelar-description").innerHTML = description;
}

function moveFunction() {
  var lipstickBrand = document.getElementById("lipstick").value;
  if (lipstickBrand == "revlon") {
    price = "$40";
    description = "This a premium brand";

  } else if (lipstickBrand == "mac") {
    price = "$70";
    description = "This is a lovely brand";

  } else if (lipstickBrand == "sleek") {
    price = "$45";
    description = "This is a beautiful brand";
  }
  document.getElementById("lipstick-price").innerHTML = price;
  document.getElementById("lipstick-description").innerHTML = description;
}

function nextFunction() {
  var powderBrand = document.getElementById("powder").value;
  if (powderBrand == "revlon") {
    price = "$55";
    description = "This a premium brand";

  } else if (powderBrand == "mac") {
    price = "$25";
    description = "This is a lovely brand";

  } else if (powderBrand == "sleek") {
    price = "$39";
    description = "This is a beautiful brand";
  }
  document.getElementById("powder-price").innerHTML = price;
  document.getElementById("powder-description").innerHTML = description;
}



function forwardFunction() {
  var mascaraBrand = document.getElementById("mascara").value;
  if (mascaraBrand == "revlon") {
    price = "$547";
    description = "This a premium brand";

  } else if (mascaraBrand == "mac") {
    price = "$39";
    description = "This is a lovely brand";

  } else if (mascaraBrand == "sleek") {
    price = "$46";
    description = "This is a beautiful brand";
  }
  document.getElementById("mascara-price").innerHTML = price;
  document.getElementById("mascara-description").innerHTML = description;
}

// this function is to alert (contact form)

function validateForm() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var comments = document.getElementById("comments").value;
  if (name == "" || surname == "" || comments == "") {
    alert("Please fill out all of the fields.");
    return false;
  } else {
    alert("Thank you for submitting your additional comments");
    return true;
  }
}

function validatePaymentForm() {
  var visa = document.getElementById("visa").value;
  var master = document.getElementById("master").value;
  var month = document.getElementById("month").value;
  var cardName1 = document.getElementById("cardnameN1").value;
  var cardName2 = document.getElementById("cardnameN2").value;
  var cardName3 = document.getElementById("cardnameN3").value;
  var year = document.getElementById("year").value;
  var cvv = document.getElementById("cvvf").value;

  
  if (visa == "" || master == "" || month == "" || year == "" || cvv == "") {



    alert("fill details");
  } else {
    

    if(cvv >= 100 & cvv <= 999){
      // alert("form is filled");

      var cost_form = document.getElementById("costForm");
      cost_form.style.display = "block";
      totalCst = document.getElementById("amount").textContent;
  
      document.getElementById("total-cost").innerHTML = totalCst;
  
      if (parseFloat(totalCst) < 1000) {
        deliveryC = parseFloat(totalCst) * 0.1;
        netTotal = parseFloat(totalCst) + deliveryC;
        document.getElementById("delivery-cost").innerHTML = deliveryC.toFixed(2);
        document.getElementById("net-total").innerHTML = netTotal.toFixed(2);
      } else {
        deliveryC = 0;
        netTotal = parseFloat(totalCst) + deliveryC;
        document.getElementById("delivery-cost").innerHTML = deliveryC.toFixed(2);
        document.getElementById("net-total").innerHTML = netTotal.toFixed(2);
      }
      setTimeout(() => {
        confirmPayment();
      }, 1000);
    }else{
      alert("CVV can only be 3 digits");
    }
  }
}

function confirmPayment() {
  var confirmPayment = confirm("Do you accept the total payment calculation?");

  if (confirmPayment == true) {
    alert("Thank you for the confirmation");
  } else {
    alert("Application has been withdrawn");
  }
}