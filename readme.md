# Zipcodeplus :rocket:
Zipcode plus is a zipcode details provider accross world,we aim to cover all the countries but currently we are only serving for ***india***.

### npm

This is the preferred method. For example:

```sh
npm install zipcodeplus
```
### zipcode(countryCode: string, zipcode: string|number)
> ```tsx
> const {zipcode} = require("zipcode")
>
> async function getPincode(){
>    try {
>      const country =  await zipcode("IN",482001)
>      console.log("country",JSON.stringify(country))
>    } catch (error) {
>        console.log(error)
>    }
> }
> getPincode()
> ```
### isValidZipcode(countryCode: string, zipcode: string|number)
> ```tsx
> const {isValidZipcode} = require("zipcode")
> console.log(isValidZipcode("IN",582001))
> ```

## Availabe countries

| countryCode    | case sensitive |
| -------------- | -------------- |
| IN             | True           |
| US             | True           |
| UK             | True           |
| AU             | True           |
| CA             | True           |
