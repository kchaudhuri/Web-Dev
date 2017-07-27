//<!-- Name - Kaustubh Chaudhuri -->

//////////////////////////////////////////////////////
window.onload=readTextFile();

var carDetailArr = [393];
var selectedCar;

function listAllFunc()
{
  for (var i = 0; i < carDetailArr.length; i++)
  {
      displayItem(carDetailArr[i][1], carDetailArr[i][8]);
  }
}

function cmpAllFunc()
{
  saveInfo("all", 0);
}

function readTextFile()
{
    var companies = [];
    var fileObj = new XMLHttpRequest();
    fileObj.overrideMimeType('text/plain');
    fileObj.open("GET", "car.txt", true);
    fileObj.onreadystatechange = function ()
    {
        //if(fileObj.readyState === 4) //if ready
        //{
            if(fileObj.status === 200 || fileObj.status == 0)
            {
                var allText = fileObj.responseText;

                var oneLineArr = allText.split("\n");
                var entryLen = oneLineArr.length - 1;
                var propArr = oneLineArr[0].split(",");

                // console.log("No of entries are - " + String(entryLen));
                // console.log("The properties are - ");

                for(j = 1; j<oneLineArr.length; j++)
                {
                  carDetailArr[j-1] = oneLineArr[j].split(",");

                }
                for(x in carDetailArr)
                {
                  if(!companies.includes(carDetailArr[x][0]))
                  {
                    companies.push(carDetailArr[x][0]);
                  }
                }
                console.log("the companies available in the database are:");
                for(x in companies)
                {
                  console.log(companies[x]);
                  var temp = companies[x];
                  var makeList = document.getElementById("makeMenu");
                  var makeOpt = document.createElement("a");
                  var templi = document.createElement("li");
                  makeOpt.href = "#";
                  makeOpt.innerHTML = companies[x];
                  makeOpt.id = companies[x];
                  makeOpt.onclick = function() { dropFinal(temp); }
                  templi.appendChild(makeOpt);
                  makeList.appendChild(templi);
                }
            }
        }
    //}
    fileObj.send("\n");
}

function dropFinal(select)
{
  var temp = document.getElementById("makeChosen");
  console.log("------------------" + select);
  temp.innerHTML = select;
}

function searchAuto()
{
  document.getElementById('carList').innerHTML = '';
  var company = document.getElementById("make").value;
  company = company.toLowerCase();

  var year = document.getElementById("year").value;

  var found = 0;

  if(isNaN(year) && year!='')
  {
    document.getElementById("msg").innerHTML="invalid year entered";
  }

  else {

    year = year%100;
  //console.log("in searchAuto " + year); //scaff
  if((company != "") && (year != ""))//search by company and year
  {
    //console.log("<------the company selected is '" + company + "'------>");

    for (var i = 0; i < carDetailArr.length; i++)
    {
      if((carDetailArr[i][0] == company) && (carDetailArr[i][8] == year))
      {
        //console.log(carDetailArr[i][1]); //scaff
        displayItem(carDetailArr[i][1], year);
        found ++;
      }
    }
    if(found == 0)
    {
      //console.log("<------no cars found with this make------>");
      document.getElementById("msg").innerHTML="no cars found with given details";
    }
  }
  if((company != "") && (year == ""))// search by company only
  {
    //console.log("<------the company selected is '" + company + "'------>");

    for (var i = 0; i < carDetailArr.length; i++)
    {
      if((carDetailArr[i][0] == company))
      {
        //console.log(carDetailArr[i][1]); //scaff
        displayItem(carDetailArr[i][1], 0);
        found ++;
      }
    }
    if(found == 0)
    {
      //console.log("<------no cars found with this make------>");
      document.getElementById("msg").innerHTML="no cars found with given details";
    }
  }
  if((company == "") && (year != ""))// search by company only
  {
    //console.log("<------the company selected is '" + company + "'------>");

    for (var i = 0; i < carDetailArr.length; i++)
    {
      if((carDetailArr[i][8] == year))
      {
        //console.log(carDetailArr[i][1]); //scaff
        displayItem(carDetailArr[i][1], year);
        found ++;
      }
    }
    if(found == 0)
    {
      //console.log("<------no cars found with this make------>");
      document.getElementById("msg").innerHTML="no cars found with given details";
    }
  }
  else {
    console.log("<------no fields entered------>");
  }
}
}

function displayItem(input, year)
{
    //console.log(input); //scaff

    var tempList = document.getElementById('carList');
    var temp_ul = document.createElement('ul');
    var temp_a = document.createElement('a');
    temp_a.innerHTML = input;
    temp_a.id = input;
    temp_a.href = "2a.html";
    temp_a.style = "text-decoration:none"
    temp_a.onclick = function() { saveInfo(input, year); }
    temp_ul.appendChild(temp_a);
    tempList.appendChild(temp_ul);
    //document.getElementById(input).onclick = saveInfo;
}

function saveInfo(input, year)
{
  setCookie("car",input,5);
  setCookie("cyr",year,5)
  //console.log("car selected is -" + input);//scaff
}

function loadInfo()
{
  ////////////////////--
  var select = getCookie("car");
  var year = getCookie("cyr")

  //console.log("-+-+-+ carDetailArr.length - " + carDetailArr.length);
  //console.log("-+-+-+ carDetailArr[0].length - " + carDetailArr[0].length);
  if((select == "all") && (year == 0))
  {
    for (var i = 0; i < 393; i++)
    {
      tableEntry(carDetailArr[i]);
    }
  }
  for (var i = 0; i < 393; i++)
  {
    // console.log(i);
    if(year == 0)
    {
      if(carDetailArr[i][1] == select)
      {
        //console.log("========== found - " + carDetailArr[i][1]); //scaff
        tableEntry(carDetailArr[i]);
      }
    }
    else
    {
      if((carDetailArr[i][1] == select) && (carDetailArr[i][8] == year))
      {
        tableEntry(carDetailArr[i]);
      }
    }
    // else {
    //   console.log("i am here " + carDetailArr[1]);
    // }
  }
  /////-------------------------------------------------------
}


function tableEntry(entry)
{
  //console.log(entry);
  var parentTable = document.getElementById("detailTable")
  var temp_tr = document.createElement("tr");

  for (var i = 0; i < entry.length; i++)
  {
    var temp_th = document.createElement("th");
    temp_th.innerHTML = entry[i];
    temp_tr.appendChild(temp_th)
  }
  parentTable.appendChild(temp_tr)

}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// //courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
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
