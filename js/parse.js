var A = function( id ) { return document.getElementById( id ); };
  function sendemail(){
    var btn_mine=A("regbtn");
    if(A("email").value)
    {
      btn_mine.textContent = "Sending Your EmailID to the Wizard ;)";
      new_email.save({
        email:A("email").value
      },
        {
          success:function(new_email){
            btn_mine.textContent="Done";
          },
          error:function (new_email,error) {
            btn_mine.textContent="error , in submission , please try again";
          }
        }
      );
    }
    else {
      btn_mine.textContent = "Atleast write something in the box above , mate."
    }
  }
  Parse.initialize("RsPVCohgpk7WYrmTxtRMVJtg2Ew79nVBqU01Kojz", "U9Yr9MT7rb30oee7K7XiJm4gMWfOafzbt0oGvQua");
  Parse.serverURL = 'https://parseapi.back4app.com'
  var email = Parse.Object.extend("email");
  var new_email = new email();
