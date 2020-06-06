function jogaPraCima(n){
	try{
		u.children[n-1].querySelector('ul').appendChild(u.children[n])
	}catch(e){}
}

function jogaProUltimo(n){
	try{
		ultimo = u.children[n-1]

		ultimo.querySelectorAll('ul')

		len = ultimo.querySelectorAll('ul').length-1

		kz = ultimo.querySelectorAll('ul')[len]

		kz.appendChild(u.children[n])
	}
	catch(e){}
}


function getName(n){
	return u.children[n].getAttribute('name')
}

function getP(n){
	return parseInt(u.children[n].getAttribute('p'))
}

	// function return_ul(n){
	// 	return u.querySelectorAll("ul")[n]
	// }

	function return_ul_in(n){
		return parseInt(u.querySelectorAll("ul")[n].getAttribute('u'))
	}
	

	//retorna quantidade de tab na linha n
	function tab(n){
		try{
			return parseInt(linha[n].match(/\t/g).length)
		}catch(e){
			return 0
		}
	}
	

	//cria todo o esquema
	function cria(a){
		t = ""

		// linha = txt.value.split("\n");
		a = a.replace(/;/g,"<br>")
		linha = a.split("\n")

		u = document.createElement("ul")

		for(i=0;i<linha.length;i++){

			maior = tab(i+1) > tab(i)
			col = tab(i)


			linha[i] = linha[i].replace(/\t/g,"")


			if(maior)
				t += "<li name='a' p="+col+"><span class='tf-nc'>"+linha[i]+"</span><ul u="+col+"></ul></li>"
			else
				t += "<li name='c' p="+col+"><span class='tf-nc'>"+linha[i]+"</span></li>"
		}

		u.innerHTML = t
	}
	

	// ajusta o esquema

	function organiza1(){
		for( i = linha.length-1 ;  i >= 0 ;i--){
			try{

				igual = getP(i) == getP(i-1)
				menor = getP(i) < getP(i-1)
				maior = getP(i) > getP(i-1)

				nome_igual = getP(i)==getP(i-1)
				nome_diferente = getP(i)!=getP(i-1)


				if(maior && nome_diferente && return_ul_in(i-1) < getP(i))
					jogaPraCima(i)


			}catch(e){}

		}
	}

	function organiza2(){
		for( i = linha.length-1 ;  i >= 0 ;i--){
			try{

				igual = getP(i) == getP(i-1)
				menor = getP(i) < getP(i-1)
				maior = getP(i) > getP(i-1)

				nome_igual = getP(i)==getP(i-1)
				nome_diferente = getP(i)!=getP(i-1)


				if(maior && nome_diferente && return_ul_in(i-1) < getP(i)){
					jogaProUltimo(i)
				}


			}catch(e){}

		}
	}

	// function organiza3(){
		
	// 	li = u.querySelectorAll("li")

	// 	try{

	// 		for( i = li.length-1 ;  i >= 0 ;i--){	

	// 			numero_pai = parseInt(u.querySelectorAll("li")[i].parentElement.getAttribute("u"))
	// 			numero_avo = parseInt(u.querySelectorAll("li")[i].parentElement.getAttribute("p"))
	// 			numero = parseInt(u.querySelectorAll("li")[i].getAttribute("p"))

	// 			if(numero <= numero_pai || numero < numero_avo)
	// 				u.querySelectorAll("li")[i].parentElement.parentElement.appendChild(u.querySelectorAll("li")[i])
	// 		}
	// 	}catch(e){}
	// }

	function organiza3(){
		
		li = u.querySelectorAll("li")

		try{

			for( i=0 ;  i<li.length ;i++){	

				numero_pai = parseInt(u.querySelectorAll("li")[i].parentElement.getAttribute("u"))
				numero_avo = parseInt(u.querySelectorAll("li")[i].parentElement.getAttribute("p"))
				numero = parseInt(u.querySelectorAll("li")[i].getAttribute("p"))

				if(numero <= numero_pai || numero < numero_avo)
					u.querySelectorAll("li")[i].parentElement.parentElement.appendChild(u.querySelectorAll("li")[i])
			}
		}catch(e){}
	}

	function organiza4(){
		for( i = linha.length-1 ;  i >= 0 ;i--){
			try{

				igual = getP(i) == getP(i-1)
				menor = getP(i) < getP(i-1)
				maior = getP(i) > getP(i-1)

				nome_igual = getP(i)==getP(i-1)
				nome_diferente = getP(i)!=getP(i-1)


				if(maior)
					jogaPraCima(i)


			}catch(e){}

		}
	}




	//modela 
	
	function render(n){

		cria(n)
		
		organiza1()
		// organiza1()
		// organiza1()
		// organiza1()

		

		for(z=0;z<22;z++){ organiza2() }
		for(z=0;z<22;z++){ organiza3() }
		for(z=0;z<2;z++){ organiza4() }




		// ok.innerHTML = u.outerHTML

		return u.outerHTML
	}


try{
	d1 = cont.innerHTML.split("\n\n\n")

	for(i of d1){
		cont2.innerHTML += "<div class='tf-tree example'>"+render(i)+"</div>"
	}
}catch(e){}
