const url1 = 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch2';
const url2 = 'https://randomuser.me/api/3';

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


async function tryFetch() {
    try {
        console.log('Trying to fetch data from url1 (wrong url)...');
        const data = await fetchJson(url1);
        processJson(data);
    } catch (error) {
        console.error('Error fetching data from resource1:', error.message);
        console.log('Trying to fetch data from the second URL (existing)...');
        try {
            const data = await fetchJson(url2);
            processJson(data);
        } catch (error) {
            console.error('Error fetching data from resource2:', error.message);
            throw new Error('Both resources are failed');
        }
    }
}
tryFetch();
//.catch(error => {
  //  console.error('Custom Error:', error.message);
//});
