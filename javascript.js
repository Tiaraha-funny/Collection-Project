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
  toUse() {
    return `${this.title} ${this.artistName} ${this.trackNumber} ${this.url} ${this.year}`
  }
};

const allLinks = [];

allLinks.push(new Links('\n Title :  I am with you \n', 'Artist :  Avril Lavigne \n Number : ', 130, '\n Url :  https://www.youtube.com/watch?v=EKF6ghfcQic \n Year :  ', 2000));
allLinks.push(new Links('\n Title :  God is not through with you yet \n', 'Artist :  Detty sisters \n Number :  ', 200, '\n Url :  https://www.youtube.com/watch?v=ACo7PmTUIKY \n Year :  ', 2003));
allLinks.push(new Links('\n Title :  Somebody to love by Queen', '\n Artist :  Aca Pop Kids \n Number :  ', 300, '\n Url :  https://www.youtube.com/watch? \n Year :  ', 2005));
allLinks.push(new Links('\n Title :  I am yours', '\n Artist :  Bruno Mars \n Number :  ', 250, '\n Url :  https://www.youtube.com/watch?v=bKMH-2dMpTs \n Year :  ', 2016));
allLinks.push(new Links('\n Title :  Marry did you know', '\n Artist :  Heavenly Joy Jenkens \n Number :  ', 500, '\n Url :  https://www.youtube.com/watch?v=c_e3ROQFg7g \n Year :  ', 2008));


let ourChoice = Number(prompt(`These are the options that you can choose: 

1- All of the records in the collection!
2- Adding the new records!
3- Update the specific records!
4- Remove the existing records!
5- Quit the program!`));

while (ourChoice !== 0) {

  switch (ourChoice) {

    case 1:

      if (allLinks.length > 0) {
        for (let i = 0; i < allLinks.length; i++) {
          alert(`${i + 1} : ${allLinks[i].toUse()}`);
        }
      } else {
        alert('This links is not displayed');
      }

      break;

    case 2:

      const addNewTitle = prompt('You can enter your new topic here:');
      const addartistName = prompt('Enter an artist name that you like!');
      const addNewtrackNumber = prompt('You can enter a main idea for your topic:');
      const addNewUrl = prompt('You can enter your own url here:')
      const addNewyear = prompt('Enter the year here!');

      let ourNewLinks = [ //To show the users new topic, we do this.
        {
          title: addNewTitle,
          artistName: addartistName,
          trackNumber: addNewtrackNumber,
          url: addNewUrl,
          year: addNewyear
        }
      ]

      for (let i = 0; i < ourNewLinks.length; i++) {

        let allNewLinks = `Title : ${ourNewLinks[i].title} \n Our new Artist name : ${ourNewLinks[i].artistName}\n Our new track number : ${ourNewLinks[i].trackNumber} \n Our new Url : http://${ourNewLinks[i].url} \n Our new year: ${ourNewLinks[i].year}`;

        alert(allNewLinks);// we call the new links that the users created recently.
      };

      break;

    case 3:// We can change one of the title that we want to change

      if (allLinks.length > 0) {
        const addNewTitle = prompt('Update your new recording:');
        let ourNewLinks = [ //To show the users new topic, we do this.
          {
            title: addNewTitle,
          }
        ]
        for (let i = 0; i < ourNewLinks.length; i++) {
          let allNewLinks = `Title : ${ourNewLinks[i].title}`;
          alert(allNewLinks);
        }
      }

      break;

    case 4:

      if (allLinks.length > 0) {
        // Our imput should be specified and follow this condition (must be between 1 and the number of links)
        let recTitle = -1;
        const ourIndex = allLinks.length;

        while (recTitle < 1 || recTitle > allLinks.length) {
          recTitle = Number(
            prompt(`Enter the index of the link to be removed (between 1 and ${ourIndex}):`)
          );
        }

        // Remove selected link from array

        allLinks.splice(recTitle - 1, 1);
      } else {
        alert("No links to remove!");
      }

      // alert(allLinks.splice(0, 2, "Title", "Artist"));

      break;

    case 5:

      alert(`Thanks for having a look at this recording!`);

      break;

    default:// If the users don't enter the right number they will get this warning.
      alert('You only can choose 1,2,3,4 or 5!');
  }

  //we need this to loop the progrm

  ourChoice = Number(prompt(`These are the options that you can choose: 

1- All of the records in the collection!
2- Adding the new records!
3- Update the specific records!
4- Remove the existing records!
5- Quit the program!`));
}