var CLOSED = true;


function Gallery() {

    //    thing.innerHTML = thing;
    if (CLOSED) {
        document.getElementById('newsection').style.height = '70vh';
        document.getElementById('newsection').style.border = 'solid 5px rgb(10,10,10,0.1)';

        document.getElementById('Text-Box').style.border = 'solid 0px rgb(10,10,10,0.1)';
        document.getElementById('Text-Box').style.height = '0px';

        document.getElementById('Button').style.textAlign = 'end';
        document.getElementById('Button').innerHTML = "Gallery";
        CLOSED = false;
    } else {
        document.getElementById('newsection').style.height = '0px';
        document.getElementById('newsection').style.border = 'solid 0px rgb(10,10,10,0.1)';
        document.getElementById('Text-Box').style.height = '70vh';
        document.getElementById('Text-Box').style.border = 'solid 5px rgb(10,10,10,0.1)';

        document.getElementById('Button').style.textAlign = 'left';

        document.getElementById('Button').innerHTML = "Gallery";
        CLOSED = true;
    }

}









// you have made it
