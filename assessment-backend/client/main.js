const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneButton = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune)

const colorButton = document.getElementById("colorButton")

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

colorButton.addEventListener('click', getColor)

const animalButton = document.getElementById("animalButton")

const getAnimal = () => {
    axios.get("http://localhost:4000/api/animal/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

animalButton.addEventListener('click', getAnimal)

const cityButton = document.getElementById("cityButton")

const getCity = () => {
    axios.get("http://localhost:4000/api/city/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

cityButton.addEventListener('click', getCity)