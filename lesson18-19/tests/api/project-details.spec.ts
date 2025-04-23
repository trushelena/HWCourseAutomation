import { expect } from 'chai';
import { fetchProjectDetails } from '../../src/services/project-service';
import { ProjectResponse } from '../../src/dtos/project.dto';
import { removeProject } from '../../src/services/delete-project-service';
import { ProjectDeleteResponse } from '../../src/dtos/delete-project.dto';

describe('Qase API - Fetch and Delete Project', function () {
    const projectCode = 'TP123'; // Replace with the project code you want to test

    it('should fetch the project details successfully', async function () {
        const projectData: ProjectResponse = await fetchProjectDetails();

        expect(projectData.status).to.equal(true);
        expect(projectData.result.total).to.equal(1);
        expect(projectData.result.filtered).to.equal(1);
        expect(projectData.result.count).to.equal(1);

        const project = projectData.result.entities[0];
        expect(project).to.have.property('title').that.equals('Test Project');
        expect(project).to.have.property('code').that.equals('TP123');
        expect(project.counts).to.have.property('cases').that.equals(0);
        expect(project.counts.runs).to.have.property('total').that.equals(0);
        expect(project.counts.defects).to.have.property('total').that.equals(0);
    });

    it('should delete the project successfully', async function () {
        const deleteResponse: ProjectDeleteResponse = await removeProject(projectCode);

        expect(deleteResponse.status).to.equal(true);
    });
});
