import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(records: Array<any>, args?: any): any {
        return records.sort(function (a, b) {
            if (!args.childProperty) {
                if (a[args.property] < b[args.property]) {
                    return -1 * args.direction;
                } else if (a[args.property] > b[args.property]) {
                    return 1 * args.direction;
                } else {
                    return 0;
                }
            } else {
                if (a[args.property][args.index][args.childProperty] < b[args.property][args.index][args.childProperty]) {
                    return -1 * args.direction;
                } else if (a[args.property][args.index][args.childProperty] > b[args.property][args.index][args.childProperty]) {
                    return 1 * args.direction;
                } else {
                    return 0;
                }
            }

        });
    }
}
