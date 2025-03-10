import { PactV3, Verifier } from '@pact-foundation/pact';
import { eachLike, like } from '@pact-foundation/pact/src/dsl/matchers';
import { expect } from 'chai';
import { PetStoreService } from 'src/services/pet-find.service';
import * as path from 'path';


describe('PactV3 PetsStore consumer tests', () => {
    const provider = new PactV3({
        consumer: 'pets-search-consumer-v3',
        provider: 'pets-search-provider-v3'
    });

    const status = 'available';

    const expectedBody = eachLike({
        id: like(123456),
        category: like({
            id: like(1),
            name: like('Some Category')
        }),
        name: like('doggie'),
        photoUrls: like([]),
        tags: like([{
            id: like(0),
            name: like('string')
        }, { min: 0 }]),
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
