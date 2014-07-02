Orain arte egin dugunarekin C:\ElkarBackup karpetan behar den software guztia utzi dugu gero B izeneko unitatean C unitatearen snapshot bat muntatu ahal izateko. B unitate hau ikusiko duen bakarra rsnync deamon edo zerbitzua izango da, eta kopia bukatzen denean  snapshot-a eta B unitatea desagertu egingo dira.

ElkarBackup zerbitzaritik ezaugarri hau erabili nahi dugunez Windows bezero zehatz honekin, ***TriggerSnapshotGenerateOrDelete.sh*** scripta aktibatu behar diogu bezero mailan PRE eta POST moduan (bai, bietan).

Exekuzioan akatsen bat emango balu, aholkatzen duguna zera da, konfigurazioan egon daitezkeen beste akats batzuk baztertzeko, kopia probatzea baina script hauek desgaituta. Kopia ondo egiten duela ikusten dugunean, snapshot-ak erabiltzeko scripta berriro aktibatuko genuke bezero mailan PRE eta POST moduan.

Akats tipiko bat zera da, ***SvcCWRSYNC*** erabiltzaileak Windows bezeroan ez izatea baimenik snapshot-ak kudeatzeko. Egin ditugun probetan ez zen nahikoa ***Segurtasun kopiak egiteko baimenduen*** taldean egotea, ondo funtzionatu ahal izateko ***Administratzaileen*** taldean sartu behar izan dugu.
