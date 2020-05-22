function solve(array) {
    let movies = [];
    for (const iterator of array) {
    
        let info = iterator.split(' ');
       
        if (info[0] === 'addMovie') {
            let movieName = info.slice(1).join(' ');
            movies.push({name: movieName});
        }else if (info.includes('directedBy')) {
            let directedByIndex = info.indexOf('directedBy');
            let movieName = info.slice(0, directedByIndex).join(' ');
            
            const movieChecker = movies.find((a) => a.name === movieName); 
            
            if (movieChecker) {
                let directorName = info.slice(directedByIndex + 1).join(' ');
                movieChecker.director = directorName;   
            }

        }else if(info.includes('onDate')){
            let dateIndex = info.indexOf('onDate');
            let movieName = info.slice(0, dateIndex).join(' ');
            
            const movieChecker = movies.find((a) => a.name === movieName); 
           
            if (movieChecker) {
                let movieDate = info.slice(dateIndex + 1).join('');
                movieChecker.date = movieDate;  
            }
        }
    }
    for (const movie of movies) {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
        
    }
    
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])