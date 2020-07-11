import { Client } from './client';

export class Schedule {
    id: number;
    date: Date;
    time: string;
    reserved: boolean;
    client?: Client;
}
