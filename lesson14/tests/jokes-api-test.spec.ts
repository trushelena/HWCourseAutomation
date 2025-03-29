import { expect } from 'chai';
import { JokesApiObject } from 'src/services/jokes-types-api.service';


describe('random jokes API Service tests', function () {
    let jokesApiObject: JokesApiObject;

    before(function () {
        jokesApiObject = new JokesApiObject();
    });

    it('should fetch a random joke and verify it contains the required properties', async function () {
        const randomJoke = await jokesApiObject.getRandomJoke();

        expect(randomJoke.joke).to.have.property('id').that.is.a('number');
        expect(randomJoke.joke).to.have.property('punchline').that.is.a('string');
        expect(randomJoke.joke).to.have.property('setup').that.is.a('string');
        expect(randomJoke.joke).to.have.property('type').that.is.a('string');
    });

    it('should fetch a random joke and verify it has status code 200', async function () {
            const response = await jokesApiObject.getRandomJoke();
            expect(response.status).to.equal(200, `Expected status code 200, but got ${response.status}`);
    });

    it('should fetch random joke object and verify their properties', async function () {
        const randomJoke = await jokesApiObject.getRandomJoke();
        const validCategories = ['general', 'programming', 'dad', 'knock-knock'];

        expect(validCategories).to.include(randomJoke.joke.type);
    });

    it("Two requests shouldn't return the same joke", async function () {
        const response1 = await jokesApiObject.getRandomJoke();
        const jsonData1 = await response1.joke;

        const response2 = await jokesApiObject.getRandomJoke();
        const jsonData2 = await response2.joke;

        expect(jsonData1.id).to.not.equal(jsonData2.id);
    });

    it('should fetch valid joke types', async function () {
        const jokeTypes = await jokesApiObject.getJokesByType();

        const expectedTypes = ['general', 'knock-knock', 'programming', 'dad'];

        expect(jokeTypes).to.have.members(expectedTypes);
    });
});
