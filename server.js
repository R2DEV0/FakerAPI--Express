const express = require("express");
const app = express();
const faker = require("faker");

const server = app.listen(8000, () =>
    console.log(`Server is totally ready on port ${server.address().port}!`)
);

//////////////////////////////////////////// Get Request for User class ///////////////////////////////
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/users", (req, res) => {
    res.send( users );
});
//////////////////////////////////////////// Get Request for Company class ///////////////////////////////
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/companies", (req, res) => {
    res.send( companies );
});

////////////////////////////////////// Get Request for Company & User classes ///////////////////////////////
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/users/companies", (req, res) => {
    const data = {users, companies}
    res.send( data )
});

// ///////////////////////////////////// User Class /////////////////////////////////////////////////////
class User{
    constructor(){
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone_number = faker.phone.phoneNumber();
        this.email_address = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const users = [(new User())];

// ///////////////////////////////////// Company Class /////////////////////////////////////////////////////
class Company{
    constructor(){
        this.company_name = faker.company.companyName();
        this.address_city = faker.address.city();
        this.address_state = faker.address.state();
        this.address_zip = faker.address.zipCode();
        this.address_country = faker.address.country();
    }
}
const companies = [(new Company())];

//////////////////////////////////////////////// Post Request for User class ////////////////////////////
app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body)
    res.json({ status: 'ok' });
});

///////////////////////////////////////////// Post Request for Company class ///////////////////////////////
app.post("/api/companies", (req, res) => {
    console.log(req.body);
    companies.push(req.body)
    res.json({ status: 'ok' });
});

///////////////////////////////////// Post Request for Company & User classes ///////////////////////////////
app.post("/api/users/companies", (req, res) => {
    console.log(req.body);
    companies.push(req.body)
    users.push(req.body)
    res.json({ status: 'ok' });
});