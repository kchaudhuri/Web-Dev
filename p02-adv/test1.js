//<!-- Name - Kaustubh Chaudhuri -->
var ans1 = 6;
var ans2 = 2;
var ans3 = 2;
var ans4 = 76;
var ans5 = 31919;
var ans6 = 925136;
var ans7 = 5;

/////////////////////////////////////////////////////////
function randomQuestion(pg)
{
  var qSel = Math.floor((Math.random() * 10) + 1);
  if(pg == 1)
  {
    setCookie('cres', 0 , 100);
  }

  switch (qSel)
  {
    case 1:
    case 6:
      fq1(pg);
      break;

    case 2:
      fq6(pg);
      break;
    case 7:
      fq2(pg);
      break;

    case 3:
    case 8:
      fq3(pg);
      break;

    case 4:
      fq7(pg);
      break;

    case 9:
      fq4(pg);
      break;

    case 5:
    case 10:
      fq5(pg);
      break;
    default:

  }
/////////////////////////////////////////////////////////
}



/////////////////////////////////////////////////////////
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
function fq1(pg)
{

  document.getElementById("e"+pg).innerHTML="12 -> 6 <br/>4 -> 4 <br/>5 -> 4 <br/>30 -> 6 <br/>1 -> 3";
  document.getElementById("q"+pg).innerHTML="11 -> ?";
  setCookie('anspg'+pg, ans1 , 100);
}

function fq2(pg)
{
  document.getElementById("e"+pg).innerHTML="600 -> 603 <br/>55 -> 57 <br/>7 -> 8 <br/>63 -> 65 <br/>12 -> 14";
  document.getElementById("q"+pg).innerHTML="1 -> ?";
  setCookie('anspg'+pg, ans2 , 100);
}

function fq3(pg)
{
  document.getElementById("e"+pg).innerHTML="43 -> 7 <br/>55 -> 10 <br/>2 -> 2 <br/>84 -> 12 <br/>900 -> 9";
  document.getElementById("q"+pg).innerHTML="1001 -> ?";
  setCookie('anspg'+pg, ans3 , 100);
}

function fq4(pg)
{
  document.getElementById("e"+pg).innerHTML="a - 51 <br/>c - 53 <br/>l - 62 <br/>f - 56 <br/>o - 65";
  document.getElementById("q"+pg).innerHTML="z -> ?";
  setCookie('anspg'+pg, ans4 , 100);
}

function fq5(pg)
{
  document.getElementById("e"+pg).innerHTML="a - 1 <br/>ac - 13 <br/>html - 8201312 <br/>web - 2352 <br/>www - 232323";
  document.getElementById("q"+pg).innerHTML="css -> ?";
  setCookie('anspg'+pg, ans5 , 100);
}

function fq6(pg)
{
  document.getElementById("e"+pg).innerHTML="7,3 -> 41021 <br/>8,3 -> 51124 <br/>5,4 -> 1920 <br/>9,6 -> 31554 <br/>7,4 -> 31128";
  document.getElementById("q"+pg).innerHTML="17,8 -> ?";
  setCookie('anspg'+pg, ans6 , 100);
}

function fq7(pg)
{
  document.getElementById("e"+pg).innerHTML="wow -> 1 <br/>chico -> 2 <br/>floss -> 1 <br/>wildcat -> 2 <br/>css -> 0";
  document.getElementById("q"+pg).innerHTML="california -> ?";
  setCookie('anspg'+pg, ans7 , 100);
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// check for answer

function checka1()
{
  var result;
  var anspg = Number(getCookie('anspg1'))
  if(anspg == Number(document.getElementById("a1").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
  console.log(result);
}

function checka2()
{
  var result;
  var anspg = Number(getCookie('anspg2'))
  if(anspg == Number(document.getElementById("a2").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
}

function checka3()
{
  var result;
  var anspg = Number(getCookie('anspg3'))
  if(anspg == Number(document.getElementById("a3").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
}

function checka4()
{
  var result;
  var anspg = Number(getCookie('anspg4'))
  if(anspg == Number(document.getElementById("a4").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
}

function checka5()
{
  var result;
  var anspg = Number(getCookie('anspg5'))
  if(anspg == Number(document.getElementById("a5").value))
  {
    result = Number(getCookie('cres')) + 20;
    setCookie('cres', result , 100);
  }
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
