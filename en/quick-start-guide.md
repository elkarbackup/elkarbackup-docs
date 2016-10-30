In this guide, we will create a simple Rancher install, which is a single host installation that runs everything on a single Linux machine.

## Prepare a Linux host

Provision a Linux host with 64-bit Ubuntu 16.04, which must have a kernel of 3.10+. You can use your laptop, a virtual machine, or a physical server. Please make sure the Linux host has at least 1GB memory. Install Docker onto the host.

## Install Elkarbackup Server

All you need is one command to launch Rancher server. After launching the container, we’ll tail the logs of the container to see when the server is up and running.

$ sudo docker run -d --restart=unless-stopped -p 8080:8080 rancher\/server

\# Tail the logs to show Rancher

$ sudo docker logs -f &lt;CONTAINER\_ID&gt;

It will only take a couple of minutes for Rancher server to start up. When the logs show .... Startup Succeeded, Listening on port..., the Rancher UI is up and running. This line of the logs is almost immediately after the configuration is complete. There may be additional logs after this output, so please don’t assume it will be the last line of the logs upon initialization.

Our UI is exposed on port 8080, so in order to view the UI, go to http:\/\/&lt;SERVER\_IP&gt;:8080. If you are running your browser on the same host running Rancher server, you will need to use the host’s real IP, like http:\/\/192.168.1.100:8080 and not http:\/\/localhost:8080 or http:\/\/127.0.0.1:8080.

## Add Hosts





