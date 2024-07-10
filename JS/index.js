let task = document.getElementById('task')
let add = document.querySelector('#add')
let liste = document.querySelector('#liste')
let form = document.getElementById("form")
let error = document.getElementById("error")

// add.addEventListener('click', function() {
//     console.log(task.value);
// })
// une autre possibilité de déclencher un évènement et une fonction
add.addEventListener('click', ajouterTache)
let array = JSON.parse(localStorage.getItem('data')) || []
// console.log(array);
function displayText() {
    liste.innerHTML = ""
    for (let item of array) {
        let li = document.createElement('li')
        li.textContent = item //donner au li le contenu la variable de l'input
        liste.appendChild(li) //donner un parent au 'li'
        let btnSupp = document.createElement('button')
        btnSupp.textContent = ("supprimer")
        li.appendChild(btnSupp)
        btnSupp.addEventListener('click',function(){
            let indice = array.indexOf (item)
            console.log(indice);
            array.splice(indice,1)
            localStorage.setItem('data', JSON.stringify(array))
            displayText ()
        })
    }

    // array.push(task.value)
    // task.value = ""//remmetre l'input à zéro
    // task.focus() //remmetre le curseur dans l'input
    // localStorage.setItem('data', JSON.stringify(array))
}

function ajouterTache(e) {
    e.preventDefault() // empeche de recharger la page
    console.log(task.value);
    if (array.find(el => el === task.value) || task.value === "") {
        // console.log(task.value, 'existe déja');
        // (`la valeur de ${task.value} existe déjà ou la tache est vide`)
        error.textContent = `la valeur de ${task.value} existe déjà ou la tache est vide`
        task.focus()
        task.value = ""
    } else {
        array.push(task.value)
        localStorage.setItem('data', JSON.stringify(array))//envoyer le task dans le tableau, dans le bon format
        task.value = ""
        task.focus()
        displayText() //rapelle la fonction displayText
        // console.log(task.value, "n'existe pas");
    }

}

displayText()
form.addEventListener('submit', ajouterTache)


// let array = [1,2,4,2,10,5,15,20]
// la longueur de mon tableau
// console.log(array.length);
//ajouter un élément à mon tableau
// array.push(10)
// console.log(array);
//trier un tableau
// array.sort()
// console.log(array);

//chercher un élément dans le tableau
// if(array.find(element => element === 4)  ){
//     console.log("élément trouvé");
// } else {
//     console.log("élément non trouvé");
// }

//récupérer l'index d'un élément dans le tableau
// console.log( array.indexOf(4));
// let index = array.indexOf(4)

//supprimer un élément du tableau
// array.splice(index,1)
// console.log(array);

// for (let i of array) {
// console.log(i*2);
// }

// for (let i = 0; i < array.length; i++){
// console.log(array[i]);
// }

