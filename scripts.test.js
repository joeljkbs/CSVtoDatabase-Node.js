/*Test file to test the read method to read data from the file */
const tester= require('./scripts.js');
const viewer= require('./view.js')
/**
 * To test the view method in scripts.js which displays all the record in a specified table. 
 * In this case a non existent table is used to display the records, hence throwing the table does not exist error
 */
viewer.name();
describe('to view all the records in the table',()=>{
    it('should throw table not found error', () => {
        try {
            tester.view("covid");
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', 'Table not found');
        }
    });
});