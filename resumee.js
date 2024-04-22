function printpdf() {
    var content = document.getElementById("resume");

    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button => {
        button.classList.add("none");
    });
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
        input.classList.add("none");
    })

    allButtons.forEach(button => {
        button.classList.remove("none");
    })
    allInputCheckboxes.forEach(input => {
        input.classList.remove("none");
    })

    html2pdf(content, {
        html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
}

function prepareAndPrintPdf() {
	const skillInputs = document.querySelector(".skills").getElementsByTagName('input');
	for(const skillInput of skillInputs){
		const skillDiv = document.querySelector(`.${skillInput.id}`);
		if(skillDiv){	
			skillDiv.style.display = 'inline';
			skillDiv.innerHTML = skillInput.value;
			skillInput.style.display = 'none';
		}
    }
    
    const langInputs = document.querySelector(".langg").getElementsByTagName('input');
	for(const langInput of langInputs){
		const langDiv = document.querySelector(`.${langInput.id}`);
		if(langDiv){	
			langDiv.style.display = 'inline';
			langDiv.innerHTML = langInput.value;
			langInput.style.display = 'none';
		}
	}
        const achInputs = document.querySelector(".achh").getElementsByTagName('input');
	for(const achInput of achInputs){
		const achDiv = document.querySelector(`.${achInput.id}`);
		if(achDiv){	
			achDiv.style.display = 'inline';
			achDiv.innerHTML = achInput.value;
			achInput.style.display = 'none';
		}
    }
         
    const interestInputs = document.querySelector(".inter").getElementsByTagName('input');
	for(const interestInput of interestInputs){
		const interestDiv = document.querySelector(`.${interestInput.id}`);
		if(interestDiv){	
			interestDiv.style.display = 'inline';
			interestDiv.innerHTML = interestInput.value;
			interestInput.style.display = 'none';
		}
    }

    const eduInputs = document.querySelector(".eduu").getElementsByTagName('input');
	for(const eduInput of eduInputs){
		const eduDiv = document.querySelector(`.${eduInput.id}`);
		if(eduDiv){	
			eduDiv.style.display = 'inline';
			eduDiv.innerHTML = eduInput.value;
			eduInput.style.display = 'none';
		}
    }

    document.querySelector('#secadd').style.display = 'none';
	document.querySelector('#secrem').style.display = 'none';
 
    printpdf();

	for(const skillInput of skillInputs){
		const skillDiv = document.querySelector(`.${skillInput.id}`);
		if(skillDiv){	
			skillDiv.style.display = 'none';
			skillInput.style.display = 'inline';
		}
    } 

    for(const langInput of langInputs){
        const langDiv = document.querySelector(`.${langInput.id}`);
        if(langDiv){	
            langDiv.style.display = 'none';
            langInput.style.display = 'inline';
        }
	}
       
        
    for(const achInput of achInputs){
        const achDiv = document.querySelector(`.${achInput.id}`);
        if(achDiv){	
            achDiv.style.display = 'none';
            achInput.style.display = 'inline';
        }
	}
        
    for(const interestInput of interestInputs){
        const interestDiv = document.querySelector(`.${interestInput.id}`);
        if(interestDiv){	
            interestDiv.style.display = 'none';
            interestInput.style.display = 'inline';
        }
	}
         
         
    for(const eduInput of eduInputs){
		const eduDiv = document.querySelector(`.${eduInput.id}`);
		if(eduDiv){	
			eduDiv.style.display = 'none';
			eduInput.style.display = 'inline';
		}
	}
          
    document.querySelector('#secadd').style.display = 'inline-block';
	document.querySelector('#secrem').style.display = 'inline-block';

}

let maxNewSection = 1;
function addsec() {
    if (maxNewSection < 2) {
        const head = document.createElement('div');
        document.getElementById("newsec").appendChild(head);
        if (maxNewSection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
        else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }

        maxNewSection = maxNewSection + 1;
    }
    else {
        alert("Atmost 2 NEW SECTION can be added!")

    }
    saveresume();
}
function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                maxNewSection = maxNewSection - 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
}

function saveresume() {
    var sec = document.getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
}