var mysql = require('mysql');/**To use the mysql module which makes accessing and manipulating data in a database possible*/
const fs=require('fs');/**To use the File System module to interact with the file system in a way modeled on standard POSIX functions.*/
const util=require('util');/**To use the Util module for formatting purposes*/
/**This variable stores the connection between the database and 
 * the program and uses the details mentioned to start a connection to the database */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsdb'
  });
    var stuff=fs.readFileSync('InternationalCovid19Cases.csv','utf8')/**To read the contents of csv the file containing the data */
    fs.writeFileSync('NewInternationalCovid19Cases.csv',stuff)/**To create a new file and write the read contents into that new file */
    var localArray=[]
    var use=stuff.toString().split("\r\n")/**To split the csv data into rows which can be  converted into an array */
    for(var i=1;i<use.length;i++){ 
    localArray[i]=use[i].split(",");
    }
/** To connect to the database when invoked*/
function read(){
    connection.connect(function(err) {
    console.log("Connected!");
  })
}
/**To create a table in the database and all records from the dataset
 * @param {*} table  table name of the new table being created
 * @param {*} ins  to enable insert functionality
 * @param {*} crt  to enable create functionality
*/
function create(table, ins,crt){
if(crt=='Y'){
var sql = "CREATE TABLE "+table+"(Serial INT AUTO_INCREMENT PRIMARY KEY, id TEXT, date DATE, cases INT(11), deaths INT(11), name_fr TEXT, name_en TEXT)";
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});
}  
if(ins=='Y'){
    insertDB(table);
  }
}
/**To insert all values from the dataset into the table in database
 * @param {*} table name of the table where records are being inserted
*/
    function insertDB(table){
    for(var i=1;i<use.length;i++){
    var sql="INSERT INTO "+table+"(Id, Date, Cases, Deaths, Name_fr, Name_en) VALUES ("+"'"+localArray[i][0]+"'"+" ,"+"'"+localArray[i][1]+"'"+" ,"+"'"+localArray[i][2]+"'"+" ,"+"'"+localArray[i][3]+"'"+" ,"+"'"+localArray[i][4]+"'"+" ,"+"'"+localArray[i][5]+"'"+")";
    connection.query(sql,function(err,result){
        if(err) throw err;
        console.log(result.insertId);
        console.log("added");
    });
  }
}
/**
 * To insert a new record in the table in database
 * @param {*} table table name of the table where a record is inserted
 * @param {*} id id of the new record
 * @param {*} date date of the new record
 * @param {*} cases number of cases in the new record
 * @param {*} deaths number of deaths in the new record
 * @param {*} nfr country name in french of the new record
 * @param {*} nen countru namee in english of the new record
 */
function insertIntoDB(table,id,date,cases,deaths,nfr,nen){
  var sql="INSERT INTO "+table+"(Id, Date, Cases, Deaths, Name_fr, Name_en) VALUES ("+"'"+id+"'"+" ,"+"'"+date+"'"+" ,"+"'"+cases+"'"+" ,"+"'"+deaths+"'"+" ,"+"'"+nfr+"'"+" ,"+"'"+nen+"'"+")";
  connection.query(sql,function(err,result){
      if(err) throw err;
   console.log("The record has been inserted with id"+result.insertId);
  });
}
/**
 * To delete a record from a table in database
 * @param {*} key the primary key id of the record which is to be deleted from the database.
 * @param {*} table the table name of the table from which the record is being deleted
 */
    function deleteFromDB(key,table){
    var sql="DELETE FROM "+table+" WHERE Serial="+key;
    connection.query(sql,function(err,result){
        if(err) throw err;
        console.log("deleted");
     })
    }
  /**
   * To select and display a record from the table in database
   * @param {*} number the primary key id of the record which is to be selected and displayed
   * @param {*} table the table name of the table from which the record is being displayed
   */  
  function select(number,table){
    var sql="SELECT * FROM "+table+" WHERE Serial="+number;
    connection.query(sql,function(err,result){
      if(err) throw err;
      if(result[0].date.getDate()<10 && result[0].date.getMonth()<10)
          console.log(util.format('%s   %s-0%s-0%s           %s  %s   %s   %s',result[0].id,result[0].date.getFullYear(),result[0].date.getMonth(),result[0].date.getDate(),result[0].cases,result[0].deaths,result[0].name_fr,result[0].name_en));
          else if(result[0].date.getDate()<10 && result[0].date.getMonth()>=10)
          console.log(util.format('%s   %s-%s-0%s           %s  %s   %s   %s',result[0].id,result[0].date.getFullYear(),result[0].date.getMonth(),result[0].date.getDate(),result[0].cases,result[0].deaths,result[0].name_fr,result[0].name_en));
          else if(result[0].date.getDate()>=10 && result[0].date.getMonth()<10)
          console.log(util.format('%s   %s-0%s-%s           %s  %s   %s   %s',result[0].id,result[0].date.getFullYear(),result[0].date.getMonth(),result[0].date.getDate(),result[0].cases,result[0].deaths,result[0].name_fr,result[0].name_en));
          else
          console.log(util.format('%s   %s-%s-%s           %s  %s   %s   %s',result[0].id,result[0].date.getFullYear(),result[0].date.getMonth(),result[0].date.getDate(),result[0].cases,result[0].deaths,result[0].name_fr,result[0].name_en));
    })
  } 
  /**
   * To display all records from the table in database
   * @param {*} table the table name of the table
   */ 
  function viewDB(table){
    var sql="SELECT * FROM "+table;
  connection.query(sql,function(err,result){
        if(err) throw err;
        var len=use.length-3;
        for(var i=0;i<=len;i++){
          if(result[i].date.getDate()<10 && result[i].date.getMonth()<10)
          console.log(util.format('%s   %s-0%s-0%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
          else if(result[i].date.getDate()<10 && result[i].date.getMonth()>=10)
          console.log(util.format('%s   %s-%s-0%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
          else if(result[i].date.getDate()>=10 && result[i].date.getMonth()<10)
          console.log(util.format('%s   %s-0%s-%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
          else
          console.log(util.format('%s   %s-%s-%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
        }
    })
  }
  /**
 * To edit an existing record in the table and display the edited record from the database
 * @param {*} table table name of the table where a record is inserted
 * @param {*} id id of the new record
 * @param {*} date date of the new record
 * @param {*} cases number of cases in the new record
 * @param {*} deaths number of deaths in the new record
 * @param {*} nfr country name in french of the new record
 * @param {*} nen countru namee in english of the new record
   */
  function edit(table,key,id,date,cases,deaths,nfr,nen){
    sql="UPDATE "+table+" SET id= '"+id+"',date='"+date+"',cases='"+cases+"',deaths='"+deaths+"',name_fr='"+nfr+"',name_en='"+nen+"' WHERE Serial= "+key;
    connection.query(sql,function(err,result){
      if(err) throw err;
      select(key,table);
       })
  }
  /**
   * To individually sort one or more than one columns in ascending or descending order
   * @param {*} table table name of the table where the data to be sorted exists
   * @param {*} array two dimensional array containing column names and its sorting specification(ascending/descending)
   */
  function sort(table,array){     
      switch(array.length){
        //each case is for the number of columns the user wants to sort according to which the sql statement has been modified
        case 1:sql="SELECT * FROM  `"+table+"` ORDER BY "+array[0][0]+" "+array[0][1]+" ;";
          break;
        case 2:sql="SELECT * FROM `"+table+"` ORDER BY "+array[0][0]+" "+array[0][1]+" , "+array[1][0]+" "+array[1][1]+" ;";
          break;
        case 3:sql="SELECT * FROM `"+table+"` ORDER BY "+array[0][0]+" "+array[0][1]+" , "+array[1][0]+" "+array[1][1]+" , "+array[2][0]+" "+array[2][1]+" ;";
          break;
        case 4:sql="SELECT * FROM "+table+" ORDER BY '"+array[0][0]+"' '"+array[0][1]+"' , '"+array[1][0]+"' '"+array[1][1]+"' , '"+array[2][0]+"' '"+array[2][1]+"' , '"+array[3][0]+"' '"+array[3][1]+"'";
          break;
        case 5:sql="SELECT * FROM "+table+" ORDER BY '"+array[0][0]+"' '"+array[0][1]+"' , '"+array[1][0]+"' '"+array[1][1]+"' , '"+array[2][0]+"' '"+array[2][1]+"' , '"+array[3][0]+"' '"+array[3][1]+"' , '"+array[4][0]+"' '"+array[4][1]+"'";
          break;
        case 6:sql="SELECT * FROM "+table+" ORDER BY '"+array[0][0]+"' '"+array[0][1]+"' , '"+array[1][0]+"' '"+array[1][1]+"' , '"+array[2][0]+"' '"+array[2][1]+"' , '"+array[3][0]+"' '"+array[3][1]+"' , '"+array[4][0]+"' '"+array[4][1]+"' , '"+array[5][0]+"' '"+array[5][1]+"'";    
      }
      connection.query(sql,(err,result)=>{
        if(err) throw err;
        for(var i=0;i<=result.length;i++){
          if(result[i].date.getDate()<10 && result[i].date.getMonth()<10)
          console.log(util.format('%s   %s-0%s-0%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
          else if(result[i].date.getDate()<10 && result[i].date.getMonth()>=10)
          console.log(util.format('%s   %s-%s-0%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
          else if(result[i].date.getDate()>=10 && result[i].date.getMonth()<10)
          console.log(util.format('%s   %s-0%s-%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
          else
          console.log(util.format('%s   %s-%s-%s           %s  %s   %s   %s',result[i].id,result[i].date.getFullYear(),result[i].date.getMonth(),result[i].date.getDate(),result[i].cases,result[i].deaths,result[i].name_fr,result[i].name_en));
        }
      });
    }
/**
 * To export all the functions to controller.js
 */  
module.exports={
  create:create,
    view:viewDB,
  insert:insertIntoDB,
 connect:read,
  select:select,
    edit:edit,
  delete:deleteFromDB,
  sorted:sort
}
