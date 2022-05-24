export interface IUser { // probably "UsersData" would be more understandable
    user: User[]; // would be better to rename it to "users"
}

export interface User {
    durum:    boolean;
    mesaj:    string;
    bilgiler?: Bilgiler; // please, use English to make it understandable for everyone who will look at your code
}

export interface Bilgiler {
    userId:      string;
    userName:    string;
    userSurname: string;
    userEmail:   string;
    userPhone:   string;
    face:        string;
    faceID:      string;
}
