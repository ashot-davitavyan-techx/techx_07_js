import { UIErrorPresenter } from "./UIErrorPresenter.js";
import { ValidationError } from "./ValidationError.js";

export class ErrorHandler {
    static findGroup(groups, groupName) {
        for (let i = 0; i < groups.length; i++) {
            if (groups[i][0].fieldGroupName == groupName)
                return i;
        }
        return -1;
    }

    static groupErrors(errors) {
        let groups = [];
        for (let i = 0; i < errors.length; i++) {
            let j = this.findGroup(groups, errors[i].fieldGroupName);
            if (j == -1) {
                let group = [errors[i]];
                groups.push(group);
            } else {
                groups[j].push(errors[i]);
            }
        }
        return groups;
    }

    static handleErrors(errors) {
        let groups = this.groupErrors(errors);
        for (let i = 0; i < groups.length; i++) {
            UIErrorPresenter.showValidationErrors(groups[i], i == 0);
        }
    }
}