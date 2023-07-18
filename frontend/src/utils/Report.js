import axiosInstance from "../API/axios";
import localforage from "localforage";


export default class API {

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

    async getReport(startDate, endDate, params, methodType, bodyData, asFaculty = false) {
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

        if (asFaculty)
            path += '/asFaculty'

        const token = await localforage.getItem('access_token');
        let information = {
            url: "/api/actions/" + startDate + "/" + endDate + path,
            method: methodType,
            headers: {
                "Authorization": "JWT " + token
            },
            responseType: 'blob', // important
        }

        if (methodType === "post") {
            information['data'] = { "employees": bodyData }
        }

        console.log(information)

        await axiosInstance(information)
            .then((response) => {

                const href = URL.createObjectURL(response.data);

                // create "a" HTML element with href to file & click
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', 'CSGT_Report.PDF'); //or any other extension
                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(href);

            })
            .catch((error) => {
                // Your error is here!
                console.log(error);
                alert("Cannot connect to server. Please try again later.");
            });
    }

}