const button1 = document.querySelector('.boton1')
const button2 = document.querySelector('.boton2')

let images = [] ;

images[0] = 'img1.jpg' ;
images[1] = 'img2.jpg' ;
images[2] = 'img3.png' ;
images[3] = 'img4.png' ;

let currentImageIndex = 0 ;


button1.addEventListener ('click',function(){
    if (currentImageIndex === 0){
        currentImageIndex = 3 ;
        document.img.src = images[currentImageIndex] ;

    } else {
        currentImageIndex -= 1 ;
        document.img.src = images[currentImageIndex] ;
    } 
})

button2.addEventListener ('click',function(){
    if (currentImageIndex === 3){
        currentImageIndex = 0 ;
        document.img.src = images[currentImageIndex] ;

    } else {
        currentImageIndex += 1 ;
        document.img.src = images[currentImageIndex] ;
    
    }    
})