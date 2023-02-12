# Zipcodeplus :rocket:
Zipcode plus is a zipcode details provider accross world,we aim to cover all the countries but currently we are only serving for ***india*** and ***USA***.

### npm

This is the preferred method. For example:

```sh
npm install zipcodeplus
```
### zipcode(countryCode: string, zipcode: string|number)
> ```tsx
> const {zipcode} = require("zipcode")
>
> async function getZipcode(){
>    try {
>      const zip =  await zipcode("US",79357)
>      console.log("zip",JSON.stringify(country))
>    } catch (error) {
>        console.log(error)
>    }
> }
> getZipcode()
> ```

### isValidZipcode(countryCode: string, zipcode: string|number)
> ```tsx
> const {isValidZipcode} = require("zipcode")
> console.log(isValidZipcode("IN",582001))
> ```

## Available countries

| countryCode    | case sensitive |
| -------------- | -------------- |
| IN             | True           |
| US             | True           |
| UK             | True           |
| AU             | True           |
| CA             | True           |


## status code

| statusCode     | Message        |
| -------------- | -------------- |
| 200            | SUCCESS        |
| 400            | INVALID_REQUEST|           
| 404            | NOT_FOUND      |


