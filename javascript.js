var selectedRow = null;
function onFormSubmit(){
 event.preventDefault();
   var formData = readDataFromForm();
   if (selectedRow === null){
    insertDataIntheTable(formData);
   }else{
updateRecord(formData);
   }
resetForum();
}
//Retrieving data  
function readDataFromForm(){
    var formData = {};
    formData ["productname"]=document.getElementById("productname").value;
    formData ["productcode"]=document.getElementById("productcode").value;
    formData ["productqty"]=document.getElementById("productqty").value;
    formData ["productprice"]=document.getElementById("productprice").value;
return formData;

}
// Inserting the data in the table 
function insertDataIntheTable(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productcode;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.productqty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.productprice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick ="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`
}
//Edit function 
function onEdit (td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('productcode').value = selectedRow.cells[1].innerHTML;
    document.getElementById('productqty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('productprice').value = selectedRow.cells[3].innerHTML;
}
//update function 
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productname;
    selectedRow.cells[1].innerHTML = formData.productcode;
    selectedRow.cells[2].innerHTML = formData.productqty;
    selectedRow.cells[3].innerHTML = formData.productprice;
}
//delete 
function onDelete(td){
    if (confirm("do you really want to delete ")){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForum();
}
//resetting 

function resetForum (){
    document.getElementById('productname').value =''; 
    document.getElementById('productcode').value ='';
    document.getElementById('productqty').value = '';
    document.getElementById('productprice').value ='';
}