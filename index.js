$(document).ready(function() {
    $.get('https://www.reddit.com/r/comics.json')
    
    .then(function(success) {
        var content = success;

        var children = success.data.children;

        console.log(content);
        children.forEach(function(child) { 
            var data = child.data;
            
            var titles = data.title;

            var links = data.permalink;

            var urls = data.url;

            var pics = data.thumbnail;

            var group = document.createElement('div');
            
            var header = document.createElement('h3');

            var link = document.createElement('a');

            var picture = document.createElement('img');
            
            header.innerText = titles;

            link.setAttribute('href', 'oneindex.html?url='+ links);
            link.appendChild(header);
            group.appendChild(link);

            picture.setAttribute('src', pics);

            group.appendChild(picture);


            
            document.body.appendChild(group);

            
    })
    });

    
})

