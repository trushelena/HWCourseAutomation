// src/apis/delete-project-api.ts
import axios from 'axios';
import { ProjectDeleteResponse } from '../dtos/delete-project.dto';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://api.qase.io/v1/project';
const API_KEY = process.env.API_KEY || '';

export const deleteProject = async (projectCode: string): Promise<ProjectDeleteResponse> => {
    const response = await axios.delete<ProjectDeleteResponse>(`${BASE_URL}/${projectCode}`, {
        headers: {
            'Token': API_KEY
        }
    });
    return response.data;
};
