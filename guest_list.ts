
// make sure to use camel case while naming a variable.

let guest_list : string[] = ['Esha', 'haniya', 'alisha'];

for(let i=0; i<guest_list.length; i++){

    console.log('\ n\nDear Miss, ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_Guest : string = 'Esha' ;

let new_Guest : string = 'Aryan' ;
guest_list[0] = new_Guest;
// i have copied he ex from above and pasted it down here.

for(let i=0; i<guest_list.length; i++){

    console.log ('\n\nDear Miss, ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(` Miss ${absent_Guest} is not coming to the party due to some personal issues.`);
// to create a loop I'm using the code writen down here
// for( let i=0; i<variable.lenght; i++){   
//  console.log ( '\n\nDear Miss, ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ')   
// }