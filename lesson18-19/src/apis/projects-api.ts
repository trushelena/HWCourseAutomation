import axios from 'axios';
import { ProjectResponse } from '../dtos/project.dto';
import dotenv from 'dotenv';

dotenv.config();
const BASE_URL = process.env.BASE_URL || 'https://api.qase.io/v1/project';
const API_KEY = process.env.API_KEY || '';

export const getProject = async (): Promise<ProjectResponse> => {
    const response = await axios.get<ProjectResponse>(BASE_URL, {
        headers: {
            'Token': API_KEY
        }
    });
    return response.data;
};
