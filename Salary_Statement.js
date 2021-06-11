function employees(){
	
	var n = document.getElementById("emp_no").value;
	
	if(isNaN(n)){
		document.getElementById("numloc").innerHTML = "Error : Enter Numeric Value Only..."
		return false;
	}
	
	else{
		
		if(n>0){
			
			var temp = document.getElementById("table");
			temp.innerHTML = "";
			var header = "<tr><th>Employee Name</th><th>Employee No.</th><th>Basic Salary</th><th>House Rental Allownace</th><th>Income-tax</th><th>Net Salary</th><th class='text-center' id='print'>Download Statement</th></tr>"
			var print = "<button onclick='window.print()' class='btn btn-sm'>Print</button>"
			var letters = /^[A-Za-z]+$/;
			
			for(var i=1; i<=n; i++){
				
				var name = prompt("For Employee "+i+"\n\nEnter Employee Name : ");
				
				if(name.match(letters)){
					var no = parseInt(prompt("Enter Employee No. : "));
					var salary = parseInt(prompt("Enter Basic Salary of The Employee : "));
					var hr = parseInt(salary*5/100);
					var tax = parseInt(salary*3/100);
					var net = parseInt(salary + hr - tax);
					document.getElementById("head").innerHTML = header;
					document.getElementById("table").innerHTML = temp.innerHTML+"<tr><td>"+name+"</td><td>"+no+"</td><td>"+salary+"</td><td>"+hr+"</td><td>"+tax+"</td><td>"+net+"</td><td class='text-center'>"+print+"</td></tr>";
				}
					
				else{
					window.alert("Error : Enter Only Alphbetic Value...");
					break;
				}
			}
		}
		
		else{
			document.getElementById("numloc").innerHTML = "Error : Enter The Value Which Is Greater Then Zero..."
		}
	}
}