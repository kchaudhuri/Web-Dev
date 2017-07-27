//<!-- Name - Kaustubh Chaudhuri -->
var ans1 = 6;
var ans2 = 2;
var ans3 = 2;
var ans4 = 76;
var ans5 = 31919;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//Result
function resultfunc()
{
  var result = Number(getCookie('cres'));
  if (result == 100)
  {
      document.getElementById("score").innerHTML="100% Congratulations!! ";
  }
  else
  {
      document.getElementById("score").innerHTML= result + "%";
  }
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//Questions
function fq1()
{
  setCookie('cres', 0 , 100);
  document.getElementById("e1").innerHTML="12 -> 6 <br/>4 -> 4 <br/>5 -> 4 <br/>30 -> 6 <br/>1 -> 3";
  document.getElementById("q1").innerHTML="11 -> ?";
  console.log("q1\n");
}

function fq2()
{
  document.getElementById("e2").innerHTML="600 -> 603 <br/>55 -> 57 <br/>7 -> 8 <br/>63 -> 65 <br/>12 -> 14";
  document.getElementById("q2").innerHTML="1 -> ?";
  console.log("q2\n");
}

function fq3()
{
  document.getElementById("e3").innerHTML="43 -> 7 <br/>55 -> 10 <br/>2 -> 2 <br/>84 -> 12 <br/>900 -> 9";
  document.getElementById("q3").innerHTML="1001 -> ?";
  console.log("q3\n");
}

function fq4()
{
  document.getElementById("e4").innerHTML="a - 51 <br/>c - 53 <br/>l - 62 <br/>f - 56 <br/>o - 65";
  document.getElementById("q4").innerHTML="z -> ?";
  console.log("q4\n");
}

function fq5()
{
  document.getElementById("e5").innerHTML='a - 1 <br/>ac - 13 <br/>html - 8201312 <br/>web - 2352 <br/>www - 232323';
  document.getElementById("q5").innerHTML="css -> ?";
  console.log("q5\n");
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// check for answer

function checka1()
{
  var result;
  if(ans1 == Number(document.getElementById("a1").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
  console.log(result);
}

function checka2()
{
  var result;
  if(ans2 == Number(document.getElementById("a2").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
  console.log("c2");
}

function checka3()
{
  var result;
  if(ans3 == Number(document.getElementById("a3").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
  console.log("c3");
}

function checka4()
{
  var result;
  if(ans4 == Number(document.getElementById("a4").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
  console.log("c4");
}

function checka5()
{
  var result;
  if(ans5 == Number(document.getElementById("a5").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
  console.log("c5");
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// check for validation
function checkNum1()
{
  if(isNaN(document.getElementById("a1").value))
  {
    document.getElementById("classerr1").innerHTML="Enter a number"
  }
  else
  {
    document.getElementById("classerr1").innerHTML=""
  }
}
function checkNum2()
{
  if(isNaN(document.getElementById("a2").value))
  {
    document.getElementById("classerr2").innerHTML="Enter a number"
  }
  else
  {
    document.getElementById("classerr2").innerHTML=""
  }
}
function checkNum3()
{
  if(isNaN(document.getElementById("a3").value))
  {
    document.getElementById("classerr3").innerHTML="Enter a number"
  }
  else
  {
    document.getElementById("classerr3").innerHTML=""
  }
}
function checkNum4()
{
  if(isNaN(document.getElementById("a4").value))
  {
    document.getElementById("classerr4").innerHTML="Enter a number"
  }
  else
  {
    document.getElementById("classerr4").innerHTML=""
  }
}
function checkNum5()
{
  if(isNaN(document.getElementById("a5").value))
  {
    document.getElementById("classerr5").innerHTML="Enter a number"
  }
  else
  {
    document.getElementById("classerr5").innerHTML=""
  }
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
