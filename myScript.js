function openInNewTab(url) {
    //Membuka url pada tab baru dan fokus pindah ke tab baru tersebut
    window.open(url, '_blank').focus();
}
function showObject(id){
    //Menampilkan obyek HTML
    document.getElementById('request').style.display ='block';
}
function hideObject(id){
    //Menyembunyikan obyek HTML
    document.getElementById('requestbutton').style.display ='none';
}
function myAlert(msg){
    //Menampilkan window Alert
    window.alert(msg);
}