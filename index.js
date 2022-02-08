import { soap } from 'strong-soap';

const wsdl = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

process.env.https_proxy = "http://127.0.0.1:8888";
process.env.http_proxy = "http://127.0.0.1:8888";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

(() => {
    soap.createClient(wsdl, {}, (err, client) => {
        client.ListOfContinentsByCode({}, (err, result) => {
            console.log({continents: result.ListOfContinentsByCodeResult.tContinent});
        });

        client.ListOfCurrenciesByName({}, (err, result) => {
            console.log({currencies: result.ListOfCurrenciesByNameResult.tCurrency});
        });

        client.ListOfCountryNamesByCode({}, (err, result) => {
            console.log({country: result.ListOfCountryNamesByCodeResult.tCountryCodeAndName});
        });
    });
})();
