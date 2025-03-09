import { PactV3 } from '@pact-foundation/pact';
import { eachLike, like } from '@pact-foundation/pact/src/dsl/matchers';
import { expect } from 'chai';
import { PetStoreService } from 'src/services/pet-find.service';

describe('PactV3 PetsStore consumer tests', () => {
    const provider = new PactV3({
        consumer: 'Pets-Web-v3',
        provider: 'Pets-API-v3'
    });

    const status = 'available';

    const expectedBody = eachLike({
        id: like(123456),
        category: { id: like(1), name: like('Some Category') },
        name: 'doggie',
        photoUrls: eachLike('http://example.com/pet.jpg'),
        tags: eachLike({ id: like(1), name: like('Some Tag') }),
        status: ('available')
    });

    provider
        .given('there are pets in the database')
        .uponReceiving('request to get pets by status')
        .withRequest({
            method: 'GET',
            path: '/v2/pet/findByStatus',
            query: { status: 'available' },
            headers: { Accept: 'application/json' }
        })
        .willRespondWith({
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: expectedBody
        });

    it('returns a list of pets with correct structure', () => {
        return provider.executeTest(async (mockserver) => {
            const petStoreService = new PetStoreService(mockserver.url);
            const responseByStatus = await petStoreService.getPetsByStatus(status);

            expect(responseByStatus.status).to.equal(200);

            const data = responseByStatus.data;
            expect(data).to.be.an('array');
            expect(data[0]).to.have.keys(['id', 'category', 'name', 'photoUrls', 'tags', 'status']);
        });
    });
});
