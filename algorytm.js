//if author has added only one ticket
const onlyOneTicket = (allTicketsofAuthor) => {
    let score = 0;
   if (allTickets.length === 1){
     score +=10
    } else {
     return score
    }
}
//znalezc event po eventId i sprawdzic czy maja jakies tickets
//getAllTickets() ktore beda nalezec do konkretnego eventu

//If the ticket.price is < than the average ticket.price for that specific event
// * if the ticket.price is x% cheaper than the average ticket.price -> add x%
// jak obliczyc srednia cene biletow?
//dodaj wszystkie ceny i podziel przez ilosc 
const averagePriceOfTicket = (allTicketsForSpecificEvent) => {
    const tickets = allTicketsForSpecificEvent
    return Math.round((tickets.map(ticket => ticket.price).reduce((prev, currentPrice) => 
    prev + currentPrice)) / tickets.length)
}

// price of a particular ticket and averagepriceoftickets for that particular event
 isCheaper = (price, averagePriceOfTicket) =>  {
    const average = averagePriceOfTicket
    let score = 0;
    if(price < average) {
    const difference = (average - price)  // how much cheaper our ticket is?
    return score += difference * 100 / average // (average = 100%, price = x)
     }else if(price > average) {
        const difference = price - average 
        return score -= difference * 100 / average
    }
    return score
// if ticker is more expensive than all average price for tickets
    
} //if the ticket was added in business hours minus 10% to risk, 
// if not +10
 bussinesHours = (timestamps) => {
     let score = 0;

 }

 //  if there are >3 comments on the ticket, add 5% to the ris
 const hasManyComments = (comments) => {
     let score =0;
     if(comments.length > 3) {
        return score += 5
     }else {
         return score
     }
 }
 //The minimal risk is 5% (there's no such thing as no risk) 
 //and the maximum risk is 95%.
 const exactRisk = (risk) => {
     if(risk > 95) {
         return risk = 95
     }else if (risk < 5){
         return risk = 5
     }else {
         return Math.round(risk)
     }
 }

// find all tickets for specific event

// filter founded tickets to find tickets with same user.id
// filter all tickets to find those with exact eventId