## Irudia beste birtualizazio sistema batzuetara bihurtzen

Erabiltzen duzun birtualizazio sistemak Raw formatua onartzen badu ez duzu lan askorik izango, bestelakoetan irudia formatu batetik bestera pasatu beharko duzu.

Vmware erabilitzen baduzu, hemen duzu hau nola egiten den ikusteko laguntza: http://wiki.laptop.org/go/VMware/Convert

Guk komando hau erabili dugu

```bash
:~# qemu-img convert  ElkarBackupServerBase2GB1.0.9.img -O vmdk ElkarBackupServerBase2GB1.0.9.vmdk
```

VirtualBox-erako beste hau:

```bash
:~# VBoxManage convertfromraw ElkarBackupServerBase2GB1.0.9.img ElkarBackupServerBase2GB1.0.9.vdi
```


