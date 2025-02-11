const url = 'https://randomuser.me/api/';

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error - Status: ${response.status}`);
    }
    return await response.json();
};


function processJson(data) {
    const user = data.results[0];
    console.log('Name:', `${user.name.first} ${user.name.last}`);
    console.log('Gender:', user.gender);
    console.log('Country:', user.location.country);
    console.log('Email:', user.email);
    console.log('Photo:', user.picture.large);
}


async function fetchAndProcessUser() {
    try {
        const data = await fetchJson(url);
        processJson(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
fetchAndProcessUser();
