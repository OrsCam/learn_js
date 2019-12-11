document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");

    const tableau = [
        {
            name: 'Camille',
            age: '29',
            ville: 'Carrières-sur-Seine',
            job: 'développeur'
        }, {
            name: 'Alexis',
            age: '29',
            ville: 'Erevan',
            job: 'developpeur'
        },
        {
            name: 'Adrien',
            age: '27',
            ville: 'Mogadiscio',
            job: 'developpeur'
        },
        {
            name: 'Yvan',
            age: '29',
            ville: 'Clichy',
            job: 'developpeur'
        }, {
            name: 'Amelie',
            age: '25',
            ville: 'Versailles',
            job: 'developpeur'
        },
        {
            name: 'Jojo',
            age: '27',
            ville: 'Ouagadougou',
            job: 'dev'
        }];

    var div = document.querySelector("div");

    for (var i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
        console.log(tableau[i].name);
        console.log(tableau[i].age);
        console.log(tableau[i].ville);
        console.log(tableau[i].job);

        const name = tableau[i].name;
        const age = tableau[i].age;
        const ville = tableau[i].ville;
        const job = tableau[i].job;

        document.querySelectorAll('.member')[i].innerHTML = '<h1>' + name + '</h1>; 

        elem.addEventListener("click", function (event) {
            elem.classList.toggle("bg-green");
            elem.classList.toggle("bg-orange");
        })
    };

});



