import { Company } from './company';

export class Schedule {
    id: number;
    date: string;
    time: string;
    reserved: boolean;
    company: Company;
}