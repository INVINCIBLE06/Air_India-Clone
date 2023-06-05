const db = require('./models');
require('dotenv').config();
const Airport = db.airport

module.exports = async () =>
{
    try  
    { 
        const airports = 
        [
            { state: 'Andaman', city: 'Port Blair', airportName: 'Veer Savarkar International', iataCode: 'IXZ', icaoCode: 'VOPB' },
            { state: 'Andhra Pradesh', city: 'Vijayawada', airportName: 'Vijayawada International', iataCode: 'VGA', icaoCode: 'VOBZ' },
            { state: 'Andhra Pradesh', city: 'Visakhapatnam', airportName: 'Visakhapatnam International', iataCode: 'VTZ', icaoCode: 'VOVZ' },
            { state: 'Assam', city: 'Guwahati', airportName: 'Lokpriya Gopinath Bordoloi International', iataCode: 'GAU', icaoCode: 'VEGT' },
            { state: 'Bihar', city: 'Patna', airportName: 'Lok Nayak Jayaprakash Airport', iataCode: 'PAT', icaoCode: 'VEPT' },
            { state: 'Chandigarh', city: 'Chandigarh', airportName: 'Chandigarh International', iataCode: 'IXC', icaoCode: 'VICG' },
            { state: 'Chhattisgarh', city: 'Raipur', airportName: 'Swami Vivekananda Airport', iataCode: 'RPR', icaoCode: 'VERP' },
            { state: 'Delhi', city: 'Delhi', airportName: 'Indira Gandhi International', iataCode: 'DEL', icaoCode: 'VIDP' },
            { state: 'Goa', city: 'Dabolim', airportName: 'Goa International', iataCode: 'GOI', icaoCode: 'VOGO' },
            { state: 'Gujarat', city: 'Ahmedabad', airportName: 'Sardar Vallabhbhai Patel International', iataCode: 'AMD', icaoCode: 'VAAH' },
            { state: 'Gujarat', city: 'Surat', airportName: 'Surat International', iataCode: 'STV', icaoCode: 'VASU' },
            { state: 'Haryana', city: 'Faridabad', airportName: 'Safdarjung Airport', iataCode: '---', icaoCode: 'VIDD' },
            { state: 'Himachal', city: 'Shimla', airportName: 'Shimla Airport', iataCode: 'SLV', icaoCode: 'VISM' },
            { state: 'Jammu & Kashmir', city: 'Srinagar', airportName: 'Sheikh ul-Alam International', iataCode: 'SXR', icaoCode: 'VISR' },
            { state: 'Jharkhand', city: 'Ranchi', airportName: 'Birsa Munda Airport', iataCode: 'IXR', icaoCode: 'VERC' },
            { state: 'Karnataka', city: 'Bengaluru', airportName: 'Kempegowda International', iataCode: 'BLR', icaoCode: 'VOBL' },
            { state: 'Karnataka', city: 'Mangalore', airportName: 'Mangalore International', iataCode: 'IXE', icaoCode: 'VOML' },
            { state: 'Kerala', city: 'Kochi', airportName: 'Cochin International', iataCode: 'COK', icaoCode: 'VOCI' },
            { state: 'Kerala', city: 'Kozhikode', airportName: 'Calicut International', iataCode: 'CCJ', icaoCode: 'VOCL' },
            { state: 'Madhya Pradesh', city: 'Indore', airportName: 'Devi Ahilya Bai Holkar', iataCode: 'IDR', icaoCode: 'VAID' },
            { state: 'Madhya Pradesh', city: 'Bhopal', airportName: 'Raja Bhoj International', iataCode: 'BHO', icaoCode: 'VABP' },
            { state: 'Maharashtra', city: 'Mumbai', airportName: 'Chhatrapati Shivaji International', iataCode: 'BOM', icaoCode: 'VABB' },
            { state: 'Maharashtra', city: 'Pune', airportName: 'Pune International', iataCode: 'PNQ', icaoCode: 'VAPO' },
            { state: 'Manipur', city: 'Imphal', airportName: 'Bir Tikendrajit International', iataCode: 'IMF', icaoCode: 'VEIM' },
            { state: 'Meghalaya', city: 'Shillong', airportName: 'Shillong Airport', iataCode: 'SHL', icaoCode: 'VEMH' },
            { state: 'Mizoram', city: 'Aizawl', airportName: 'Lengpui Airport', iataCode: 'AJL', icaoCode: 'VEAZ' },
            { state: 'Nagaland', city: 'Dimapur', airportName: 'Dimapur Airport', iataCode: 'DMU', icaoCode: 'VEMR' },
            { state: 'Odisha', city: 'Bhubaneswar', airportName: 'Biju Patnaik International', iataCode: 'BBI', icaoCode: 'VEBS' },
            { state: 'Puducherry', city: 'Puducherry', airportName: 'Puducherry Airport', iataCode: 'PNY', icaoCode: 'VOPC' },
            { state: 'Punjab', city: 'Amritsar', airportName: 'Sri Guru Ram Dass Jee International', iataCode: 'ATQ', icaoCode: 'VIAR' },
            { state: 'Punjab', city: 'Ludhiana', airportName: 'Sahnewal Airport', iataCode: 'LUH', icaoCode: 'VILD' },
            { state: 'Rajasthan', city: 'Jaipur', airportName: 'Jaipur International', iataCode: 'JAI', icaoCode: 'VIJP' },
            { state: 'Rajasthan', city: 'Jodhpur', airportName: 'Jodhpur Airport', iataCode: 'JDH', icaoCode: 'VIJO' },
            { state: 'Tamil Nadu', city: 'Chennai', airportName: 'Chennai International', iataCode: 'MAA', icaoCode: 'VOMM' },
            { state: 'Tamil Nadu', city: 'Coimbatore', airportName: 'Coimbatore International', iataCode: 'CJB', icaoCode: 'VOCB' },
            { state: 'Telangana', city: 'Hyderabad', airportName: 'Rajiv Gandhi International', iataCode: 'HYD', icaoCode: 'VOHS' },
            { state: 'Tripura', city: 'Agartala', airportName: 'Maharaja Bir Bikram International', iataCode: 'IXA', icaoCode: 'VEAT' },
            { state: 'Uttar Pradesh', city: 'Lucknow', airportName: 'Chaudhary Charan Singh International', iataCode: 'LKO', icaoCode: 'VILK' },
            { state: 'Uttar Pradesh', city: 'Varanasi', airportName: 'Lal Bahadur Shastri International', iataCode: 'VNS', icaoCode: 'VIBN' },
            { state: 'Uttarakhand', city: 'Dehradun', airportName: 'Jolly Grant Airport', iataCode: 'DED', icaoCode: 'VIDN' },
            { state: 'West Bengal', city: 'Kolkata', airportName: 'Netaji Subhas Chandra Bose International', iataCode: 'CCU', icaoCode: 'VECC' },
            { state: 'West Bengal', city: 'Bagdogra', airportName: 'Bagdogra Airport', iataCode: 'IXB', icaoCode: 'VEBD' },
        ];
        Airport.bulkCreate(airports).then(() =>
        {
            console.log("#### Airport table is succeessfully initialize with the data #### ");
        }).catch((err) => 
        {
            console.log("Error while intializing the ADMIN DATA", err.message)
        });
    }
    catch(err)
    { 
        console.log("#### Table is already present. No deletion is done. #### ");        
    }
}; 