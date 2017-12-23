var personId = 0;
function like(personId) {
	Persons[personId].likes +=1;
	document.getElementById("person-" + personId).innerHTML = Persons[personId].likes;
};

var Persons = [
	{
	Name: "John",
	Surname: "Doe",
	FavouritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	Age: 25,
	myPhoto: "img\\boy1.800x1000.jpg",
	likes:0
	},

	{
	Name: "Jane",
	Surname: "Doe",
	FavouritePerformers: ["Brad Pitt", "Sean Connery", "Emma Watson"],
	Age: 32,
	myPhoto: "img\\girl1.800x1000.jpg",
	likes:0
	},

	{
	Name: "Maxina",
	Surname: "Musterman",
	FavouritePerformers: ["Justin Timberlake", "Angelina Jolie", "Heath Leadger"],
	Age: 27,
	myPhoto: "img\\girl2.800x1000.jpg",
	likes:0
	},

	{
	Name: "Max",
	Surname: "Musterman",
	FavouritePerformers: ["Dustin Hofmann", "Ed Sheeran", "Justin Timberlake"],
	Age: 29,
	myPhoto: "img\\boy2.800x1000.jpg",
	likes:0
	}
];