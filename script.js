/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

function getHelp() {
	alert("To begin, input the values for the height and width of the two matrices\n" + 
	" *Remember the width of the first matrix must be equal to the height of the second matrix*\n"
	+ "Once you have entered these values hit submit\n Then input each value for the matrices")
	}

function checkInput() {
  var h1 = document.forms["form1"]["h1"].value;
  var w1 = document.forms["form1"]["w1"].value;
  var h2 = document.forms["form1"]["h2"].value;
  var w2 = document.forms["form1"]["w2"].value;
  var compH2 = h2;
  if (w1 != compH2){
    alert("First matrix width must equal second matrix height");
    return false;
  } 
  var htmlMat=document.getElementById("matrix");
  var i=1;
  var j=1;
  while (j<=h1){
  	while (i<=w1){
    	var id = "m" + j + i;
  		var matr = document.createElement("input");
  		matr.id = id;
  		matr.size = "4";
  		matr.type = "number";
  		htmlMat.append(matr);
  		console.log(id);
  		i++;
  	}
  	var addBreak = document.createElement("br");
  	htmlMat.append(addBreak);
  	i=1;
  	j++;
  }
  htmlMat.append("x");
  var addBreak = document.createElement("br");
  htmlMat.append(addBreak);
  j=1;
  i=1;
  while (j<=h2){
  	while (i<=w2){
    	var id = "n" + j + i;
  		var matr = document.createElement("input");
  		matr.id = id;
  		matr.type = "number";
  		matr.size = "4";
  		htmlMat.append(matr);
  		console.log(id);
  		i++;
  	}
  	var addBreak = document.createElement("br");
  	htmlMat.append(addBreak);
  	i=1;
  	j++;
  }
  var addButton = document.createElement("input");
  addButton.type="button";
  addButton.value="Submit";
  addButton.id = "matSubmit"
  htmlMat.append(addButton);
  document.getElementById("matSubmit").addEventListener("click", calcMatrix);
  function calcMatrix() {
  	var i1 = 1;
  	var j1 = 1;
  	var i2 = 1;
  	var j2 = 1;
  	var solved = document.createElement("b");
  	solved.innerHTML = "Answer:";
    document.getElementById("answer").append(solved);
    var addBr = document.createElement("br");
    document.getElementById("answer").append(addBr);
  	while (j1 <= h1) {
  	  while (i2 <= w2) {
  	  var total = 0;
  	    while (i1 <= w1 && j2 <= h2) {
    	  var index1 = "m" + j1 + i1;
    	  var index2 = "n" + j2 + i2;
    	  var val1 = document.getElementById(index1).value;
    	  var val2 = document.getElementById(index2).value;
    	  var singleMult = val1 * val2;
    	  total = total + singleMult;
    	  //alert(total);
    	  i1++;
    	  j2++;
        }
        //alert(total);
        var answer = " " + total;
        document.getElementById("answer").append(answer);
      i1=1;
      j2=1;
      i2++;
      }
      var answerBr = document.createElement("br");
      document.getElementById("answer").append(answerBr);
      i2=1;
      j1++;
    }
  }
}


