var Counter=0;
function showForm() {
if(Counter == 0){
document.querySelector('.Form_Review').style.display = 'block';
Counter++;
}
else{
document.querySelector('.Form_Review').style.display = 'None';
Counter--;
}
}

function DisableForm() {
document.querySelector('.Form_Review').style.display = 'None';
window.alert("Your Feedback Sent 😍")
}
