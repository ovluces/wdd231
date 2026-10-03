const params = new URLSearchParams(window.location.search);
document.getElementById("fname").innerHTML = params.get('fname');
document.getElementById("lname").innerHTML = params.get('lname');
document.getElementById("organization-title").innerHTML = params.get('organization-title');
document.getElementById("email").innerHTML = params.get('email');
document.getElementById("phone").innerHTML = params.get('phone');
document.getElementById("businessName").innerHTML = params.get('businessName');

switch (params.get('membership')) {
  case 'np':
    document.getElementById("membership").innerHTML = "Non Profit Level";
    break;
  case 'bronze':
    document.getElementById("membership").innerHTML = "Bronze Membership Level";
    break;
  case 'silver':
    document.getElementById("membership").innerHTML = "Silver Membership Level";
    break;
  case 'gold':
    document.getElementById("membership").innerHTML = "Gold Membership Level";
    break;

}

document.getElementById("descripcion").innerHTML = params.get('descripcion');

document.getElementById("timestamp").innerHTML = params.get('timestamp');

