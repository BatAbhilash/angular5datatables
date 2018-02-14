import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'category' })
export class SearchByCategory implements PipeTransform {
    transform(categories: any, searchText: any): any {
        if (searchText == null) {
            return categories;
        }
        return categories.filter(category => {
            for (const columnName of Object.keys(category)) {

                // for child nodes
                if (typeof category[columnName] !== 'string') {
                    for (const childColName of category[columnName]) {
                        const ChildNodeValue = Object.values(childColName)[0];
                        if (ChildNodeValue.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                            return true;
                        }
                    }
                    return false;
                }
                // for Parent nbodes
                if (category[columnName].toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                    return true;
                }
            }
            return false;
        });
    }
}
