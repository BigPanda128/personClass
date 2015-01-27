//Ryan Postma
//CMP 344
//Chapter 3 exercise Person class
//1/26/15
//create a person object that stores name and gender
///////////////////////////////////////

//prints out the contents of the list
function displayList(list) {
	for (var i = 0; i < list.length; ++i) {
		print(list[i].Name + ", " + list[i].Gender);
	}
}

//prints all the males
function isMale(list) {
	for (var i = 0; i < list.length; ++i) {
		if(list[i].Gender == 'male') {
			 print("male " + list[i].Name);
		}
	}
}

//prints out all the females
function isFemale(list) {
	for (var i = 0; i < list.length; ++i) {
		if(list[i].Gender == 'female') {
			print("female " + list[i].Name);
		}
	}
}

/////////////////////////////////////

var list = [
{ Name: 'Kandy', Gender: 'female'},
{ Name: 'Chuck', Gender: 'male'},
{ Name: 'Mary', Gender: 'female'},
{ Name: 'Sue', Gender: 'female'},
{ Name: 'Phil', Gender: 'male'},
{ Name: 'Jessica', Gender: 'female'},
{ Name: 'Amy', Gender: 'female'},
{ Name: 'Jack', Gender: 'male'},
{ Name: 'Ryan', Gender: 'male'},
{ Name: 'Barbra', Gender: 'female'}
];

displayList(list);

isMale(list);
isFemale(list);
