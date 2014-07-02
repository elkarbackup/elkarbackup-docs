Orain web nabigatzaile bat zabaldu eta [ElkarBackup](http://elkarbackup.org) zerbitzariaren helbidea jartzearekin nahiko litzateke aplikaziora konektatzeko. Hemen bi aukera ditugu:

- ***Host*** izena erabiltzea: Apache konfigurazioan ***elkarbackup*** izena ***ServerName*** atalean jarrita dugunez, http://elkarbackup helbidea erabili dezakegu atzipena lortzeko, beti ere gure sareko DNSan ***elkarbackup*** izena jarri dugun IP helbidearekin lotuta badaukagu.

- IP helbidea erabiltzea: Kasu honetan URLa honela osatu behar dugu: http://IPHELBIDEA/elkarbackup/app.php/login

Eta aplikazioaren ***root*** erabiltzailearekin sartzen gara, honek ere ***root*** pasahitza du (aplikazioak duen pasahitza aldatzeko aukeraren bidez aldatu dezakegu).
