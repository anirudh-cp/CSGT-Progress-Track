class API {

    async getData(token, empID, type, startDate, endDate) {
        const response = await fetch(
            "http://127.0.0.1:8000/api/data/" + empID + "/" + type + "/" + startDate + "/" + endDate,
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
        ).catch((error) => {
            // Your error is here!
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 200) {
            let data = await response.json();
            console.log("In API");
            console.log(data);
            // console.log("End API");
            return data;
        } else {
            console.log("Returning none");
            return [];
        }
    }

    async AddData(token, empID, type, data) {
        data.emp_id = empID;
        const response = await fetch(
            "http://127.0.0.1:8000/api/data/" + empID + "/" + type,
            {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify(data),
            }
        ).catch((error) => {
            // Your error is here!
            console.log(error);
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 200) {
            return `${type} has been updated successfully!`;
        } else if (response.status === 201) {
            return `${type} has been created successfully!`;
        } else {
            let json = await response.json();
            let str = JSON.stringify(json);
            console.log(str);
            return "Error\n" + str;
        }
    }

    returnDuration(end, start) {
        var strftime = require("strftime");
        // Return the duration between two dates.
        // First subtract the dates. This is returned in the form of YYYY-MM-DD relative to 1st of Jan 1970 (UNIX epoch).
        // Subtract the appropriate values and then return the relevant string
        let duration = strftime(
            "%Y-%m-%d",
            new Date(new Date(end) - new Date(start))
        );
        let durations = duration.split("-").map((x) => {
            return Number(x);
        });

        durations[0] -= 1970;
        durations[1] -= 1;
        durations[2] -= 1;

        let resString = "";
        if (durations[0] !== 0) {
            resString += durations[0] + " years, ";
        }

        if (durations[1] !== 0) {
            resString += durations[1] + " months, ";
        }

        resString += durations[2] + " day(s)";

        return resString;
    }


    async getReport(token, startDate, endDate, params, methodType, bodyData) {
        // TODO: Implement a dictionary to map the params to the path.

        let path = "";
        if (params.includes("Journal")) {
            path += "/journal";
        }

        if (params.includes("Conference")) {
            path += "/conference";
        }

        if (params.includes("Event")) {
            path += '/event'
        }

        if (params.includes("Consultancy")) {
            path += "/consultancy";
        }

        if (params.includes("Books")) {
            path += "/book";
        }

        if (params.includes("Patents")) {
            path += "/patent";
        }

        if (params.includes("Projects")) {
            path += "/project";
        }

        if (params.includes("Industrial Interactions")) {
            path += "/industrial";
        }

        let information = {}
        if (methodType === "get") {
            information = {
                method: methodType,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
        }
        else if (methodType === "post")
        {
            information = {
                method: methodType,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify({"employees": bodyData})
            }
        }

        const response = await fetch(
            "http://127.0.0.1:8000/api/actions/" + startDate + "/" + endDate + path, information
        )
            .then((response) => response.blob())
            .then((blob) => {
                // https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e

                // 2. Create blob link to download
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "CSGT_Report.PDF");
                // 3. Append to html page
                document.body.appendChild(link);
                // 4. Force download
                link.click();
                // 5. Clean up and remove the link
                link.parentNode.removeChild(link);
            })
            .catch((error) => {
                // Your error is here!
                console.log(error);
                alert("Cannot connect to server. Please try again later.");
            });
    }

    async getAllFacultyData(token) {
        const response = await fetch("http://127.0.0.1:8000/api/faculty", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        }).catch((error) => {
            // Your error is here!
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 200) {
            let data = await response.json();
            console.log("In API");
            // console.log(data);
            // console.log("End API");
            return data;
        } else {
            console.log("Returning none");
            return [];
        }
    }

    async getFacultyData(token, empID) {
        const response = await fetch("http://127.0.0.1:8000/api/faculty/" + empID, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        }).catch((error) => {
            // Your error is here!
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 200) {
            let data = await response.json();
            console.log("In API");
            // console.log(data);
            // console.log("End API");
            return data[0];
        } else {
            console.log("Returning none");
            return [];
        }
    }

    async DeleteUser(token, email) {
        const response = await fetch("http://127.0.0.1:8000/api/actions/users", {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                email: email,
            }),
        }).catch((error) => {
            // Your error is here!
            console.log(error);
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 200 || response.status === 404) {
            return await response.json();
        } else {
            console.log(response);
            return "Error";
        }
    }

    async ChangeGroup(token, email, group) {
        const response = await fetch("http://127.0.0.1:8000/api/actions/users", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                email: email,
                group: group,
            }),
        }).catch((error) => {
            // Your error is here!
            console.log(error);
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 401 || response.status === 404) {
            return await response.json();
        } else if (response.status === 200) {
            let resp = await response.json();
            return resp.response + " to " + resp.group;
        } else {
            console.log(response);
            return "Error";
        }
    }

    async AddUser(token, email, password, password2, destinationGroup) {
        const response = await fetch("http://127.0.0.1:8000/api/account/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password2: password2,
                destinationGroup: destinationGroup,
            }),
        }).catch((error) => {
            // Your error is here!
            console.log(error);
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 409) {
            return "The email is already in use.";
        } else if (response.status === 201) {
            return "User has been created successfully!";
        } else {
            console.log(response);
            return "Error";
        }
    }

    async AddFaculty(token, data) {
        if (data.ORCID_ID === "") {
            data.ORCID_ID = 0;
        }

        const response = await fetch(
            "http://127.0.0.1:8000/api/faculty/" + data.emp_id,
            {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify(data),
            }
        ).catch((error) => {
            // Your error is here!
            console.log(error);
            alert("Cannot connect to server. Please try again later.");
        });

        if (response.status === 200) {
            return "Faculty has been updated successfully!";
        } else if (response.status === 201) {
            return "Faculty has been created successfully!";
        } else {
            let json = await response.json();
            let str = JSON.stringify(json);
            console.log(str);
            return "Error\n" + str;
        }
    }

}

export default API;
