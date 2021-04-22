---
id: version-1.3.5-advanced-connection-options
title: Advanced connection options
original_id: advanced-connection-options
---

# Advanced connection options

From the _**Advanced**_ section of the Client configuration window, we can set up specific SSH and Rsync parameters.

![image](https://user-images.githubusercontent.com/1846038/114696738-4b6d5180-9d1d-11eb-8d03-8f881cffe32c.png)


Using default and advanced options, ElkarBackup generates a Rsnaphsot configuration file for each job (it's available for debugging purposes at `http://your-server/client/<client-id>/job/<job-id>/config` )

## Examples

**1- Using non-standard SSH ports**

If your client SSH is listening in a non-standard (22/tcp) SSH port, you can specify the port using the SSH `-p` option:

```
# Advanced - SSH args

-p2222
```


**2- Connecting to a remote server through a jump host**

SSH jump is an alternative to SSH tunneling to access internal machines through a gateway.

Prerequesites:
- SSH access to the gateway machine (jump host) and the internal one
- Gateway machine has netcat installed


```
# Advanced - SSH args

-J user@jumphost

```

**3- Limiting the available bandwidth during the file transference**

If your backup process is eating all your bandwidth, you can easily limit I/O bandwidth using `--bwlimit=RATE` option.

The following example will set the bandwidth limit to 5000 KBytes per second: 

```
# Advanced - Rsync long args

--bwlimit=5000
```
