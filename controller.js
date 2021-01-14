/*The controller file connects the view and scripts file, takes user input and uses the scripts file to use the database and produce the result*/ 
var answer;/**To store user choice to run or quit the program */
const view=require('./view.js');/**To import methods exported from view.js file */
const prompt=require('prompt-sync')();/**To use the prompt sync module for asking and getting user input */
const script=require('./scripts.js');/**To import methods exported from scripts.js file */
    view.name();/**Method imported from view.js file to display name */
    view.view();/**Method imported from view.js file to display user menu */
    answer=prompt(view.question());/**To prompt user to input a choice based on the user menu */
    switch(answer)
    {
        /**Case to work when user enters 'A' ,the read/create function is imported from scripts.js file and invoked depending on the user input*/
        case 'A':
            view.name()
            let ch1=prompt(view.creartable());           
            let ins=prompt(view.insert());
            let tn= prompt(view.tablen());
            script.create(tn,ins,ch1);
            if(ch1||ins=='X'){
                script.connect();
            }
            break; 
        /**Case to work when user enters 'B' ,the view function is imported from scripts.js file and displays all records from the database*/
        case 'B':
            view.name()
            let tnb= prompt(view.tablen());
            // script.view(tnb);

            break;
        /**Case to work when user enters 'D' ,the select function is imported from scripts.js file and displays a specific record from database requested by the user*/
        case 'D':
            view.name();
            let tnd= prompt(view.tablen());
            let number=prompt(view.select());
            script.select(number,tnd);
            break;
        /**Case to work when user enters 'C' ,the insert function is imported from scripts.js file and a new record made by the user is added to the database*/     
        case 'C':
            view.name();
            let tnc= prompt(view.tablen());
            let id=prompt(view.getId());
            let date=prompt(view.getDate());
            let cases=prompt(view.getCases());
            let deaths=prompt(view.getDeaths());
            let fr=prompt(view.getfrName());
            let en=prompt(view.getenName());
            script.insert(tnc,id,date,cases,deaths,fr,en);
            break;
        /**Case to work when user enters 'E' ,the edit function is imported from scripts.js file and a record specified by the user is edited with new values inputted by the user*/
        case 'E': 
            view.name();
            let tne= prompt(view.tablen());
            let num=prompt(view.getNum());
            var isedit=prompt(view.edit());
            if(isedit=="Y"){
                let id=prompt(view.getId());
                let date=prompt(view.getDate());
                let cases=prompt(view.getCases());
                let deaths=prompt(view.getDeaths());
                let fr=prompt(view.getfrName());
                let en=prompt(view.getenName());
                script.edit(tne,num,id,date,cases,deaths,fr,en);
                view.done();
            }
            break;
        /**Case to work when user enters 'F' ,the delete function is imported from scripts.js file and and a record selected by the user is deleted*/
        case 'F':
            view.name();
            let tnf= prompt(view.tablen());
            let index=prompt(view.remove());
            script.select(index,tnf);
            let choice=prompt(view.confirm());
            if(choice=="Y"){
                   script.delete(index,tnf); 
            }
            break;
        /**Case to work when user enters 'G' ,the sort function is imported from scripts.js file and user can sort columns in ascending or descending order */
            case 'G':
            var rowArray=[]
            let tnsort= prompt(view.tablen());
            let nnum= prompt("How many columns is the sort based on?");
            for(let i=0;i<nnum;i++){
                var columnArray=[]
                let z=i+1;
                columnArray[0]=prompt("Enter column name "+z+" for sorting: ");
                columnArray[1]=prompt("Enter 'ASC' to sort in ascending order and 'DESC' to sort in descending order: ");
                rowArray[i]=columnArray    
            }
            script.sorted(tnsort,rowArray);
        /**When user enters an invalid input, this informs the user that their input is invalid */
            break;
            case 'N':
                process.exit();
            default:
            console.log(view.invalid());
            break; 
        }
    

