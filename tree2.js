css = ".blue{color: blue;cursor: pointer;}.monospace{font-family: monospace;}.tf-tree{font-size:17px;text-align: center;}.tf-tree > div{width: 100%;overflow-x:auto; margin: 300px 0px}.tf-tree *{box-sizing:border-box;margin:0;padding:0}.tf-tree ul{display:inline-flex}.tf-tree > ul{text-align: center; padding: 10vh 0;overflow-x: auto; width: 100%;}.tf-tree > ul > li{margin-right: auto;margin-left: auto;}.tf-tree li{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;padding:0 1em;position:relative;}.tf-tree li ul{margin:2em 0 10px 0px}.tf-tree li li:before{border-top:.0625em solid #000;content:'';display:block;height:.0625em;left:-.03125em;position:absolute;top:-1.03125em;width:100%}.tf-tree li li:first-child:before{left:calc(50% - .03125em);max-width:calc(50% + .0625em)}.tf-tree li li:last-child:before{left:auto;max-width:calc(50% + .0625em);right:calc(50% - .03125em)}.tf-tree li li:only-child:before{display:none}.tf-tree li li:only-child>.tf-nc:before,.tf-tree li li:only-child>.tf-node-content:before{height:1.0625em;top:-1.0625em}.tf-tree .tf-nc,.tf-tree .tf-node-content{border:.0625em solid #000;display:inline-block;padding:.5em 1em;position:relative}.tf-tree .tf-nc:before,.tf-tree .tf-node-content:before{top:-1.03125em}.tf-tree .tf-nc:after,.tf-tree .tf-nc:before,.tf-tree .tf-node-content:after,.tf-tree .tf-node-content:before{border-left:.0625em solid #000;content:'';display:block;height:1em;left:calc(50% - .03125em);position:absolute;width:.0625em}.tf-tree .tf-nc:after,.tf-tree .tf-node-content:after{top:calc(100% + .03125em)}.tf-tree .tf-nc:only-child:after,.tf-tree .tf-node-content:only-child:after,.tf-tree>ul>li>.tf-nc:before,.tf-tree>ul>li>.tf-node-content:before{display:none}.tf-tree.tf-gap-sm li{padding:0 .6em}.tf-tree.tf-gap-sm li>.tf-nc:before,.tf-tree.tf-gap-sm li>.tf-node-content:before{height:.6em;top:-.6em}.tf-tree.tf-gap-sm li>.tf-nc:after,.tf-tree.tf-gap-sm li>.tf-node-content:after{height:.6em}.tf-tree.tf-gap-sm li ul{margin:1.2em 0}.tf-tree.tf-gap-sm li li:before{top:-.63125em}.tf-tree.tf-gap-sm li li:only-child>.tf-nc:before,.tf-tree.tf-gap-sm li li:only-child>.tf-node-content:before{height:.6625em;top:-.6625em}.tf-tree.tf-gap-lg li{padding:0 1.5em}.tf-tree.tf-gap-lg li>.tf-nc:before,.tf-tree.tf-gap-lg li>.tf-node-content:before{height:1.5em;top:-1.5em}.tf-tree.tf-gap-lg li>.tf-nc:after,.tf-tree.tf-gap-lg li>.tf-node-content:after{height:1.5em}.tf-tree.tf-gap-lg li ul{margin:3em 0}.tf-tree.tf-gap-lg li li:before{top:-1.53125em}.tf-tree.tf-gap-lg li li:only-child>.tf-nc:before,.tf-tree.tf-gap-lg li li:only-child>.tf-node-content:before{height:1.5625em;top:-1.5625em}.tf-tree li.tf-dotted-children .tf-nc:after,.tf-tree li.tf-dotted-children .tf-nc:before,.tf-tree li.tf-dotted-children .tf-node-content:after,.tf-tree li.tf-dotted-children .tf-node-content:before{border-left-style:dotted}.tf-tree li.tf-dotted-children li:before{border-top-style:dotted}.tf-tree li.tf-dotted-children>.tf-nc:before,.tf-tree li.tf-dotted-children>.tf-node-content:before{border-left-style:solid}.tf-tree li.tf-dashed-children .tf-nc:after,.tf-tree li.tf-dashed-children .tf-nc:before,.tf-tree li.tf-dashed-children .tf-node-content:after,.tf-tree li.tf-dashed-children .tf-node-content:before{border-left-style:dashed}.tf-tree li.tf-dashed-children li:before{border-top-style:dashed}.tf-tree li.tf-dashed-children>.tf-nc:before,.tf-tree li.tf-dashed-children>.tf-node-content:before{border-left-style:solid}"

st = document.createElement("style")
st.innerHTML = css

document.head.appendChild(st)


function organiza(a,b){

	an = parseInt(a.getAttribute('pos'))
	bn = parseInt(b.getAttribute('pos'))

	if(a.querySelector('ul') == null){
		ul2 = document.createElement('ul')
		a.appendChild(ul2)
	}

	if(an < bn)
		ul2.appendChild(b)
}

function render(str){	
	valor = str



	//renderiza
	ul = document.createElement("ul")
	for(i of valor.split("\n")){
		pos = i.split("\t").length
		li = "<li pos='"+pos+"'><span class='tf-nc'>"+i.replace(/\t/g,"")+"</span></li>"
		ul.innerHTML += li
	}

	//chama a função para organizar
	for(i=ul.childElementCount; i>=0;i--){
		try{
			for(j=0;j<20;j++)
				organiza(ul.children[i],ul.children[i+1])
		}catch(e){}
	}

	//apagar vazio
	for(j of ul.querySelectorAll('ul')){
		if(j.innerHTML == "")
			j.remove()
	}


	dv = document.createElement("div")
	dv.appendChild(ul)
	return  dv
}

function render2(){

	Tree = document.querySelectorAll(".tree")
	
	for(j of Tree){

		div = j
		div.classList.add('tf-tree')
		div.classList.add('monospace')

		z = []
		j.innerHTML.split('\n\n\n').map(e=>{
			z.push(render(e))
		})

		div.innerHTML = ""
		z.forEach(e=>{
			div.appendChild(e)
		})
	}

	// document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)#(.*?)\]\]/g,"<span class='blue' onclick=\"alertar('$2')\">$1</span>").replace(/;/g,"<br>")
}

render2()

