let cities=[
    { city: "suli",
    deg: "75"

    },
    {   city: "Erbil",
        deg:"87",
    },
    { city: "kirkuk",
    deg:"98"

    },
];

// const cityElement = document.querySelector();
const newArray = cities.map(function(vilig){
    // console.log(review);
    let newCity ={
        ...vilig,
        deg: (city.deg - 32) * 5/9
    };
    return newCity;
});

console.log(newArray)