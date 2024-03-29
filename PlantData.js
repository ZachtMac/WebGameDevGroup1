const plantData = [
    {
        name: "Rose",
        scientificName: "Rosa",
        possibleAnswers: ["Rose", "Daisy", "Tulip", "Sunflower"]
    },
    {
        name: "Daisy",
        scientificName: "Bellis perennis",
        possibleAnswers: ["Daisy", "Rose", "Tulip", "Sunflower"]
    },
    {
        name: "Tulip",
        scientificName: "Tulipa",
        possibleAnswers: ["Tulip", "Rose", "Daisy", "Sunflower"]
    },
    {
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        possibleAnswers: ["Sunflower", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Lily",
        scientificName: "Lilium",
        possibleAnswers: ["Lily", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Orchid",
        scientificName: "Orchidaceae",
        possibleAnswers: ["Orchid", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Daffodil",
        scientificName: "Narcissus",
        possibleAnswers: ["Daffodil", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Carnation",
        scientificName: "Dianthus caryophyllus",
        possibleAnswers: ["Carnation", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Hydrangea",
        scientificName: "Hydrangea",
        possibleAnswers: ["Hydrangea", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Peony",
        scientificName: "Paeonia",
        possibleAnswers: ["Peony", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Azalea",
        scientificName: "Rhododendron",
        possibleAnswers: ["Azalea", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Magnolia",
        scientificName: "Magnolia",
        possibleAnswers: ["Magnolia", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Fuchsia",
        scientificName: "Fuchsia",
        possibleAnswers: ["Fuchsia", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Hibiscus",
        scientificName: "Hibiscus",
        possibleAnswers: ["Hibiscus", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Poppy",
        scientificName: "Papaver",
        possibleAnswers: ["Poppy", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Lavender",
        scientificName: "Lavandula",
        possibleAnswers: ["Lavender", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Snapdragon",
        scientificName: "Antirrhinum majus",
        possibleAnswers: ["Snapdragon", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Marigold",
        scientificName: "Tagetes",
        possibleAnswers: ["Marigold", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Iris",
        scientificName: "Iris",
        possibleAnswers: ["Iris", "Rose", "Daisy", "Tulip"]
    },
    {
        name: "Pansy",
        scientificName: "Viola tricolor",
        possibleAnswers: ["Pansy", "Rose", "Daisy", "Tulip"]
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
