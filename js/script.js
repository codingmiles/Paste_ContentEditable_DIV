if(document.attachEvent) {
	document.attachEvent('paste', onPasteTriggered);
}
else if(document.addEventListener) {
	document.addEventListener('paste', onPasteTriggered, false);
}

/*Called whenever a paste event has occured*/
function onPasteTriggered(e) {
	var copiedData = e.clipboardData.items[0]; //Get the clipboard data

	/*If the clipboard data is of type image, read the data*/
	if(copiedData.type.indexOf("image") == 0) {
		var imageFile = copiedData.getAsFile(); 

		/*We will use HTML5 FileReader API to read the image file*/
		var reader = new FileReader();
		
		reader.onload = function (evt) {
			var result = evt.target.result; //base64 encoded image

			/*Create an image element and append it to the content editable div*/
			var img = document.createElement("img");
			img.src = result;
			document.getElementById("editablediv").appendChild(img);
        };

        /*Read the image file*/
        reader.readAsDataURL(imageFile);
	}
}

