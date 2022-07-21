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
}

export default API