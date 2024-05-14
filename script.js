//your JS code here. If required.
function allMethods() {
  //write your code here
	const mathMethods = Object.getOwnPropertyNames(Math)
        .filter(method => typeof Math[method] === 'function');
    return mathMethods.join(', ');
}

alert(allMethods());
