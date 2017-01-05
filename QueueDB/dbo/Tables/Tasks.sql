﻿CREATE TABLE [dbo].[Tasks] (
    [TaskId]                UNIQUEIDENTIFIER NOT NULL,
    [AuthID]                NVARCHAR (128)   NULL,
    [jobId]                 INT              NOT NULL,
    [taskStatus]            NVARCHAR (MAX)   NULL,
    [customerNotes]         NVARCHAR (MAX)   NULL,
    [adminNotes]            NVARCHAR (MAX)   NULL,
    [timePrice]             FLOAT (53)       NOT NULL,
    [timeEnqueued]          DATETIME         NOT NULL,
    [timeOfExpectedService] DATETIME         NOT NULL,
    [deposit]              money      NOT NULL,
    [Balance]               money       NOT NULL,
    CONSTRAINT [PK_dbo.Tasks] PRIMARY KEY CLUSTERED ([TaskId] ASC),
    CONSTRAINT [FK_dbo.Tasks_dbo.Customers_AuthID] FOREIGN KEY ([AuthID]) REFERENCES [dbo].[Customers] ([AuthId]),
    CONSTRAINT [FK_dbo.Tasks_dbo.Jobs_jobId] FOREIGN KEY ([jobId]) REFERENCES [dbo].[Jobs] ([JobId]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_AuthID]
    ON [dbo].[Tasks]([AuthID] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_jobId]
    ON [dbo].[Tasks]([jobId] ASC);

