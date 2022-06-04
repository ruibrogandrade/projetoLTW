function search_restaurant() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('restaurant');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentNode.style.display="none";
        }
        else {
            x[i].parentNode.style.display="initial";                 
        }
    }
}

function search_category(categorie){
    console.log(categorie);
    let x = document.getElementsByClassName('info-categorie');


    for (i = 0; i < x.length; i++) { 
        if (x[i].innerHTML!=categorie && categorie!="all") {

            x[i].parentNode.style.display="none";
        }
        else {
            x[i].parentNode.style.display="initial";                 
        }
    }


}