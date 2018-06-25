---
id: script-intro
title: Scripts
---

In many cases we will be interested in doing something before and / or after the execution of a task, for example:

Before:

* Maybe we need to open a VPN connection to get a connection to a remote server
* To create a snapshot of the entire disk of a remote client to copy data without interferences
* To stop some services before to copy their data \(Zimbra, MySQL, ....\)
* etc.

After:

* To close the VPN connection we had opened before
* To make sure that certain files are consistent: check files creation date and time, check if compressed bzip files are decompressed without errors, ...
* etc.

We will use the scripts to program these actions, and we will be able to develop new scripts and even to share them with others.

