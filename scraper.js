const rp = require ('request-promise');
const $ = require ('cheerio');
const url = 'https://www.imdb.com/title/tt0371746/';


rp(url)
.then(function(html){
    console.log($('#ratingsValue', html));
})
.catch(function(err){
    console.log(err);
});