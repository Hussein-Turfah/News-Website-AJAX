$(document).ready(function(){
    $.ajax({
        url: 'http://localhost/News-Website-AJAX-Backend/get_news_api.php',
        method: 'GET',
        dataType: 'json',
        success: function (data){
            for(let i=0; i<data.length; i++){
                let news_item = '<div>';
                news_item += '<h2>' + data[i].title + '</h2>';
                news_item += '<p>' + data[i].text + '</p>';
                news_item += '</div>';
                $('#container').append(news_item);
                console.log('heyy')
            }
        }
    })
})
