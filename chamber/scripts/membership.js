const courses = [
    {
        title: 'Non Profit Membership Level (For non profit organizations and there is no fee)',
        prize: 'free',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt voluptatibus enim qui optio quibusdam illo ex...'
    },
    {
        title: 'Bronze Membership Level',
        prize: '5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt voluptatibus enim qui optio quibusdam illo ex...'
    },
    {
        title: 'Silver Membership Level',
        prize: '10',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt voluptatibus enim qui optio quibusdam illo ex...'
    },
    {
        title: 'Gold Membership Level',
        prize: '15',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt voluptatibus enim qui optio quibusdam illo ex...'
    }
]

createCourseCard(courses);

function createCourseCard(filteredCourses) {
    document.querySelector(".gridWeather").innerHTML = "";
    filteredCourses.forEach(course => {
        let card = document.createElement("section");
        let title = document.createElement("h3");
        // let description = document.createElement("p");
        // let prize = document.createElement("p");
        let button = document.createElement("button");

        card.classList.add('animated');
        title.textContent = course.title;
        // description.textContent = course.description;
        // prize.textContent = "Cost: $" + course.prize + " anual";
        button.textContent = "Learn more...";
        button.classList.add('button');
        button.classList.add('open-button');

        card.appendChild(title);
        // card.appendChild(description);
        // card.appendChild(prize);
        card.appendChild(button);
        document.querySelector(".gridWeather").appendChild(card);

        button.addEventListener('click', () => {
            displayCourseDetails(course);
        });
    });
}