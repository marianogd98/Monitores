export default class Gate{

    constructor( ){

    }

    getApiUrl(local=7){
        let url = '';       
        switch (local) {
            case 1://jb
                url = 'http://172.17.0.14:8302/api/';//'https://localhost:44345/api/';//'http://jbaapp02:8302/api/';//
                break;
            case 2://Traki
                url = 'http://172.18.0.14:8302/api/';//'http://trkapp01:8302/api/';//
                break;
            case 3://playa el angel
                url = 'http://172.19.0.14:8302/api/';//'https://localhost:44345/api/';//'http://plyapp01:8302/api/';//
                break;
            case 4://terranova
                url = 'http://172.54.0.14:8302/api/';//'http://trnapp01:8302/api/';//
                break;
            case 5://31 Julio
                url = 'http://172.21.0.14:8302/api/';
            break;
            case 6://Juan Griego
                url = 'http://172.22.0.14:8304/api/';
            break;
            case 7://Cumana Palma
                url = 'http://172.24.0.14:8304/api/';
            break;   
            case 8://Maturin
                url = 'http://172.25.0.14:8080/api/'; //http://172.25.0.14:8080/api/ //'https://apipreciosmat.riomarket.com/api/';
            break;  
            case 9://Sambil
                url = 'http://172.23.0.14:8304/api/'; //http://172.25.0.14:8080/api/ //'https://apipreciosmat.riomarket.com/api/';
            break;                     
            case 999://iis Local
                url = 'http://172.50.3.15:8302/api/';
            break;
            default://local
                url = 'http://localhost:50464/api/';//'http://insideapp01:8302/api/';////'http://172.50.0.22:8302/api/';//
                break;
        }
        return url;
    }


}