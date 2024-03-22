// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    //added data
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
            name: 'Guangdong',
            capital: 'Guangzhou',
            largestCity: 'Guangzhou',
            area: 179800,
            },
            {
            name: 'Shandong',
            capital: 'Jinan',
            largestCity: 'Jinan',
            area: 157100,
            },
            {
            name: 'Henan',
            capital: 'Zhengzhou',
            largestCity: 'Zhengzhou',
            area: 167000,
            },
        ],
    },
    {
        country: 'Korea',
        capital: 'Seoul',
        largestCity: 'Seoul',
        subdivisionName: 'province',
        subdivisions: [
            {
            name: 'Gyeonggido',
            capital: 'Suwon',
            largestCity: 'Suwon',
            area: 10182,
            },
            {
            name: 'Gangwondo',
            capital: 'Chuncheon',
            largestCity: 'Chuncheon',
            area: 16884,
            },
            {
            name: 'Jeollabukdo',
            capital: 'Jeonju',
            largestCity: 'Jeonju',
            area: 8042,
            },
        ]
    },
    {
    country: 'Japan',
    capital: 'Tokyo',
    largestCity: 'Tokyo',
    subdivisionName: 'prefecture',
    subdivisions: [
            {
            name: 'Tokyo',
            capital: 'Tokyo',
            largestCity: 'Tokyo',
            area: 2187,
            },
            {
            name: 'Osaka',
            capital: 'Osaka',
            largestCity: 'Osaka',
            area: 1905,
            },
            {
            name: 'Hokkaido',
            capital: 'Sapporo',
            largestCity: 'Sapporo',
            area: 83424,
            },
        ],
    }
]

//converts data into HTML
document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector('main');

    for (let geography of GEOGRAPHY_LIST) {
        const newUl = document.createElement('ul');
        for (let key in geography) {
            if (key == 'subdivisions') { // Skip the 'subdivisions' property
                const newLi = document.createElement('li');
                const newText = document.createTextNode('subdivision:');
                newLi.appendChild(newText);
                const subdivisionsUl = document.createElement('ul');
                subdivisionsUl.className = 'subdivisionsUl';
                for (let subdivision of geography[key]) {
                    const subdivisionLi = document.createElement('li');
                    const subdivisionText = document.createTextNode(`${subdivision.name}: ${subdivision.capital}, ${subdivision.largestCity}, Area: ${subdivision.area} sq km`);
                    subdivisionLi.appendChild(subdivisionText);
                    subdivisionsUl.appendChild(subdivisionLi);
                }
                newLi.appendChild(subdivisionsUl);
                newUl.appendChild(newLi);
            } else {
                const newLi = document.createElement('li');
                const newText = document.createTextNode(`${key}: ${geography[key]}`);
                newLi.appendChild(newText);
                newUl.appendChild(newLi);
            }
        }
        main.appendChild(newUl);
    }
});
