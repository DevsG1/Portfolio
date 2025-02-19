let boutton = document.querySelectorAll(".border");

let valeure = document.querySelectorAll(".compter");
let intervale = 1875;


const navTabs = document.querySelectorAll('.navs_btn');
const contenue = document.querySelectorAll('.contentRight');
const one = document.querySelectorAll('.oneContent');



const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}




const dark_light = document.querySelector('#switch');
dark_light.addEventListener('click', () => {
	document.body.classList.toggle('darks');
});

function changeIcon() {
	let img = document.getElementById('switch').src;
	if(img.indexOf('moon.svg') != -1) {
		document.getElementById('switch').src = 'icon/sun.svg';
	} else {
		document.getElementById('switch').src = 'icon/moon.svg';
	}
}

// document.addEventListener("contextmenu", function(event){
//     event.preventDefault();
// });


// document.addEventListener("selectstart", function(event){
//     event.preventDefault();
// });


document.querySelectorAll('img').forEach((img) =>{
    img.addEventListener("contextmenu", function(event){
        event.preventDefault();
    });
} );


for(var i = 0; i < boutton.length; i++){
    boutton[i].addEventListener("click", (e)=>{
        // e.preventDefault(); annuler le chargement 


        let animated = document.createElement('span');
        animated.classList.add("animated");

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        animated.style.left = x + "px";
        animated.style.top = y + "px";
        e.target.appendChild(animated);

        setTimeout(()=>{
            animated.remove(); 
        }, 400);
    });
}


valeure.forEach((val) => {
    let debut = 0;
    let fin = parseInt(val.getAttribute("data-val"));
    let duree = Math.floor(intervale / fin);
    let chiffre = setInterval(function() {
        debut += 1;
        val.textContent = debut;
        if(debut === fin){
            clearInterval(chiffre);
        }
    }, duree);
});



navTabs.forEach((tabs, index)=>{
    tabs.addEventListener('click', (e)=>{
        navTabs.forEach(tabs=>{
            tabs.classList.remove('active');
            tabs.classList.remove('oneContent');
        });
        tabs.classList.add('active');
        tabs.classList.add('oneContent');

        var line = document.querySelector('.underlineTabs');
        //     line.style.width = e.target.offsetWidth + "px";
        //     line.style.left = e.target.offsetLeft + "px";
        
        if(index ==1){
            line.style.left = "50%";
        }else{
            line.style.left = "0%";
        }
        contenue.forEach(content=>{
            content.classList.remove('active');
            content.classList.remove('oneContent');
        });
        contenue[index].classList.add('active');
        contenue[index].classList.add('oneContent');
        });   
});
