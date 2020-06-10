import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DateTimeFormatterService {
    public convertDateFormatToBackend(date: string) {
        let spliter = this.getDateFormatSpliter(date);
        if (spliter) {
            var re = new RegExp(spliter, "g");
            return (date.split(spliter).reverse().join(spliter)).replace(re, '-');
        } else {
            return date;
        }
    }

    private getDateFormatSpliter(date: string) {
        let spliter;
        if (date.includes("/")) {
            spliter = "/";
        }
        else if (date.includes(".")) {
            spliter = ".";
        }
        else if (date.includes("-")) {
            spliter = "-";
        }
        return spliter;
    }
}