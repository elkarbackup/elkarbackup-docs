# Politikak

Orain arte egin dugunarekin lortu dugu kopiak egitea, baina segurtasun kopia batean gauza gehiago ere zehaztu behar dira:
- Programazioa: Noiz egingo dira kopiak ?
- Erretentzioa: Kopia zaharrak noiz arte mantendu behar dira ?
- Maiztasun ezberdinak nahastu behar dira ? Egunean zehar, egunero, astero, edo hileroko kopiak izan behar ditugu ?

Gauza guzti hauek zehazteko ***politikak*** erabiliko ditugu (orain arteko adibideetan ***Default Policy*** izenekoa erabili dugu). ElkarBackup aplikazioa  rsnapshot softwarean oinarritzen denez merezi du “***Oinarrien errepaso txiki bat: Rsnapshot***“ atalean azaltzen dena errepasatzea kontzeptuak argi izateko. Laster egingo dugu.

Aplikazioak politika ezberdinak definitzeko aukera ematen digu. Lan bakoitzari politika bat esleituko diogu, eta politika bakoitza lan ezberdinetan berrerabiltzeko aukera izango digu.

Hauek dira politika berri bat gehitzerakoan eman beharko ditugun datuak:

- Izena eta Azalpena: testu libreko eremuak

- Baztertu: Kopiatik baztertuko ditugun fitxategien patroiak.

- Sartu: Kopian sartuko ditugun fitxategien patroiak, nahiz eta Baztertu eremuan jarritako patroiarekin bat egin. Adibidez, demagun orokorrean ez ditugula bideo fitxategiak kopian sartu nahi, eta horretarako  ****.avi***  jarri dugula ***Baztertu*** eremuan, baina zuzendariaren karpetan dauden avi fitxategiak derrigorrez kopiatu behar direla. Kasu honetan ***Sartu*** eremuan ***zuzendaria\*.avi*** jarriko genuke salbuespena gauzatzeko.

- Lehenengo sinkronizatu: rsnapshot programak kopia berri bat egiten duenean ordurarte dauden karpeten errotazioa egin eta karpeta baten (adibidez Daily.0) gauzatzen du azken kopia, ***aldatuak izan diren*** nahiz ***aldatuak izan ez diren*** fitxategiak karpeta bakar batean uzten dituelarik. Aldatu ez diren fitxategiak ***hardlink*** bitartez estekatzen ditu, eta horrela diskoan ez dute erabilitako espazioa bikoizten.

 Prozesu honek denbora eskatzen dio, karpeta berrian fitxategi bakoitza kokatzerakoan kopia berri bat den edo hardlink bidez estekatu behar duen erabaki behar duelako, eta prozesu guztia hasi eta amaitu bitartean, urruneko bezeroa berari atenditzen dago. Kasu batzuetan ez du garrantzirik izango, baina beste batzuetan garrantzitsua izango da bezeroa ahalik eta azkarren libre uztea. Kasu hauetan ***Lehenengo sinkronizatu aukeratu dezakegu***.

 Hau aukeratzen dugunean, rsnapshot-ek egingo duen lehenengoko gauza zera izango da, ***.sync*** izeneko karpeta batean bezeroaren karpeta osoa sinkronizatzea, bezeroa ahalik eta azkarren libre uzteko. Prozesu hau bukatzen denean, eta bezeroa libre utzi ondoren, azkeneko kopian (adibidez Daily.0) zeuden fitxategiak ***.sync*** karpetan dauzkan fitxategiekin alderatzen hasiko da, eta estruktura berri osoa eraikiko du, behar diren hardlink-ak jarriz.

 Beraz, eta izenak dioen logikari erantzunez, hau aukeratzen dugunean beste ezer egin aurretik sinkronizazio oso bat egingo du, eta ondoren kapetak osatzen eta behar diren errotazioak egiten hasiko da.
