


var CLOSED = true;


function Gallery(){
    
//    thing.innerHTML = thing;
    console.log('hi');
    if(CLOSED){
        document.getElementById('newsection').style.height = '100%';
        document.getElementById('newsection').style.border = 'solid 5px rgb(10,10,10,0.1)';
        document.getElementById('Button').style.paddingLeft = '15px';
        document.getElementById('Button').innerHTML = "⫷Gallery";
        CLOSED = false;
    }
    else{
        document.getElementById('newsection').style.height = '0px';
        document.getElementById('newsection').style.border = 'solid 0px rgb(10,10,10,0.1)';
        document.getElementById('Button').style.paddingLeft = "5px";
        document.getElementById('Button').innerHTML = "Gallery⫸";
    CLOSED = true;
    }
    
}

















