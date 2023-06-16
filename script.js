

function labelcreate(tagname, attrname, attrvalue, content)
{
    var element= document.createElement(tagname);
    element.setAttribute(attrname, attrvalue);
    element.innerHTML= content;
    return element;
}

function linebreaker(tagname)
{
    var element=document.createElement(tagname);
    return element;
}

function inputcreate(tagname, attrname, attrvalue, attrname1,attrvalue1, attrname2, attrvalue2,attr3name,attr3value){
  var element=document.createElement(tagname);
     element.setAttribute(attrname,attrvalue);
     element.setAttribute(attrname1,attrvalue1);
     element.setAttribute(attrname2, attrvalue2);
     element.setAttribute(attr3name,attr3value);
     return element;
 }


let container = ele("div", "class", "container-fluid");
let row = ele("div", "class", "row");
let colum1=ele("div", "class", "col-md-3");
let colum2=ele("div", "class", "col-md-9");
//var btndiv= ele("div", "class", "radioWrapElement");
var checkdiv=ele("div", "class", "checkList");
colum1.style.backgroundColor="palegoldenrod";
colum2.style.backgroundColor="rgb(192, 178, 27)"
function ele(tagname, attname, attvalue) {
    let element = document.createElement(tagname);
    element.setAttribute(attname, attvalue);
    return element;
  }
var h2=ele("h2", "class", "form");
h2.innerHTML="Form Submission";
h2.style.backgroundColor=" rgb(192, 178, 27)";
var br0=linebreaker("br");
var firstName=labelcreate("label", "for", "firstName", "Firstname");
var br=linebreaker("br");
var firstnameInput=inputcreate("input", "type", "text", "id", "firstName","placeholder", "First Name");
var br1=linebreaker("br");

var lastName=labelcreate("label", "for", "lastName", "Lastname");
var br2=linebreaker("br");
var lastnameInput=inputcreate("input", "type", "text", "id", "lastName", "placeholder", "Last Name");
var br3=linebreaker("br");

var email=labelcreate("label", "for", "email", "Email");
var br4=linebreaker("br");
var emailInput=inputcreate("input", "type", "email", "id", "email","placeholder", "Email ID");
var br5=linebreaker("br");

var address=labelcreate("label", "for", "address", "Address");
var br6=linebreaker("br");
var addressinput=inputcreate("input", "type", "text", "id", "address","placeholder", "address Line-1");
var br7=linebreaker("br");

var pincode=labelcreate("label", "for", "pincode", "Pincode");
var br10=linebreaker("br");
var pincodeInput=inputcreate("input", "type", "tel", "id", "pincode","placeholder", "pincode");
var br11=linebreaker("br");

var gender=labelcreate("label", "for", "gender", "Gender");
var br12=linebreaker("br");
var male=labelcreate("label", "for", "gender", "Male");
var maleInput=inputcreate("input", "type", "radio", "id", "male","name","grp1");
var female=labelcreate("label", "for", "gender", "Female")
var femaleInput=inputcreate("input", "type", "radio","id", "female","name","grp1");
var br13=linebreaker("br");

var fooddivs=document.createElement("div");
fooddivs.setAttribute("class", "foodlist");
fooddivs.setAttribute("id","foodlist1");
var br14=linebreaker("br");
var food=labelcreate("label","for","foodlists", "Please select your fav food");
var br15=linebreaker("br");
var food1Input=inputcreate("input","type","checkbox", "name","food", "id","fd1","value","North Indian Food");
var food1=labelcreate("label", "for", "fd1", "North Indian Food");
var br16=linebreaker("br");
var food2Input=inputcreate("input","type","checkbox", "name","food", "id","fd2","value","South Indian Food");
var food2=labelcreate("label", "for", "fd2", "South Indian Food");
var br17=linebreaker("br");
var food3Input=inputcreate("input","type","checkbox", "name","food", "id","fd3","value","Chinese Food");
var food3=labelcreate("label", "for", "fd3", "Chinese Food");
var br18=linebreaker("br");
var food4Input=inputcreate("input","type","checkbox", "name","food", "id","fd4","value","Sea Food");
var food4=labelcreate("label", "for", "fd4", "Sea Food");


fooddivs.append(food,br15,food1Input,food1,br16,food2Input,food2,br17,food3Input,food3,br18,food4Input,food4);

var br19=linebreaker("br");

var state=labelcreate("label", "for", "state", "State");
var br20=linebreaker("br");
var stateInput=inputcreate("input", "type", "text", "id", "state","placeholder", "State");
var br21=linebreaker("br");

var country=labelcreate("label", "for", "cntry", "Country");
var br22=linebreaker("br");
var countryInput=inputcreate("input", "type", "text", "id", "cntry","placeholder", "Country");
var br23=linebreaker("br");

var btn=document.createElement("button");
btn.setAttribute("type","button");
btn.innerHTML="Submit";
btn.classList.add("btn", "btn-primary")
btn.style.marginTop="20px";
btn.style.textAlign="center";
btn.addEventListener("click", onclick);
function onclick(){
  var row=tableTag.insertRow(-1);
  var FN=row.insertCell(0);
  FN.innerHTML=`${firstnameInput.value}`;
  var LN=row.insertCell(1);
  LN.innerHTML=`${lastnameInput.value}`;
  var email=row.insertCell(2);
  email.innerHTML=`${emailInput.value}`;
var addr=row.insertCell(3);
addr.innerHTML=`${addressinput.value}`;
var pin=row.insertCell(4);
pin.innerHTML=`${pincodeInput.value}`
var genders=row.insertCell(5);
var rd1=document.getElementById("male");
var rd2=document.getElementById("female");
 if(rd1.checked == true)
 {
    genders.innerHTML="Male";
 } else if(rd2.checked == true)
 {
  genders.innerHTML="Female";
 } else{
  alert("please select the Gender");
 }
 let foodarray=[];
 var result=document.createElement("div");
 result.id="foodresult";
 
 
var foodchart=row.insertCell(6);
var fd1=document.getElementsByName("food");
// var fd2=fd1.querySelector('input[type="checkbox"]');

fd1.forEach(fd => {
  if(fd.checked== true)
  {
    foodarray.push(fd.value);
    console.log(fd.value);  
  }
});


foodchart.innerHTML=`${result=foodarray.join(",")}`;

var states=row.insertCell(7);
states.innerHTML=`${stateInput.value}`;

var countries=row.insertCell(8);
countries.innerHTML=`${countryInput.value}`;

}


let tableDiv = createtable("div");
tableDiv.setAttribute("class", "table1");

let tableTag = createtable("table");
tableTag.classList.add("table", "table-bordered");

let tableBody = createtable("tbody");
tableBody.setAttribute("id", "t-body");

let tableHead = createtable("thead");
tableHead.setAttribute("id", "table-head");

let tableTr = createtable("tr");

let tableTh1 = createtable("th");
tableTh1.innerText = "FirstName";

let tableTh2 = createtable("th");
tableTh2.innerText = "Last Name";

let tableTh3 = createtable("th");
tableTh3.innerText = "Email";

let tableTh4 = createtable("th");
tableTh4.innerText = "Address";

let tableTh5 = createtable("th");
tableTh5.innerText = "pincode";

let tableTh6 = createtable("th");
tableTh6.innerText = "Gender";

let tableTh7 = createtable("th");
tableTh7.innerText = "Food";

let tableTh8 = createtable("th");
tableTh8.innerText = "State";

let tableTh9 = createtable("th");
tableTh9.innerText = "Country";

function createtable(taganme) {
  let elements = document.createElement(taganme);
  return elements;
}
 

colum1.append(h2,br0,firstName,br,firstnameInput,br1,lastName,br2,lastnameInput,br3,email,br4,emailInput,br5, address,br6,addressinput,br7,pincode,br10,pincodeInput,br11,gender,br12,male,maleInput,female,femaleInput,br13,fooddivs,state,br20,stateInput,br21,country,br22,countryInput,br23,btn);
tableTr.append(tableTh1,tableTh2 ,tableTh3,tableTh4,tableTh5,tableTh6, tableTh7,tableTh8, tableTh9);
tableHead.append(tableTr);
tableTag.append(tableHead);
tableDiv.append(tableTag,tableBody);
colum2.append(tableDiv);
row.append(colum1,colum2);
container.append(row);
document.body.append(container);