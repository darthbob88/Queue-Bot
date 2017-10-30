﻿import * as React from "react";
import * as QBot from "../types/Model";
import Link from "redux-first-router-link";
import { connect, Dispatch, Provider } from "react-redux";
import * as moment from "moment";
import Moment from "react-moment";
// TODO: Find better way to display the BEWT with some measure of precision.
const NewTask = ({ createTask }) => {
    let input;
    return <div>
        <h2>New Task</h2>
        <input ref={node => { input = node; }} />
        <button> Back </button >
        <button onClick={() => createTask(input.value)}> Save</button >
    </div>;
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({

    createTask: (authID) => dispatch({
        type: "ADD_TASK",
        newTask: {
            timeEnqueued: moment.now(), customer: { name: "Bert", authId: "klkjlk", requestedJobs: [] }, authId: "adkkql",
            job: { jobId: 1, length: moment.duration({ hours: 1 }), description: "asdfadfkl", name: "sdasdfkjlkk" }, taskId: authID,
            taskStatus: 1, waitTime: moment.duration({ hours: 3 }), deposit: 3, timePrice: 1.5, timeOfExpectedService: moment.now(), Balance: -4.1,
            jobId: 1, customerNotes: "", adminNotes: ""
        }
    })
});
export const ConnectedNewTask = connect(mapStateToProps, mapDispatchToProps)(NewTask);