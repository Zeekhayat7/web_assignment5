function createSongCard(song) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a song image, use the .card-image class
  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;
  songImg.classList.add("card-image");

  // Create a container for the card's content
  const container = document.createElement("div");
  container.classList.add("container");

  // Append the song image to the container
  container.appendChild(songImg);

  // Create a <h2> element to display the song name
  const songName = document.createElement("h2");
  songName.textContent = song.name;
  // Append the song name to the container
  container.appendChild(songName);

  // Create a <p> element to display the song time
  const songTime = document.createElement("h6");
  songTime.textContent = "Time: " + song.time;
  // Append the song time to the container
  container.appendChild(songTime);

  // Create a <p> element to display the song length
  const songLength = document.createElement("h6");
  songLength.textContent = "Length: " + song.length;
  // Append the song length to the container
  container.appendChild(songLength);

  const artistName = document.createElement("h3");
  artistName.textContent = "Artist: " + getArtistName(song.name);
  artistName.classList.add("artist");
  // Append the artist name to the container
  container.appendChild(artistName);

  // Append the container to the card
  card.appendChild(container);

  // Return the card's <div> element to the caller
  return card;
}
function getArtistName(songName) {
  const artistInfo = window.artists.find((artist) => artist.songName === songName);
  return artistInfo ? artistInfo.artistname : "Unknown";
}

console.log(createSongCard);
