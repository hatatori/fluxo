	// <div id="alertOut" onclick="ngSumir()"><div id="alertIn"></div></div>
	
	if(typeof(alertOut) == 'undefined'){
		div = document.createElement("div")
		div.setAttribute("onclick","ngSumir()")
		div.id="alertOut"
		div.innerHTML = "<div id='alertIn'></div>"
		document.body.appendChild(div)
	}

	css = document.createElement("style")
	css.innerHTML = "#alertOut{position: fixed;top: 0;right: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.5);display: flex;justify-content: center;align-items: center;overflow: hidden;float: right;display: none;}#alertIn{background-color: white;box-shadow: 0px 0px 5px rgba(0,0,0,0.5);overflow: hidden;padding: 10;max-height: 300;max-width: 90%;max-width: 800;overflow-y: hidden;margin: 20;padding:10}	#alertIn *{max-width: 100%;max-height: 80%;}.invisible{display: none;}.alertFull{height:300;width:800}"

	document.body.appendChild(css)

	alertOut.style.opacity=0

	function ngMostrar(a,b){
		tempo = 2

		alertIn.style.overflowY="hidden"
		alertOut.style.transition=tempo/10+"s"

		alertIn.style.maxHeight=0
		alertOut.style.display="flex"

		setTimeout(()=>{		
			alertOut.style.opacity=1

		},tempo*2)

		setTimeout(()=>{		
			alertIn.style.transition=tempo-1+"s"

			if(typeof(a) == 'undefined' && typeof(b) == 'undefined'){
				alertIn.style.maxHeight=350
			}
			else{
				alertIn.style.transition=1+"s"
				alertIn.style.maxWidth=a
				alertIn.style.maxHeight=b
			}
		})

		setTimeout(()=>{alertIn.style.overflowY="auto"},700)


	}

	function ngSumir(){
		alertOut.style.opacity=0
		setTimeout(()=>{
			alertOut.style.display="none"
		},tempo*100)
	}

	function alertar(n,a,b){

		alertIn.innerHTML = n

		if(n.match(/#/g)){
			el = document.querySelector(n)
			alertIn.innerHTML = el.outerHTML
		}

		ngMostrar(a,b)

		// if()
			// alertIn.style.maxWidth = a
			// alertIn.style.maxHeight = b


	}

	alertIn.onclick=e=>{e.stopPropagation()}
