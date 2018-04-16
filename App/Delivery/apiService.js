export default class Service {
    baseUrlApi = 'http://www.mocky.io/v2/';

    async getCountries(){
        try{
            let header = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
            let response = await this.getResponse(this.baseUrlApi + '5acb170f2e00003500bbab17', {headers: header});        //?mocky-delay=1000ms
            if(response.statusReply.status == "OK")
            {
                return response.data.countries;
            }
        }
        catch (error){
            console.log(error);
        }
        return [];
    }
    
    async getResponse(url, content){
        const response = await fetch(url, content);
        const json = await response.json();
        return json;      
    }
}