let elList = document.querySelector(".js-list")
let elSelect = document.querySelector(".js-select")

function Domgachiqarator(array, node){
	for (arr of array){
		var elItem = document.createElement("li");
		var elImg = document.createElement("img");
		var elId = document.createElement("h2");
		var elNum = document.createElement("p");
		var elType = document.createElement("p");
		var elHeight = document.createElement("p");
		var elWeight = document.createElement("p");
		var elWeaknesses = document.createElement("p");
		
		node.appendChild(elItem)
		elItem.appendChild(elImg)
		elItem.appendChild(elId)
		elItem.appendChild(elNum)
		elItem.appendChild(elType)
		elItem.appendChild(elHeight)
		elItem.appendChild(elWeight)
		elItem.appendChild(elWeaknesses)
		
		elId.textContent = `ID: ${arr.id}`;
		elNum.textContent = `Num: ${arr.num}`
		elImg.src = `${arr.img}`
		elType.textContent = `Type: ${arr.type}`
		elHeight.textContent = `Height: ${arr.height}`
		elWeight.textContent = `Weight: ${arr.weight}`
		elWeaknesses.textContent = `Weaknesses: ${arr.weaknesses}`

		elItem.setAttribute("class", "item")
		elImg.setAttribute("class", "img")
		elWeaknesses.setAttribute("class", "weakness")
	}
}

Domgachiqarator(pokemons,elList);
let myArray = [];

for (item of pokemons) {
	myArray.push(...item.type);
}
let mySet = new Set(myArray);

for (const item of Array.from(mySet)) {
	let li = document.createElement("option");
	li.textContent = item;
	elSelect.appendChild(li);
}

var result = [];
elSelect.addEventListener("change",function(){
	elList.innerHTML = "";
	result = [];
	pokemons.forEach((poc) => {
		if(poc.type.includes(elSelect.value)){
			result.push(poc);
		}
	})
	Domgachiqarator(result,elList);
	
});