
var boton = document.getElementById('boton');
var container = document.getElementById('container');


boton.addEventListener('click', function () {

    fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);

            boton.innerText === "Mostrar" ? (container.classList.remove('hide'), boton.innerText = "Ocultar") : (container.classList.add('hide'), boton.innerText = "Mostrar");
            console.log(container.className);

        });

});



function mostrarBanderas(countries) {
    container.innerHTML = '';

    countries.map((country, i) => {
        let div = document.createElement('div')
        div.classList.add('container-banderas')
        let imgbandera = document.createElement('img');
        let namebandera = document.createElement('h3')

        let inibandera = document.createElement('p')

        imgbandera.src = country.flag;
        imgbandera.width = '60';
        imgbandera.height = '40';

        namebandera.innerHTML = country.name
        inibandera.innerHTML = country.alpha3Code

        div.appendChild(imgbandera)
        div.appendChild(namebandera)
        div.appendChild(inibandera)
        container.appendChild(div)


    })
}