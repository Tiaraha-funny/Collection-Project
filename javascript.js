console.log('Does it work?');

//This Link variable is defined the title, the artist name, the number of tracks, the social media links, release year, if the album is platinum or no.

class Links {
  constructor(title, artistName, trackNumber, url) {

let socialUrl = url;

    if (!socialUrl.startsWith('http://') && !socialUrl.startsWith('https://')) { //If a social media link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.
      socialUrl = `https://${socialUrl}`;
    }

    this.title = title,
    this.artistName = artistName,
    this.trackNumber = trackNumber,
    this.url = socialUrl
  }
};

let firstLinks = new Links('I am with you', 'Avril Lavigne', 130, 'https://www.youtube.com/watch?v=EKF6ghfcQic');
let secondLinks = new Links('God is not through with you yet', 'Detty sisters', 200, 'https://www.youtube.com/watch?v=ACo7PmTUIKY');
let thirdLinks = new Links('Somebody to love by Queen', 'Aca Pop Kids', 300, 'https://www.youtube.com/watch?v=whyW6zDsCDk&list=LL_r6LyIYd9slwywjHvAEgLQ&index=183');
let fourthLinks = new Links('I am yours', 'Bruno Maars', 250, 'https://www.youtube.com/watch?v=bKMH-2dMpTs');
let fifthLinks = new Links('Marry did you know', 'Heavenly Joy Jenkens', 500, 'https://www.youtube.com/watch?v=c_e3ROQFg7g');


let ourChoice = Number(prompt(`These are the options that you can choose: 

1- All of the records in the collection!
2- Adding the new records!
3- Update the specific records!
4- Remove the existing records!
5- Quit the program!`));

alert (ourChoice);

while (ourChoice !== 0) {

  switch (ourChoice){

    case 1:
      if (Links.length > 0) {
    for (let i = 0; i < Links.length; i++) {
      let allLinks = `${i + 1}: ${Links[i].firstLinks} ${Links[i].secondLinks} ${Links[i].thirdLinks} ${Links[i].fourthLinks} ${Links[i].fifthLinks}`;

      alert(allLinks);
    }
  } else {
    alert ('This links is not displayed');
  }

    break;

    case 2:
    break;


  }

}

ourChoice = Number(prompt(`These are the options that you can choose: 

1- All of the records in the collection!
2- Adding the new records!
3- Update the specific records!
4- Remove the existing records!
5- Quit the program!`));
