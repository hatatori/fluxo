
	
	function go(linha){

		function tab(n){ try { return n.split("\t").length-1}catch(e){return 0} }

		// linha = txt.value.split("\n")
		linha = linha.split("\n")
		// linha.shift()

		

		// ordem = txt.value.split("\n").map(e=>e.split(/\t/g).length-1)

		ar = linha.map(e=>"<li>"+e.replace(/\t/g,"")+"</li>")

		lista = []
		s = 0


		u2 = document.createElement("ul")

		for(i=0;i<linha.length;i++){
			nome = linha[i].replace(/\t/g,"")
			lista.push(nome)
		}

		for(i=0;i<lista.length;i++){
			if(tab(linha[i+1]) > tab(linha[i])){
				lista[i] = "<li class='pos' p="+tab(linha[i])+"><span class='tf-nc'>"+lista[i]+"</span><ul pos='"+tab(linha[i+1])+"'></ul></li>"
			}else{
				lista[i] = "<li class='val' p="+tab(linha[i])+"><span class='tf-nc'>"+lista[i]+"</span></li>"
			}


		}

		u2 = document.createElement("ul")
		u2.innerHTML = lista.join("")

		function organiza(){

			for(x=0;x<10;x++){
				ql = u2.querySelectorAll("li")
				for(i=u2.childElementCount;i>=0;i--){
					try{

						p1 = u2.children[i-1].getAttribute("p")
						p2 = u2.children[i].getAttribute("p")

						nome1 = u2.children[i-1].getAttribute("class")
						nome2 = u2.children[i].getAttribute("class")



						if(u2.children[i].className == "val" && p1 < p2){

							u2.children[i-1].querySelector('ul').appendChild(u2.children[i])

						}
					}catch(e){}
				}
			}
		}

		

		function organiza2(){
			
			for(i=u2.childElementCount;i>=0;i--){
				try{
					p1 = u2.children[i-1].getAttribute("p")
					p2 = u2.children[i].getAttribute("p")
					
					nome1 = u2.children[i-1].getAttribute("class")
					nome2 = u2.children[i].getAttribute("class")

					if(nome1 == nome2 && p2 > p1){
						u2.children[i-1].querySelector('ul').appendChild(u2.children[i])
					}


				}catch(e){}

			}
		}

		function organiza3(){
			
			
			for(i=u2.childElementCount;i>=0;i--){
				try{
					p1 = u2.children[i-1].getAttribute("p")
					p2 = u2.children[i].getAttribute("p")


					if(p2 < p1){
						ul_return(i).appendChild(u2.children[i-1])
					}

				}catch(e){}
			}
		}


		function ul_return(casa){
			
			for(q=0;q<u2.querySelectorAll('ul').length;q++){
				if(q==casa)
					return u2.querySelectorAll('ul')[q-1]
			}
		}
		ul_return(3)


		for(nx=0;nx<10;nx++){
			organiza()
			organiza2()
			organiza3()
		}




	return u2.outerHTML;

	
}

// go()


	d1 = cont.innerHTML.split("\n\n\n")

	for(i of d1){
		cont2.innerHTML += "<div class='tf-tree example'>"+go(i)+"</div>"
	}
