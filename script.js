const setOfWords = ["My name is Mahira and I am a developer. ",
	"Hope  you are having fun this is a  simple  game you can make .",
	"If you want the source code  then link  is given  in the  description so you can create your own version of this challenge.",
	" General of the Army Douglas MacArthur of his commands for making public statements about the Korean War that contradicted the administration's policies.", " a justification for film propaganda in support of the ruling Workers' Party of Korea, was published.",
	"An Oriental rug is a heavy textile made for a variety of utilitarian and symbolic purposes and originating from a region known as the Rug Belt, which stretches from Morocco across North Africa,",
	"The rugs can be pile-woven or flat-woven without pile, using various materials such as silk, wool, cotton, jute and animal hair. The origin of the Oriental rug is unknown, although it is likely to have developed from earlier floor coverings made of felt."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
	let randomNumber = Math.floor(Math.random() * setOfWords.length);
	msg.innerText = setOfWords[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
	// console.log(randomNumber)
}

const endPlay = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime) / 1000)
	console.log(totalTime)

	let totalStr = typeWords.value;
	let wordCount = wordCounter(totalStr)

	let speed = Math.round((wordCount / totalTime) * 60)

	let finalMsg = " You typed total at " + speed + " words per minutes";

	finalMsg += compareWords(msg.innerText, totalStr)

	msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let cnt = 0;

	// arrayName then forEach then it will take whole function with value and index no. of that array
	words1.forEach(function (item, index) {
		if (item == words2[index]) {
			cnt++;
		}
	})

	let errorWords = (words1.length - cnt);
	return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
}


const wordCounter = (str) => {
	let response = str.split(" ").length;
	//	console.log(response)
	return response;
}
btn.addEventListener('click', function () {
	// console.log(this)
	if (this.innerText == 'Start') {
		typeWords.disabled = false;
		playGame();
	}

	else if (this.innerText == "Done") {
		typeWords.disabled = true;
		btn.innerText = "Start";
		endPlay();
	}
})