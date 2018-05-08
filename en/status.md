In this view we can see the state of the backup in each moment as well as the state of the clients. There is a scheduler that manages the states a job needs to pass through to correctly execute the backup. The scheduler processes for each job its state and also for each client as we can see in the graphs below.

When we enqueue a job, it will be shown in this view, they will be queued ordered by time and priority.

![](/assets/state_machine.png)

There is a parameter defined that changes the function of the job's state machine. If the parameter is active and pre job scripts fail, then post job scripts will be executed, otherwise, it will abort without running the backup.
 
As we can see, both graphs are executed at the same time in order to complete the lifecycle of a job backup.

Also we can abort backups by clicking the abort button. The button will be shown next to each backup job that has been scheduled.

![](/assets/elkar-status.png)
