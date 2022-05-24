export interface IAddress {
    addressList?: AddressList[];
}

export interface AddressList {
    id?:           string;
    musterilerID?: string; // language
    il?:           string;
    ilce?:         string;
    Mahalle?:      string;
    adres?:        string;
    kapiNo?:       string;
    not?:          string;
    tarih?:        Date | string;
}
