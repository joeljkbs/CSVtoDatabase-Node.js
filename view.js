/*The view file contains all the strings visible to the user and would also contain a GUI if a GUI was to be implemented*/
module.exports.view= function options(){
        console.log("A-Connect,Create table and Load the data in the database");
        console.log("B-Display all records in the database");
        console.log("C-Create a new record in the database");
        console.log("D-Select and display a record in the database");
        console.log("E-Select and edit a record in the database");
        console.log("F-Delete a record from database");
        console.log("G-To sort")
    }
module.exports.select=function select(){
    return "Enter the key of the record you want to display:"
}
module.exports.name=function displayName()
{
    console.log('Created by Joel Jacob Sebastian\n')
}
module.exports.question=function question(){
    return "Press the alphabets associated with any of the options above to perform the task: Press N to quit: "
}
module.exports.getId=function getId(){
    return "Enter the country id:";
}
module.exports.getDate=function getDate(){
    return "Enter the date:";
}
module.exports.getCases= function getCases(){
    return "Enter the number of cases:";
}
module.exports.getDeaths=function getDeaths(){
    return "Enter the number of deaths:";
}
module.exports.getfrName=function getfrName(){
    return "Enter the name of country in french:";
}
module.exports.getenName= function getenName(){
    return "Enter the name of country in english:";
}
module.exports.getNum= function getNum(){
    return "Enter the index of the record you want to edit:";
}
module.exports.edit=function edit(){
    return "Do you want to edit this record?; Press Y to edit and N to quit:"
}
module.exports.confirm=function remove(){
    return "Do you want to delete this record?; Press Y to confirm:"
}
module.exports.remove= function remove(){
    return "Enter the index of the record you want to delete:"
}
module.exports.done= function done(){
    return "Record edited";
}
module.exports.insert= function insert(){
    return "Do you want to insert all the records from the dataset into the database?Press Y to insert and X to continue:"
}
module.exports.tablen=function table(){
    return "Enter the name of the entity/table being used in the database:"
}
module.exports.creartable=function createtable(){
    return "Do you want to create a table? Press Y to create X to continue:"
}
module.exports.invalid= function(){
    return "Invalid Input, Please select options from A-F"
}
module.exports.columno=function(){
    "How many columns is the sort based on?"
}
module.exports.colname=function(z){
    "Enter column name "+z+" for sorting: "
}
module.exports.asc=function(){
    "Enter 'ASC' to sort in ascending order and 'DESC' to sort in descending order: "
}


