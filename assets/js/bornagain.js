jQuery(document).ready(function($) {
  // Shows tab corresponding to operation system (for all tabs having OperationSystemTab)

  // user operation system
  var OSName = osName();

  // operation system defined in URL
  if (window.location.hash) {
    OSName = window.location.hash.substr(1);
  }

  // switch tab to selected operation system
  if (OSName == "Windows") {
    $('#OperationSystemTab li a[href="#Windows"]').tab('show') 
  } else if(OSName == "MacOS") {
    $('#OperationSystemTab li a[href="#MacOS"]').tab('show') 
  } else if(OSName == "Linux") {
    $('#OperationSystemTab li a[href="#Linux"]').tab('show') 
  }

});
