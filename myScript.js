function openInNewTab(url) {
    //Membuka url pada tab baru dan fokus pindah ke tab baru tersebut
    window.open(url, '_blank').focus();
}
function showObject(id){
    document.getElementById('request').style.display ='block';
}
function hideObject(id){
    document.getElementById('requestbutton').style.display ='none';
}