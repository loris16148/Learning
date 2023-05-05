/*Five employees at a company are stored in Map in the program you are given. Their names are set as keys and their positions as values. The company is hiring one more employee. The program should take the name and the position as inputs and store them in the existing map.
Complete the program to perform that operation and output to the console the list of employees in the format shown in the sample output.

Sample Input
Bob
Developer

Sample Output
Richard : Developer
Maria : SEO Specialist
Tom : Product Manager
David : Accountant
Sophia : HR Manager
Bob : Developer
The entries() method returns an Iterator of array[key, value] in the map for each element.
Don't forget to put spaces before and after the colon (:) in the output.
*/

function main() {
    var name = readLine();
    var position = readLine();
    let employees = new Map([
    ["Richard", "Developer"],
    ["Maria", "SEO Specialist"],
    ["Tom", "Product Manager"],
    ["David", "Accountant"],
    ["Sophia", "HR Manager"]
    ]);

    //add the new pair to the map
    employees.set(name, position)
    for (var i of employees.entries()){
        console.log(i[0] +" " + ":" +" " + i[1])//your code for the output


        
    } 
}
