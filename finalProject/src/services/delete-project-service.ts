import { deleteProject } from '../apis/delete-project-api';
import { ProjectDeleteResponse } from '../dtos/delete-project.dto';

export const removeProject = async (projectCode: string): Promise<ProjectDeleteResponse> => {
    const deleteResponse = await deleteProject(projectCode);
    return deleteResponse;
};
