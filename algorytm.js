//if author has added only one ticket
const onlyOneTicket = (allTickets) => {
    let result = 0;
   if (allTickets.length === 1){
     result +=10
    } else {
     return result
    }
}
//znalezc event po eventId i sprawdzic czy maja jakies tickets
//getAllTickets() ktore beda nalezec do konkretnego eventu

//If the ticket.price is < than the average ticket.price for that specific event
// * if the ticket.price is x% cheaper than the average ticket.price -> add x%
// jak obliczyc srednia cene biletow?
//dodaj wszystkie ceny i podziel przez ilosc 
const averagePriceOfTicket = (allTickets) => {
    const tickets = allTickets
    return Math.round((tickets.map(ticket => ticket.price).reduce((prev, currentPrice) => 
    prev + currentPrice)) / tickets.length)
}

// price of a particular ticket and averagepriceoftickets for that particular event
const isCheaper = (price, averagePriceOfTicket) =>  {
    const average = averagePriceOfTicket
    let result = 0;
    if(price < average) {
    const difference = (average - price)  // how much cheaper our ticket is?
    return result += difference * 100 / average // (average = 100%, price = x)
     }else if(price > average) {
        const difference = price - average 
        return result -= difference * 100 / average
    }
    return result
// if ticker is more expensive than all average price for tickets
    
}


