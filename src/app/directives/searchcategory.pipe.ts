import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'category' })
export class SearchCategory implements PipeTransform {
    transform(categories: any, searchText: any): any {
        if (searchText == null) {
            return categories;
        }
        return categories.filter(category => {
            for (const columnName of Object.keys(category)) {
                    if (category[columnName].toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                       return true;
                }
            }
            return false;
        });
    }
}
