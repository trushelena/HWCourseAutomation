const url = 'https://randomuser.me/api/';

function fetchJson(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error - Status: ${response.status}`);
            }
            return response.json();
        });
}

function processJson(data) {
    const user = data.results[0];
    console.log('Name:', `${user.name.first} ${user.name.last}`);
    console.log('Gender:', user.gender);
    console.log('Country:', user.location.country);
    console.log('Email:', user.email);
    console.log('Photo:', user.picture.large);
}


function fetchAndProcessUser() {

    fetchJson(url)
        .then(data => {
            processJson(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
        });
}
fetchAndProcessUser();
