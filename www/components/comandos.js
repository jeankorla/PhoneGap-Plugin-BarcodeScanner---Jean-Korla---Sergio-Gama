$(document).on("click", "#scan", function(){

  scanBarcode();

});

function scanBarcode() {
  window.plugins.barcodeScanner.scan( function(result) {
    encaminhar(parseInt(result.text));
   }, 
   function(error) {
     alert("Falha de escaneamento: " + error);
    }
  );
}

function encaminhar(resultado){
  
  switch(resultado){
    
    case 280720550:
      location.href = "scan1.html";
      navigator.vibrate(500);
    break;

    case 989895555:
      location.href = "scan2.html";
      navigator.vibrate(500);
    break;

    case 85236987:
      location.href = "scan3.html";
      navigator.vibrate(500);
    break;

    case 85369877444:
      location.href = "scan4.html";
      navigator.vibrate(500);
    break;

    default:
      alert("Código de barra inválido.");
    break;

  }

}

function voltar(){
  location.href = "index.html";
}