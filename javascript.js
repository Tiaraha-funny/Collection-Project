console.log('Does it work?');

//This Link variable is defined the title, the artist name, the number of tracks, the social media links, release year, if the album is platinum or no.

class Links {
  constructor(title, artistName, trackNumber, url, year) {

let socialUrl = url;

    if (!socialUrl.startsWith('http://') && !socialUrl.startsWith('https://')) { //If a social media link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.
      socialUrl = `${socialUrl}`;
    }

    this.title = title,
    this.artistName = artistName,
    this.trackNumber = trackNumber,
    this.url = socialUrl,
    this.year = year
  }
  toUse () {
    return `${this.title} ${this.artistName} ${this.trackNumber} ${this.url} ${this.year}`
  }
};

const allLinks = [];

allLinks.push(new Links('\n Title :  I am with you \n', 'Artist :  Avril Lavigne \n Number : ', 130, '\n Url :  https://www.youtube.com/watch?v=EKF6ghfcQic \n Year :  ', 2000));
allLinks.push(new Links('\n Title :  God is not through with you yet \n', 'Artist :  Detty sisters \n Number :  ', 200, '\n Url :  https://www.youtube.com/watch?v=ACo7PmTUIKY \n Year :  ', 2003));
allLinks.push( new Links('\n Title :  Somebody to love by Queen', '\n Artist :  Aca Pop Kids \n Number :  ', 300, '\n Url :  https://www.youtube.com/watch? \n Year :  ', 2005));
allLinks.push( new Links('\n Title :  I am yours', '\n Artist :  Bruno Mars \n Number :  ', 250, '\n Url :  https://www.youtube.com/watch?v=bKMH-2dMpTs \n Year :  ', 2016));
allLinks.push(new Links('\n Title :  Marry did you know', '\n Artist :  Heavenly Joy Jenkens \n Number :  ', 500, '\n Url :  https://www.youtube.com/watch?v=c_e3ROQFg7g \n Year :  ', 2008));


let ourChoice = Number(prompt(`These are the options that you can choose: 

1- All of the records in the collection!
2- Adding the new records!
3- Update the specific records!
4- Remove the existing records!
5- Quit the program!`));

while (ourChoice !== 0) {

  switch (ourChoice){

    case 1:
      if (allLinks.length > 0) {
    for (let i = 0; i < allLinks.length; i++) {
      alert(`${i + 1} : ${allLinks[i].toUse()}`);
    }
  } else {
    alert ('This links is not displayed');
  }
  break;

    case 2:
      const title = prompt('Enter your new title!');
      const artistName = prompt('Enter an artist name that you like!');
      const trackNumber = prompt('Enter the number of track!');
      const url = prompt('Enter your url here!');
      const year = prompt('Enter the year here!');
      allLinks.push(new Links(title, artistName, trackNumber, url, year));
    break;

    case 3:
      
      alert(allLinks.splice(0, 2, "Title", "Artist"));
    break;
  }

ourChoice = Number(prompt(`These are the options that you can choose: 

1- All of the records in the collection!
2- Adding the new records!
3- Update the specific records!
4- Remove the existing records!
5- Quit the program!`));
}