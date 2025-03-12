import { expect } from 'chai';
import { JokesApiService } from 'src/services/jokes-types-api.service';


describe('random jokes API Service tests', function () {
    let jokesApiService: JokesApiService;

    before(function () {
        jokesApiService = new JokesApiService();
    });

    it('should fetch a random joke and verify it contains the required properties', async function () {
        const randomJoke = await jokesApiService.getRandomJoke();

        expect(randomJoke).to.have.property('id').that.is.a('number');
        expect(randomJoke).to.have.property('punchline').that.is.a('string');
        expect(randomJoke).to.have.property('setup').that.is.a('string');
        expect(randomJoke).to.have.property('type').that.is.a('string');
    });

    it('should fetch a random joke and verify it contains the required properties and status code 200', async function () {
        try {
            const response = await fetch(`${jokesApiService.baseUrl}/random_joke`, {
                headers: { 'Content-Type': 'application/json' },
            });

            expect(response.status).to.equal(200, `Expected status code 200, but got ${response.status}`);

        } catch (error) {
            throw new Error(`Test failed: ${error.message}`);
        }
    });

    it('should fetch random joke object and verify their properties', async function () {
        const randomJoke = await jokesApiService.getRandomJoke();
        const validCategories = ['general', 'programming', 'dad', 'knock-knock'];

        expect(validCategories).to.include(randomJoke.type);
    });

    it("Two requests shouldn't return the same joke", async function () {

        const response1 = await fetch(`${jokesApiService.baseUrl}/random_joke`);
        const jsonData1 = await response1.json();


        const response2 = await fetch(`${jokesApiService.baseUrl}/random_joke`);
        const jsonData2 = await response2.json();

        expect(jsonData1.id).to.not.equal(jsonData2.id);
    });

    it('should fetch valid joke types', async function () {
        const jokeTypes = await jokesApiService.getJokesByType();

        const expectedTypes = ['general', 'knock-knock', 'programming', 'dad'];

        expect(jokeTypes).to.have.members(expectedTypes);
    });
});
