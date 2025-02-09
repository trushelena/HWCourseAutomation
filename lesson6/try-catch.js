const wrongUrl = 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_request';
fetch(wrongUrl)
    .then((response) => {
        // Our handler throws an error if the request did not succeed.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // Otherwise (if the response succeeded), our handler fetches the response
        // as text by calling response.text(), and immediately returns the promise
        // returned by `response.text()`.
        return response.text();
    });
// When response.text() has succeeded, the `then()` handler is called with
    // the text, and we copy it into the `poemDisplay` box.
 // .then((text) => {
     // poemDisplay.textContent = text;
    //})
    // Catch any errors that might happen, and display a message
    // in the `poemDisplay` box.
    //.catch((error) => {
     // poemDisplay.textContent = `Could not fetch verse: ${error}`;
    //});
