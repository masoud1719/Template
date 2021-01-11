let clickHandler = () => {
	const div = document.createElement("div");
	const template = document.getElementById("myTemplate");
	let templatebody = document.importNode(template.content, true);
	let p = templatebody.querySelector("p");
	p.textContent = "this is a paragraph";
	div.append(templatebody);
	document.body.append(div);
};

const btn = document.getElementById("btn");

btn.addEventListener("click", clickHandler);
