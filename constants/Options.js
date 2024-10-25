export const SelectTravellerList=[
    {
        id:1,
        traveller:"Solo",
        description: "A sole traveller in exploration",
        people:"1"
    },
    {
        id:2,
        traveller:"A Couple",
        description: "Two travellers in tandem",
        people:"2"
    },
    {
        id:3,
        traveller:"Family",
        description:"A group pf fun loving adv",
        people:"4-5"
    },
    {
        id:4,
        traveller:"Friends",
        description:"A bunch of thrill-seekers",
        people:"4-10"
    }
]

export const Travel_Generate_Prompt = "Generate Travel Plan for Location: {location} for {totalDays} Days and {totalNight} Night for {traveller} with {budgetInfo} budget with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel for each of the location for 4 days and 3 night with each day plan with best time to  visit in a JSON format.Please don't give any other info other than the json data"

// export const Travel_Generate_Prompt="Create a trip for {location} for {totalDays} days with {traveller} having a budget of {budgetInfo}"