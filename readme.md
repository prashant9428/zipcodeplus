# zipcodeplus :lady_beetle:
zipcodeplus is a zipcode details provider across world, we aim to cover all the countries but currently we are only serving for ***India*** and ***USA***.having country code (**IN** and **US**) :v:.

### :point_right: npm

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
>      const zip =  await zipcode("IN",482001)
>      console.log("zip",JSON.stringify(zip))
>    } catch (error) {
>        console.log(error)
>    }
> }
> getZipcode()
> ```
### Result :grinning:
>```tsx
> {"status":200,"message":"success","zip":{"Name":"Baroda House","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Del
> ivery","Circle":"Delhi","District":"Central Delhi","Division":"New Delhi Central","Region":"Delhi","Block":"New Delhi","State":"Delhi","Countr
> y":"India","Pincode":"110001"}}
>```

## status code

| statusCode     | Message        |
| -------------- | -------------- |
| 200            | SUCCESS        |
| 400            | INVALID_REQUEST|           
| 404            | NOT_FOUND      |

### isValidZipcode(countryCode: string, zipcode: string|number)

> ```tsx
> const {isValidZipcode} = require("zipcode")
> console.log(isValidZipcode("IN",582001))
> ```

### Available countries

| countryCode    | case sensitive |
| -------------- | -------------- |
| IN             | True           |
| US             | True           |
| UK             | True           |
| AU             | True           |
| CA             | True           |




