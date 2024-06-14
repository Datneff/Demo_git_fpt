{/* <th>No.</th>
<th>ID</th>
<th>Name</th>
<th>Phone</th>
<th>Gender</th>
<th>Gpa</th>
<th>Status</th> */}

var student1 = {
    id: "MSV001",
    name: "Nguyen Van A",
    phone: "012345678",
    gender: false,
    gpa: 3.5324234,
    getStatus: function() {
        if(this.gpa <= 2.0) {
            return "False";
        } else {
            return "Pass";
        }
    }
}

var student2 = {
    id: "MSV002",
    name: "Nguyen Van B",
    phone: "032183821",
    gender: true,
    gpa: 2.823432423,
    getStatus: function() {
        if(this.gpa <= 2.0) {
            return "False";
        } else {
            return "Pass";
        }
    }
}
var student3 = {
    id: "MSV003",
    name: "Nguyen Van C",
    phone: "0423432423",
    gender: true,
    gpa: 1.52342345235,
    getStatus: function() {
        if(this.gpa <= 2.0) {
            return "False";
        } else {
            return "Pass";
        }
    }
}
var student4 = {
    id: "MSV004",
    name: "Nguyen Van D",
    phone: "0844172423",
    gender: false,
    gpa: 4.0,
    getStatus: function() {
        if(this.gpa <= 2.0) {
            return "False";
        } else {
            return "Pass";
        }
    }
}

let arrayStudents = [student1, student2, student3, student4];
fillTable(arrayStudents);

function fillTable(students) {
    let tbodyElement = document.getElementsByTagName('tbody')[1];
    
    let tbodyContent = '';
    students.forEach(function(element, index) {
        
        var tr = `<tr>
                <th>${index + 1}</th>
                <th>${element.id}</th>
                <th>${element.name}</th>
                <th>${element.phone}</th>
                <th>${element.gender ? 'Male' : 'Female'}</th>
                <th>${element.gpa.toFixed(2)}</th>
                <th>${element.getStatus()}</th>
                </tr>`;
            tbodyContent = tbodyContent + tr;
    });
    tbodyElement.innerHTML = tbodyContent;
}
