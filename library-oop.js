class Library {

  constructor(name, creator) {
    if(arguments.length === 2) {
      this.name = name;
      this.creator = creator;
      this.playlists = [];
    } else {
      console.error('Error: exactly (2) arguments required to create a new Library');
    }
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
    console.log('Added playlist:', playlist);
    return;
  }

}

class Playlist {

  constructor(name) {
    if(arguments.length === 1) {
      this.name = name;
      this.tracks = [];
    } else {
      console.error('Error: exactly (1) argument required to create a new Playlist');
    }
  }

  addTrack(track) {
    this.tracks.push(track);
    console.log('Added track:', track);
    return;
  }

  get overallRating() {
    if(this.tracks.length) {
      let sum = 0;
      this.tracks.forEach(function(track) {
        sum += track.rating;
      });
      return sum / this.tracks.length;
    } else {
      console.error('Error: this playlist contains (0) tracks');
    }
  }

  get totalDuratinon() {
    if(this.tracks.length) {
      let sum = 0;
      this.tracks.forEach(function(track) {
        sum += track.length;
      });
      return sum;
    } else {
      console.error('Error: this playlist contains (0) tracks');
    }
  }

}

class Track {

  constructor(title, rating, length) {
    if(arguments.length === 3) {
      this.title = title;
      this.rating = rating;
      this.length = length;
    } else {
      console.error('Error: exactly (3) arguments required to create a new Playlist');
    }
  }

}
const library = new Library('library', 'Donald');
const playlist = new Playlist('playlist');
const track = new Track('title', 4, 152);

playlist.addTrack(track);
library.addPlaylist(playlist);
console.log('Total duration:', playlist.totalDuratinon);
console.log('Average rating:', playlist.overallRating);
playlist.addTrack(new Track('hello', 2, 200));
console.log('Total duration:', playlist.totalDuratinon);
console.log('Average rating:', playlist.overallRating);