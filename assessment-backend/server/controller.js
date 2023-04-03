module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['Failure is the path of lease persistence.', 'Place special emphasis on old friendship.', 'Today is the conserve yourself, as things just won’t budge.', 'You have the power to write your own fortune.', 'Your energy returns and you get things done.'];

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getColor: (req, res) => {
        const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

        // choose random color
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        res.status(200).send(randomColor);
    },

    getAnimal: (req, res) => {
        const animals = ['Bear', 'Lion', 'Flamingo', 'Jaguar', 'Monkey'];

        // choose random animal
        let randomIndex = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomIndex];

        res.status(200).send(randomAnimal);
    },

    getCity: (req, res) => {
        const cities = ['Berlin', 'Warsaw', 'Nairobi', 'Johannesberg', 'Kansas City'];

        // choose random city
        let randomIndex = Math.floor(Math.random() * cities.length);
        let randomCity = cities[randomIndex];

        res.status(200).send(randomCity);
    },

    


}