import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { expect } from 'chai';
import { PetStoreService } from 'src/services/pet-find.service';
import * as path from 'path';

describe('PactV3 PetsStore consumer tests', () => {
    const provider = new PactV3({
        consumer: 'pets-search-consumer-v3',
        provider: 'pets-search-provider-v3'
    });

    const status = 'available';

    const expectedBody = MatchersV3.eachLike({
        id: MatchersV3.like(123456),
        name: MatchersV3.like('doggie'),
        photoUrls: MatchersV3.eachLike('https://example.com/photo.jpg'),
        tags: MatchersV3.eachLike({
            id: MatchersV3.like(0),
            name: MatchersV3.like('string')
        }),
        status: MatchersV3.like('available'),
        category: MatchersV3.like({
            id: MatchersV3.like(1),
            name: MatchersV3.like('Some Category')
        })
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
            expect(data[0]).to.have.keys(['id', 'name', 'photoUrls', 'tags', 'status', 'category']);
        });
    });


    describe('Pact V3 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io',
                pactUrls: [path.resolve(process.cwd(), './pacts/pets-search-consumer-v3-pets-search-provider-v3.json')] // Correct path to the pact file
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
