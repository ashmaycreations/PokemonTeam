var list = document.querySelectorAll("[data-toggle=dropdown]");
for (var i = 0, s = list.length; i< s; i ++) {
  var elm = list[i];
  elm.addEventListener("click", function() {
    // this for loop will hide previously clicked drop downs
    for (var j = 0, z = list.length; j < z; j++) { 
      if (list[j] != this) {
        var elm = document.querySelector(list[j].getAttribute("data-target"));
        var str = elm.className.replace("d-block");
        elm.className = str;
      }
    } // if you like, remove the above loop
    var obj = document.querySelector(this.getAttribute("data-target"));
    if (obj.className.indexOf("d-block") > 0) { 
      var temp = obj.className.replace("d-block", "");
      obj.className = temp; 
    } else { obj.className += " d-block"; }
  });
}
