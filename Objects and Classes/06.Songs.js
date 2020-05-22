function songs(array) {
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
            
        }
        outPut(){
            console.log(`${this.name}`);
            
        }
    }
    let numberOfSongs = array.shift();
    let typeListCheck = array.pop();
  
    for (let index = 0; index < array.length; index++) {
        let songToUse = array[index].split('_');
        let [typeList, name, time] = [songToUse[0], songToUse[1],songToUse[2]];
        if (typeList == typeListCheck) {
            let playlist = new Song(typeList, name, time);
            playlist.outPut();
        }
        if (typeListCheck == 'all') {
            let playlist = new Song(typeList, name, time);
            playlist.outPut();
        }
    }
    
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])