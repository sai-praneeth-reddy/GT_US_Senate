var url = 'https://www.govtrack.us/api/v2/role?current=true&role_type=senator';

function getinfo() 

d3.json(url).then(function(data) {

    var state = data.