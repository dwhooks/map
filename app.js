function map(array, callback) {
	var mapped = [];
	for(var i = 0, len = array.length; i < len; i++) {
		mapped.push(callback(array[i]));
	}
	return mapped;
}