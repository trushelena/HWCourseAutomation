import { getProject } from '../apis/projects-api';
import { ProjectResponse } from '../dtos/project.dto';

export const fetchProjectDetails = async (): Promise<ProjectResponse> => {
    const projectData = await getProject();
    return projectData;
};
