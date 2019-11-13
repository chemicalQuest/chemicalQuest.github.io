document.getElementById('card_number').oninput = showPicture;
function showPicture(){
  var card_name = document.getElementById('card_name');
  switch (document.getElementById('card_number').value) {
  	case 'Y':
  	case 'y':
    case 'У':
    case 'у': document.getElementById('pic1').style.display = "block";break;
  	default:  document.getElementById('pic1').style.display = "none";break;
  }
}