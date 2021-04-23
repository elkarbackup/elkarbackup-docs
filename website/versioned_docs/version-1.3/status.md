---
id: version-1.3-backup-status
title: Backup status
original_id: backup-status
---

In this view we can see the state of the backup in each moment as well as the state of the clients. There is a scheduler that manages the states a job needs to pass through to correctly execute the backup. The scheduler processes for each job its state and also for each client as we can see in the graphs below.

When we enqueue a job, it will be shown in this view. The jobs will be queued ordered by time and priority. Every minute, the application looks if any job is queued and if that is the case the backups will be considered for scheduling.

The scheduler will decide how to proceed with each job based on the actual execution status and the configured parallel execution parameters.

![](assets/screenshots/state_machine.png)
 
As we can see, both graphs are executed at the same time in order to complete the lifecycle of a job backup.

Also we can abort backups by clicking the abort button. The button will be shown next to each backup job that has been scheduled.

![](assets/screenshots/elkar-status.png)

\* In case of pre script error, this path might be taken depending on the parameter _Do post on pre script failure_. That parameter can be found in the section _Configuring Elkarbackup_.