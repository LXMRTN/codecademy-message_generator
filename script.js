const namesArr = ["Toby", "Michael", "Andy", "Jim", "Dwight", "Creed", "Angela", "Stanley", "Oscar", "Kevin"];
const verbArr = ["likes", "enjoys", "loves", "digs", "dislikes", "hates", "detests", "resents", "rejects"];
const seasonArr = ["spring", "summer", "autumn", "winter"];

function randIndex(array) {
	const randNum = Math.floor(Math.random() * array.length);
	return array[randNum];
}

function randSentence() {
	return randIndex(namesArr) + " " + randIndex(verbArr) + " " + randIndex(seasonArr) + ".";
}

console.log(randSentence());
