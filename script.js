// fetching songs from the folder 


const testvar = "gulshsn"




function main(){
    fetch("http://127.0.0.1:5500/songs/")
    .then(res => res.text()) // get HTML as text
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
  
      const links = doc.querySelectorAll('#files li a');
      const songs = [];
  
      links.forEach(link => {
        const name = link.querySelector('.name')?.textContent.trim();
        if (name && name !== '..') {
          songs.push(name);
        }
      });
  
      console.log(songs);
    for (let index = 0; index < songs.length; index++) {
      const element = songs[index];
      console.log(element)
    }
    const hello = document.getElementById("test")
    hello.innerHTML = `${songs[0]}`
  
    
      
    })
    .catch(err => console.error("Error fetching songs:", err));
    
  
}
main()


