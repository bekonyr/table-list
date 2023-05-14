// contains()  класстарды издеп берет
// parentNode   родителский тегге кайрлып берет
// add

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const btn = document.querySelector(".add");
const err = document.querySelector(".err");
const table = document.querySelector(".table");
let count = 0;

btn.addEventListener("click", (el) => {
	addTask();
});

input1.addEventListener("keydown", (el) => {
	if (el.key === "Enter") {
		addTask();
	}
});

input2.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});
input3.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});

function addTask() {
	if (input1.value === "" || input2.value === "" || input3.value === "") {
		err.innerHTML = "бош орунду толтурунуз";
		err.style.color = "red";
		input3.placeholder = "бош орунду толтурунуз";
		input1.placeholder = "бош орунду толтурунуз";
		input2.placeholder = "бош орунду толтурунуз";
	} else {
		count++;
		table.innerHTML += `
        <tr class="tr">
        <td> ${count} <input  class="check mx-2" type="checkbox"  ></td>
		<td> <img src="${input3.value}" alt="img"></td>
        <td> ${input1.value} </td>
        <td> ${input2.value} </td>
        <td> <button type="button" class="btn del-btn btn-outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
</svg> delete  </button>
        </td>
        </tr> `;
		input1.value = "";
		input2.value = "";
		input3.value = "";
		err.innerHTML = "";
	}
}

table.addEventListener("click", (e) => {
	// console.log(e);
	if (e.target.classList.contains("del-btn")) {
		e.target.parentNode.parentNode.remove();
	}
});
