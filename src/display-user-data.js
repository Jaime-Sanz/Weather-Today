const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function displayUserData(weatherInfo){
    //mainContainer
    let containerBlocks = document.getElementById('weather-blocks');
    let unsortedList = document.createElement('ul');
    unsortedList.classList.add('list-blocks');
    unsortedList.id = 'subContainer';
    
    //appending to main container
    containerBlocks.append(unsortedList);

    weatherInfo.forEach((dayData, index) => {
        //creating each main card
        let card = document.createElement('li');
        card.classList.add('blocks');

        //title for each card and switch to handle what text is placed in title
        let title = document.createElement('h2');
        title.classList.add('blocks-title');

        switch(index){
            case 0:
                title.textContent = 'Today';
                break;
            case 1:
                title.textContent = 'Tomorrow';
                break;
            case 2:
                title.textContent = 'Overmorrow';
                break;
            default:
                title.textContent = 'Error';
        }

        //getting icon for each card and switch for what icon will display
        let weatherCondition = dayData.condition;
        let icon = document.createElement('img');
        icon.classList.add('blocks-icon');

        
        switch(weatherCondition){
            case "Moderate rain":
            case "Patchy rain nearby":
                icon.src = '../assets/drizzle.gif';
                break;
            case "Sunny":
                icon.src = '../assets/sun.gif';
                break;
            case "Patchy moderate snow":
            case "Patchy light snow":
            case "Freezing fog":
                icon.src = '../assets/snow.gif';
                break;
            case "Overcast ":
            case "Partly Cloudy ":
            case "Cloudy ":
            case "Fog":
                icon.src = '../assets/clouds.gif';
                break;
        }

        //subContainer for high and low temp
        let containerTemp = document.createElement('div');
        containerTemp.classList.add('blocks-tempContainer');
        let highTemp = document.createElement('span');
        let lowTemp = document.createElement('span');
        highTemp.classList.add('blocks-temps');
        lowTemp.classList.add('blocks-temps');

        highTemp.textContent = `H: ${dayData.hightemperature}F°`;
        lowTemp.textContent = `L: ${dayData.lowtemperature}F°`;

        //appending each element to make the full weather card
        unsortedList.appendChild(card);
        card.appendChild(title);
        card.appendChild(icon);
        card.appendChild(containerTemp);
        containerTemp.appendChild(highTemp);
        containerTemp.appendChild(lowTemp);
    });
}