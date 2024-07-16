// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text");

// newElement.appendChild(newText);

// document.getElementById("test").appendChild(newElement);

// var target = document.getElementById("test");
// target.insertBefore(newElement,target.childNodes[0]);
// target.insertAdjacentElement("beforebegin", newElement);

// console.log(newElement);
// console.log(newText);




// var newElement = document.createElement("li");
// var newText = document.createTextNode("Wow new test");;

// newElement.appendChild(newText);

// var target = document.getElementById("list");
// var oldElement = target.children[0];

// target.removeChild(oldElement);





/* cloneNode */
// var target = document.getElementById("list1").children[0];
// var copyElement = target.cloneNode(true);
// console.log(copyElement);
// document.getElementById("list2").appendChild(copyElement);


/*contains */
// var parentElement = document.getElementById("test");
// var target = document.getElementById("sit");
// var find = parentElement.contains(target);
// console.log(find);


/*hasAttribute */
// var target = document.getElementById("test");
// var find = target.hasAttribute("class");
// console.log(find);


/*hasChildNodes */
// var target = document.getElementById("test");
// var find = target.hasChildNodes();
// console.log(find);


/*isEqualNode */
// var target1 = document.getElementById("list1").firstElementChild;
// var target2 = document.getElementById("list2").children[1];
// var equal = target1.isEqualNode(target2);
// console.log(equal);


/* */