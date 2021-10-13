// let customer = customers[0]
// console.log(customers)

const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add(
    "uk-container-large",
    "uk-flex",
    "uk-flex-between",
    "uk-width-medium"
    );


for (let customer of customers){
    const customerCard = document.createElement('div');
    customerCard.id = `${customer.id.value}`;
    container.appendChild(customerCard);
    customerCard.classList.add(
        "uk-container-large", 
        "uk-flex",
        "uk-flex-between",
        "uk-width-medium"
        );
    


let title = document.createElement('p')
customerCard.innerText = customer.title
customerCard.appendChild(title)

// let templateLiteral = `${product.rating.count}`
// console.log(templateLiteral)

customerCard.innerHTML = `
    <p class="uk-card-title" 
    style="color; 
    padding: 15px"></p>
    <img src=${customer.picture.thumbnail}>
    <p>${customer.name.first}&nbsp${customer.name.last}</p>
    <p>${customer.email}</p>
    <p>${customer.location.street.number}
    &nbsp${customer.location.street.name}
    &nbsp${customer.location.city},
    &nbsp${customer.location.state}
    &nbsp${customer.location.postcode}
    </p>
    <p>${customer.phone}</p>
    <p>${customer.dob.date}</p>
    <p>${customer.registered.date}</p>

`;}

//1. Need to fix conversion for dob.
//2. Need to fix conversion for registered date.
//3. Should I add cell phone?
//4. Grid layout is off.
//5. Style the image.
//6. class tag for formatting is not working.