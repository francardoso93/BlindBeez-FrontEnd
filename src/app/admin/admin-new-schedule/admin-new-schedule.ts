import { Company } from 'src/app/scheduler/company';

export class NewSchedule {
    company: Company;
    initialDate: string;
    finalDate: string;
    minuteInterval: string;
}