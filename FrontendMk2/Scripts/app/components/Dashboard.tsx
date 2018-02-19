﻿import * as React from "react";
import * as QBot from "../types/Model";
import { taskSelectors } from "../state/tasks";
import Link from "redux-first-router-link";
import { connect } from 'react-redux';
import Moment from "react-moment";
// TODO: Find better way to display the BEWT with some measure of precision.
export const Dashboard = (currentQueue: QBot.QueueDTO) => {
    const { bewt, machineBalance, internalQueue } = currentQueue;
    return <div>
        <div className="col-md-3" >BEWT:  {bewt.humanize()} </div>
        <div className="col-md-3" >Current Balance: {machineBalance}</div>
        <ul>
            {internalQueue.map(task =>
                <SingleTask key={task.taskId} {...task} />
            )
            }
        </ul>
    </div >;
}
export const SingleTask = (task: QBot.Task) =>
    <li className='list-group-item' key={task.taskId} >
        taskID: {task.taskId}<br />
        Customer: {task.customer.name}<br />
        Job: {task.job.name}<br />
        TimePrice: {task.timePrice} <br />
        Went on Queue: {task.timeEnqueued}<br />
        Balance: {task.balance}<br />
        jobId: {task.jobId}
    </li>

const mapStateToProps = (state) => ({
    // TODO: Find some way to map this from the full list of tasks.
    internalQueue: taskSelectors.getActiveSortedTasks(state),
    bewt: state.bewt,
    machineBalance: state.machineBalance
});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);