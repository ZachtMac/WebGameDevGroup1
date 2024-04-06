const plantData = [
    {
        name: "Rose",
        scientificName: "Rosa",
        possibleAnswers: ["Daisy", "Sunflower", "Lily", "Rose"]
    },
    {
        name: "Daisy",
        scientificName: "Bellis perennis",
        possibleAnswers: ["Tulip", "Sunflower", "Azalea", "Daisy"]
    },
    {
        name: "Tulip",
        scientificName: "Tulipa",
        possibleAnswers: ["Peony", "Daisy", "Snapdragon", "Tulip"]
    },
    {
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        possibleAnswers: ["Rose", "Sunflower", "Hydrangea", "Tulip"]
    },
    {
        name: "Lily",
        scientificName: "Lilium",
        possibleAnswers: ["Hibiscus", "Lily", "Poppy", "Rose"]
    },
    {
        name: "Orchid",
        scientificName: "Orchidaceae",
        possibleAnswers: ["Marigold", "Orchid", "Iris", "Tulip"]
    },
    {
        name: "Daffodil",
        scientificName: "Narcissus",
        possibleAnswers: ["Fuchsia", "Rose", "Daffodil", "Lavender"]
    },
    {
        name: "Carnation",
        scientificName: "Dianthus caryophyllus",
        possibleAnswers: ["Hibiscus", "Carnation", "Pansy", "Tulip"]
    },
    {
        name: "Hydrangea",
        scientificName: "Hydrangea",
        possibleAnswers: ["Azalea", "Rose", "Hydrangea", "Lavender"]
    },
    {
        name: "Peony",
        scientificName: "Paeonia",
        possibleAnswers: ["Poppy", "Peony", "Daisy", "Tulip"]
    },
    {
        name: "Azalea",
        scientificName: "Rhododendron",
        possibleAnswers: ["Tulip", "Azalea", "Marigold", "Daisy"]
    },
    {
        name: "Magnolia",
        scientificName: "Magnolia",
        possibleAnswers: ["Rose", "Daisy", "Magnolia", "Tulip"]
    },
    {
        name: "Fuchsia",
        scientificName: "Fuchsia",
        possibleAnswers: ["Iris", "Fuchsia", "Rose", "Tulip"]
    },
    {
        name: "Hibiscus",
        scientificName: "Hibiscus",
        possibleAnswers: ["Hydrangea", "Rose", "Hibiscus", "Tulip"]
    },
    {
        name: "Poppy",
        scientificName: "Papaver",
        possibleAnswers: ["Daisy", "Poppy", "Rose", "Tulip"]
    },
    {
        name: "Lavender",
        scientificName: "Lavandula",
        possibleAnswers: ["Lavender", "Daisy", "Rose", "Tulip"]
    },
    {
        name: "Snapdragon",
        scientificName: "Antirrhinum majus",
        possibleAnswers: ["Iris", "Daisy", "Rose", "Snapdragon"]
    },
    {
        name: "Marigold",
        scientificName: "Tagetes",
        possibleAnswers: ["Rose", "Marigold", "Daisy", "Tulip"]
    },
    {
        name: "Iris",
        scientificName: "Iris",
        possibleAnswers: ["Daisy", "Iris", "Rose", "Tulip"]
    },
    {
        name: "Pansy",
        scientificName: "Viola tricolor",
        possibleAnswers: ["Daisy", "Pansy", "Rose", "Tulip"]
    }
];

function getRandomPlants(numPlants) {
    const selectedPlants = [];
    const numAvailablePlants = plantData.length;
    numPlants = Math.min(numPlants, numAvailablePlants);
    const availablePlants = [...plantData];
    for (let i = 0; i < numPlants; i++) {
        const randomIndex = Phaser.Math.RND.between(0, availablePlants.length - 1);
        selectedPlants.push(availablePlants[randomIndex]);
        availablePlants.splice(randomIndex, 1);
    }
    return selectedPlants;
}
