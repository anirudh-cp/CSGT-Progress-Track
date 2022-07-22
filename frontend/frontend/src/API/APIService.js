class API {
    async getPublicationsData(token, type, startDate, endDate) {
        
        const response = await fetch('http://127.0.0.1:8000/api/publications/' + type + '/' + startDate + '/' + endDate, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
              }
        }).catch((error) => {
            // Your error is here!
            alert('Cannot connect to server. Please try again later.')
        });


        if (response.status === 200) {
            let data = await response.json();
            console.log("In API");
            // console.log(data);
            // console.log("End API");
            return data;
        }
        else{
            console.log("Returning none")
            return []
        }

    }


    async getConsultancyData(token, startDate, endDate)
    {
        const response = await fetch('http://127.0.0.1:8000/api/consultancy/' + startDate + '/' + endDate, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
              }
        }).catch((error) => {
            // Your error is here!
            alert('Cannot connect to server. Please try again later.')
        });


        if (response.status === 200) {
            let data = await response.json();
            console.log("In API");
            // console.log(data);
            // console.log("End API");
            return data;
        }
        else{
            console.log("Returning none")
            return []
        }

    }


    returnDuration(end, start)
    {
        var strftime = require('strftime');
        // Return the duration between two dates.
        // First subtract the dates. This is returned in the form of YYYY-MM-DD relative to 1st of Jan 1970 (UNIX epoch).
        // Subtract the appropriate values and then return the relevant string
        let duration = strftime("%Y-%m-%d", new Date(new Date(end) - new Date(start)));
        let durations = duration.split('-').map(x => {return Number(x);})

        durations[0] -= 1970
        durations[1] -= 1
        durations[2] -= 1

        let resString = ""
        if(durations[0] !== 0){ 
            resString += durations[0] + " years, "
        }

        if(durations[1] !== 0){
            resString += durations[1] + " months, "
        }

        resString += durations[2] + " day(s)"

        return resString;
    }

}

export default API