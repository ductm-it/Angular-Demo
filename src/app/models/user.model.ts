export class UserModel {
    
    public userId: string;
    public userRole: string;

    constructor (userId: string, userRole: string) {
        this.userId = userId;
        this.userRole = userRole;
    }

}