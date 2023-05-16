let cardNumberErrorMsg = document.getElementById("cardNumberErrorMsg");
let expiryErrorMsg = document.getElementById("expiryErrorMsg");
let cvvErrorMsg = document.getElementById("cvvErrorMsg");
let userInfoErrorMsg = document.getElementById("userInfoErrorMsg");

let form1 = document.getElementById("form1");
let thankForm = document.getElementById("thankForm");

let ownerDetail = document.getElementById("ownerDetail");
let cvvDetail = document.getElementById("cvvDetail");
let monthExpiryDetail = document.getElementById("monthExpiryDetail");
let yearExpiryDetail = document.getElementById("yearExpiryDetail");
let cardNumberDetail = document.getElementById("cardNumberDetail");

function validateCardInfo() {
  if (!ownerDetail.value.match(/^[A-Za-z]/)) {
    userInfoErrorMsg.innerHTML = "Please enter your name";
    ownerDetail.style.borderColor = "red";
    return false;
  } else if (!cardNumberDetail.value.match(/^[0-9]{16,16}/)) {
    cardNumberErrorMsg.innerHTML = "Wrong format, numbers only";
    cardNumberDetail.style.borderColor = "red";
    return false;
  } else if (!monthExpiryDetail.value.match(/^[0-9]{2,2}/)) {
    expiryErrorMsg.innerHTML = "Can't be blank";
    monthExpiryDetail.style.borderColor = "red";
    return false;
  } else if (!yearExpiryDetail.value.match(/^[0-9]{2,2}/)) {
    expiryErrorMsg.innerHTML = "Can't be blank";
    monthExpiryDetail.style.borderColor = "red";
    return false;
  } else if (!cvvDetail.value.match(/^[0-9]{2,2}/)) {
    cvvErrorMsg.innerHTML = "Can't be blank";
    cvvDetail.style.borderColor = "red";
    return false;
  }

  userInfoErrorMsg.innerHTML = "";
  ownerDetail.style.borderColor = "";
  cardNumberErrorMsg.innerHTML = "";
  cardNumberDetail.style.borderColor = "";
  expiryErrorMsg.innerHTML = " ";
  monthExpiryDetail.style.borderColor = "";
  cvvErrorMsg.innerHTML = "";
  cvvDetail.style.borderColor = "";
  thankForm.style.display = "block";
  form1.style.display = "none";
  return true;
}

function continueButton() {
  thankForm.style.display = "none";
  ownerDetail.value = "";
  cardNumberDetail.value = "";
  monthExpiryDetail.value = "";
  yearExpiryDetail.value = "";
  cvvDetail.value = "";
  form1.style.display = "block";
}
