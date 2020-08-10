# Real-analytics

## Background and Overview

The biggest financial decision many individuals will make involves purchasing real estate. Be it their first house or secondary investment properties, lots of information need to be considered before making a purchase. There are a HUGE numbers of factors! 

This application is focused on providing a web application that allows user to visualize and aggregate data of their choosing to see how homes from different regions compare to one another. 

We will need to: 
* Incorporate zillow api data to obtain relevant information
* Build a database to store housing data from different areas
* Construct a web application to visualize and compare datasets
* Export this data in a user-friendly manner

## Functionality and MVP

- [ ] Landing page with tabs for login, signup, demo
- [ ] User Authorization: login, signup, demo
- [ ] Search bar for looking up state, city, zip code
- [ ] Interactive web page of data visualization of real estate analytics
- [ ] Filter for different housing information
- [ ] Comparisons performed between different datasets
- [ ] Exporting functionality to a user-friendly format

### Bonus Features
- [ ] Map api
- [ ] Calculator

## Technologies and Technical Challenges

## Core technologies
#### Real-Analytics is a web application with a back end built on MongoDB/express to save user auth and real estate data. Real estate data will be collected using various Zillow apis such as 
* GetSearchResults API: http://www.zillow.com/howto/api/GetSearchResults.htm
* GetZestimate API: http://www.zillow.com/howto/api/GetZestimate.htm
* GetChart API: http://www.zillow.com/howto/api/GetChart.htm
* GetComps API: http://www.zillow.com/howto/api/GetComps.htm 

#### Neighborhood & Community Data will also be taken in account to include:
lists of counties, cities, ZIP codes, and neighborhoods, as well as latitude and longitude data for these areas so you can put them on a map.

* GetRegionChildren: http://www.zillow.com/howto/api/GetRegionChildren.htm
* GetRegionChart: http://www.zillow.com/howto/api/GetRegionChart.htm

#### The frontend will be built upon React/Node.js to visualize the data that is collected. Various charts/graphs may be used to offer visual comparisons between different areas and ty[es of housing.

## Technical challenges

#### Backend: MongoDB/Express
User auth dada will be stored in documents on MongoDB. Certain Real estate data like national and state averages will also be stored onto MongoDB while keeping in mind a 512MB storage space limit, and the terms of use agreement with Zillow defining rules about data storage, sharing, and manipulation.

#### Frontend
React/node.js should be able to display retrieved API data to display both current statistics as well display a trending statistic that includes historical data. React libraries for data visualization will be essential for polishing display pages.


## Group members and project breakdown

## Tony Wu, Andrew Elmore, Edward Garrett

## August 7-August 9
- investigate API to collect data - everyone
- backend user auth - everyone


## Day 1
* Create the frontend for user authentication and landing page - Andrew Elmore
* Connect to Zillow API and extract data - Tony 
* Establish models, schema structure and data manipulation using mongoose - Edward and Tony
## Day 2
* Create the frontend for the search bar - Andrew Elmore
* Filter extracted data by area - Tony
* research and test react libraries for data visualization - Edward and Andrew
## Day 3
* Create the frontend for the page associated with an individual region - Andrew Elmore
* Connect extracted individual region data with frontend - Tony
## Day 4
* Create the frontend comparison page for different individual properties - Andrew Elmore
* Create backend comparison calculators - Tony
* Implement simple and UI to easily manipulate data - Edward and Andrew
## Day 5
* Create the frontend to export comparison and individual region pages to a pdf.
* Format data to be ready for export - Tony
