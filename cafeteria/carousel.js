// estrutura = "<div id='carousel' style='display: none;'><div class='car car-flex'><img src='car-img/arrow-left-black.svg' class='car-bt' onclick='volta(this,{w})'><div class='car-blocos car-bloco-cut car-inflex'><div class='car-inflex car-centrao-in car-slider'>{conteudo}</div></div><img src='car-img/arrow-right-black.svg' class='car-bt' onclick='vai(this,{w})'></div></div>"

dv = document.createElement("div")
dv.id = "carousel"
dv.style.display="none"
dv.innerHTML = "<div class='car car-flex'><img src='car-img/arrow-left-black.svg' class='car-bt' onclick='volta(this,{w})'><div class='car-blocos car-bloco-cut car-inflex'><div class='car-inflex car-centrao-in car-slider'>{conteudo}</div></div><img src='car-img/arrow-right-black.svg' class='car-bt' onclick='vai(this,{w})'></div>"

cs = document.createElement("style")
cs.innerHTML = ".car-flex{display: flex;}.car-inflex{display: inline-flex;}.car-bloco-cut{width: 100%;overflow: hidden;padding: 10;}.car-blocos{position: relative;height: 200;display: inline-flex;justify-content: center;align-items: center;}.car-blocos div > div{width: 200;height: 200;margin:10;border-radius: 5px;background:linear-gradient(#e56b0c,#e34c36);color: white;overflow:hidden;}.car-bt{padding: 10;}.car-dark{background-color: #272727;color: white;}.car-slider{position: absolute;left: 0;top: auto;bottom: auto;margin-bottom: auto;}"

document.head.appendChild(cs)
document.body.appendChild(dv)



function vai(n,a){
	el = n.parentElement.querySelector(".car-slider")
	if(el.pos == undefined) 
		el.pos = 0

	el.style.left = a*(++el.pos)*-1
}

function volta(n,a){
	el = n.parentElement.querySelector(".car-slider")
	if(el.pos > 0)
		el.style.left = a*(--el.pos)*-1
}

caroulsel = document.querySelectorAll(".car-carousel")

for(i of caroulsel){
	if(i.getAttribute('w')==null)
		i.setAttribute('w',220)
	i.innerHTML = carousel.innerHTML.replace(/{conteudo}/g,i.innerHTML).replace(/{w}/g,i.getAttribute('w'))
}

for(i in caroulsel){
	if(caroulsel[i].getAttribute('v')==null)
		caroulsel[i].style.transition="1s"

	caroulsel[i].querySelector(".car-slider").style.transition=caroulsel[i].getAttribute('v')+"s"

}
