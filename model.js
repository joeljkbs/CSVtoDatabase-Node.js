// /*The model file is the brain of the program having the code necessary to produce the result*/ 
// const { Console, memory, exception } = require('console');
// const fs=require('fs');/**To use the File System module to interact with the file system in a way modeled on standard POSIX functions.*/
// const { memoryUsage } = require('process');
// const util=require('util');/**To use the Util module for formatting purposes*/
// var results=[]; /** An empty array which will store the data from the dataset*/
// /**
//  * Function to read the contents of the csv file.
//  * Exported using the exports module so that it can be accessed in other files.
//  */
// module.exports.read=function read(){
// try{
//     fs.readFileSync('InternationalCovid19Cases.csv',function(err){
//    if(err){
//        console.log("Cannot read file"); 
//         }
//     })
//     console.log("File read");
// }
// catch{
// throw exception
// }
// }
// /**
//  * Function to write the contents of a file which is read into a new file. 
//  */
// // module.exports.write=function write(){
//     var stuff=fs.readFileSync('InternationalCovid19Cases.csv','utf8')
//     fs.writeFileSync('NewInternationalCovid19Cases.csv',stuff)
//     var localArray=[]
//     var use=stuff.toString().split("\r\n")
//     for(var i=1;i<use.length;i++){ 
//     localArray[i]=use[i].split(",");
//     console.log(localArray[i][1]);
//     }
//     console.log("New file created");
// // }

// /**
//  * Function to create,edit and delete records from the data structure in memory.
//  * @param {*} nrec Pass the value 'Y' to create a new record.
//  * @param {*} isdisplay Pass the value 'Y' to display the values stored in the data structure.
//  * @param {*} isearch Pass the value 'Y' to search for a record stored in the data structure.
//  * @param {*} num Pass the value of the index number of the record stored in the data structure.
//  * @param {*} isedit Pass the value 'Y' to edit a record stored in the data structure.
//  * @param {*} remove Pass the value 'Y' to remove a record stored in the data structure.
//  * @param {*} nid Pass the new value of Id field to be changed.
//  * @param {*} ndate Pass the new value of Date field to be changed.
//  * @param {*} ncases Pass the new value of Cases field to be changed.
//  * @param {*} ndeaths Pass the new value of Deaths field to be changed.
//  * @param {*} nfr Pass the new value of Name_fr field to be changed.
//  * @param {*} nen Pass the new value of Name_en field to be changed.
//  */
// // module.exports.memory=function memory(nrec,isdisplay,isearch,num,isedit,remove,nid,ndate,ncases,ndeaths,nfr,nen){
// //    var localArray=[]
// //    var str=fs.readFileSync('InternationalCovid19Cases.csv','utf-8')
// //    var use=str.toString().split("\r\n")
// //    for(var i=0;i<100;i++){ 
// //    localArray[i]=use[i].split(",");
// //    }
// //    if(nrec=="Y"){localArray.push([nid,ndate,ncases,ndeaths,nfr,nen]);}
// //    if (isearch=='Y'){
// //        console.log(util.format('%s   %s          %s  %s   %s   %s',localArray[0][0],localArray[0][1],localArray[0][2],localArray[0][3],localArray[0][4],localArray[0][5]));
// //        var line="";
// //        /**
// //         * Assigning column names according the data in the array. 
// //         */
// //        var id=localArray[num-1][0];
// //        var date=localArray[num-1][1];
// //        var cases=localArray[num-1][2];
// //        var deaths= localArray[num-1][3];
// //        var name_fr=localArray[num-1][4];
// //        var name_en=localArray[num-1][5];
// //        if(cases.length<2)// to format the spaces and display the data in a presentable tabular form.
// //        {
// //            line=util.format('%s   %s    %s%s     %s        %s   %s', id,date,cases," ",deaths,name_fr,name_en);
// //        }
// //        else
// //            line=util.format('%s   %s    %s     %s        %s   %s', id,date,cases,deaths,name_fr,name_en);
// //        console.log(line);
// //        }
// //    if(isedit=='Y')
// //        {
// //            /**Adding new values into a particular element chosen by the user*/
// //            localArray[num][0]=nid;
// //            localArray[num][1]=ndate;
// //            localArray[num][2]=ncases;
// //            localArray[num][3]=ndeaths;
// //            localArray[num][4]=nfr;
// //            localArray[num][5]=nen;
// //            var id=localArray[num][0];
// //            var date=localArray[num][1];
// //            var cases=localArray[num][2];
// //            var deaths= localArray[num][3];
// //            var name_fr=localArray[num][4];
// //            var name_en=localArray[num][5];
// //            if(cases.length<2)// to format the spaces and display the data in a presentable tabular form.
// //            {
// //                line=util.format('%s   %s    %s%s     %s        %s   %s', id,date,cases," ",deaths,name_fr,name_en);
// //            }
// //            else
// //                line=util.format('%s   %s    %s     %s        %s   %s', id,date,cases,deaths,name_fr,name_en);
// //            console.log(line);
// //        }
// //    if(remove=="Y"){
// //        localArray.splice(num,1);
// //        }    
// //    if(isdisplay=="Y"){ 
// //    console.log(localArray.length);
// //    console.log(util.format('%s   %s          %s  %s   %s   %s',localArray[0][0],localArray[0][1],localArray[0][2],localArray[0][3],localArray[0][4],localArray[0][5]));
// //    for (var i=1;i<localArray.length;i++)
// //    {
// //        var line="";
// //        /**
// //         * Assigning column names according the data in the array. 
// //         */
// //        var id=localArray[i][0];
// //        var date=localArray[i][1];
// //        var cases=localArray[i][2];
// //        var deaths= localArray[i][3];
// //        var name_fr=localArray[i][4];
// //        var name_en=localArray[i][5];
// //        if(cases.length<2)// to format the spaces and display the data in a presentable tabular form.
// //        {
// //            line=util.format('%s   %s    %s%s     %s        %s   %s', id,date,cases," ",deaths,name_fr,name_en);
// //        }
// //        else
// //            line=util.format('%s   %s    %s     %s        %s   %s', id,date,cases,deaths,name_fr,name_en);
// //        console.log(line);
// //     }
// //     }
// // }
