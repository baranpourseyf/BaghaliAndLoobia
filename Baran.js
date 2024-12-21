//Intro
SiteIntroduction = document.getElementById('Header2'); //Element o get by id ish kardi so esme id o bayad bezari

SiteIntroduction.addEventListener('click', function () {
  alert('Loobia is not mojood at the moment. Sorry!');
});

//Sabade Kharid
count = 0;
ShowAmountInCart = document.getElementById('Amount');

AddToCart = document.getElementById('BoxKharid');

AddToCart.addEventListener('click', function () {
    count++
    //ShowAmountInCart.innerHTML = count;
  if (count<20) {
    ShowAmountInCart.innerHTML = count;
  }

  else {
    alert('Not more available.');
  }
});