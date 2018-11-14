function hola (){
	alert ("Hola mundosssss");
}

function sleep(milliseconds)
		{
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > milliseconds){
		      break;
    		}
 		 }
		}

   
    function myFunction() 
    {
    var txt;
   // var r = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.");
 /*   if (r == true) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
*/

  if (Number (document.getElementById("texto1").innerHTML) == 3) {
        var r = confirm("el Valor es 3");
    } else {
        txt = "no es 3";
    }

   
   document.getElementById("texto1").innerHTML = Number (document.getElementById("texto1").innerHTML) + 1 ; 
    document.getElementById("demo").innerHTML =txt;

	}	


