var A = function( id ) { return document.getElementById( id ); };
(function (window, document) {
A('toggle').addEventListener('click', function (e) {
    A('tuckedMenu').classList.toggle('custom-menu-tucked');
    A('tuckedMenu').classList.toggle('scrolled');
    A('toggle').classList.toggle('x');
});
})(this, this.document);
var nav = A("navbar");
function checkScroll(){
  var startY = A('landing').scrollHeight*(3/4);
  if(window.scrollY>startY)
      nav.className += " scrolled";
  else
      nav.className = nav.className.replace( /(?:^|\s)scrolled(?!\S)/g , '' );
}
if(navbar!== null)
  window.onload = window.onresize = window.onscroll = checkScroll;
console.log("Welcome Hacker!\nIt's nice to see you have the curiosity to venture this far\nSend me a mail at <abhishek.14bcs1017@abes.ac.in> with a subject specifying that you saw this and any suggestions about the Hackathon.\nThis is a little social experiment i am conducting , so please don't tell anyone else about this. :) ;) :D ");
