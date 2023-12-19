//Acceder a los elemento del DOM

const btnMostrar=document.querySelector('#btnMostrar')
const cajaMiniaturas=document.querySelector('#cajaMiniaturas')
const cajaFotoGrande=document.querySelector('#cajaFotoGrande')



let fragment= document.createDocumentFragment();
let fragment2= document.createDocumentFragment();

// Array los elementos de imagenes


const arrayImagenes=[
    imagen1={
        foto:'assets/viajes-1.jpg',
        alttext:'playa con una palmera',
        titulo:'viaje1',
        piepagina:'viaje a la playa',
        id:"1"
    },
    imagen2={
        foto:'assets/viajes-2.jpg',
        textoalt:'playa con bungalows',
        titulo:'viaje2',
        piepagina:'viste los bungalows',
        id:"2"
    },
    imagen3={
        foto:'assets/viajes-3.jpg',
        alttext:'poste con señalizacion',
        titulo:'viaje3',
        piepagina:'mire la señalizacion',
        id:"3"
    },
    imagen4={
        foto:'assets/viajes-4.jpg',
        alttext:'plaza con pileta',
        titulo:'viaje4',
        piepagina:'',
        id:"4"
    }
    
];



//hacer una funcion que cuando accione el submit pueda mostrar los elementos imagenes.

btnMostrar.addEventListener('click',(ev)=>{

    pintarImagenes();

})

const pintarImagenes=()=>{

    arrayImagenes.forEach((item)=>{

        const caja=document.createElement("div");
        const imagenes=document.createElement("img");
    imagenes.src = item.foto
imagenes.classList.add("img-thumbnail")
        caja.append(imagenes);    
        fragment.append(caja);




    })

cajaMiniaturas.append(fragment);

}



//hacer funcion cuando hago el evento click sobre un elemento desplegado, pueda mostrarme dicho elemento aumentado con un titulo y un pie de foto (no olvidar el alt)

document.addEventListener('click',(ev)=>{
    if(ev.target.matches('img')){
        console.log(ev.target.div)
pintarImageneGrande()
    }

    })
// tenemos que generar la funcion que se disparará junto al evento click macheado con las imagenes cuando le damos click
    const pintarImageneGrande=()=>{

        arrayImagenes.forEach((item)=>{
    
            const caja=document.createElement("div");
            const imagenes=document.createElement("img");
        imagenes.src = item.foto
            caja.append(imagenes);    
            fragment.append(caja);
    
        })
    
    cajaFotoGrande.append(fragment);
    }


