import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DateTimeFormatterService {
    dateReg: RegExp = environment.dateReg;
    public convertDateFormatToBackend(date: string) { // yyyy-mm-dd
        let spliter = this.getDateFormatSpliter(date);
        if (spliter) {
            var re = new RegExp(spliter, 'g');
            return (date.split(spliter).reverse().join(spliter)).replace(re, '-');
        } else {
            return date;
        }
    }

    public convertDateFormatToFrontend(date: Date) { // dd/mm/yyyy
        const day = this.addZeroToTheLeftIfNeeded(date.getDate().toString());
        const month = this.addZeroToTheLeftIfNeeded((date.getMonth() + 1).toString());
        return day + '/' + month + '/' + date.getFullYear();
    }

    private getDateFormatSpliter(date: string) {
        let spliter;
        if (date.includes('/')) {
            spliter = '/';
        }
        else if (date.includes('.')) {
            spliter = '.';
        }
        else if (date.includes('-')) {
            spliter = '-';
        }
        return spliter;
    }

    private addZeroToTheLeftIfNeeded(stringToFix: string) {
        return stringToFix.length === 2 ? stringToFix : 0 + stringToFix;
    }
}