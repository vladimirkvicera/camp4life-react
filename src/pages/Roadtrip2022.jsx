import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

const stops = [
  { id: 'Auvergne', label: 'Auvergne - Clermont-Ferrand' },
  { id: 'DunePyla', label: 'Dune du Pilat' },
  { id: 'LeGrandCrohot', label: 'Le Grand Crohot' },
  { id: 'SoulacSurMer', label: 'Soulac-sur-Mer' },
  { id: 'IleOleron', label: "Ile d'Oléron" },
  { id: 'PevnostBoyard', label: 'Pevnost Boyard' },
  { id: 'Saumur', label: 'Saumur' },
  { id: 'SullySurLoire', label: 'Sully-sur-Loire' },
  { id: 'Legoland', label: 'Legoland' },
]

export default function Roadtrip2022() {
  return (
    <>
      <h1 className="main-title">Road trip 2022</h1>
      <h2 className="main-subtitle">Pobřeží Atlantiku od duny Pyla směr sever k pevnosti Boyard a Île d'Oléron</h2>

      <MapMenu mapImage="maptrip2022.png" mapAlt="ilustrační mapa" stops={stops} />

      <TripStop id="Auvergne" title="Auvergne - Clermont-Ferrand" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Zastávka 1" />
          <p>A opět přišla chvíle, na kterou se vždycky dlouho těšíme. Tentokrát poprvé s obytným vozem typu alkovna, který dětem konečně dopřeje trochu víc soukromí. Cesta je dlouhá, a tak jednu noc trávíme v Německu — na Stellplatzu v Sinsheim (<CopyCoords coords="49.2496261N, 8.8789675E" />). Příjemné místo kousek od dálnice, uprostřed městečka. Měli jsme štěstí — volné místo tam bylo.</p>
          <p>Druhý den vyrážíme do první skutečné destinace: Camping Huttopia Indigo Royat (<CopyCoords coords="45.7584231N, 3.0532747E" />), přímo u Clermont-Ferrand. Lákalo nás francouzské středohoří — kraj neaktivních sopek, kde se příroda zastavila v čase. Kemp leží doslova pod jednou z nich, obklopený zelení na okraji města. Pěšky se vydáváme do centra a odměnou je pohodový oběd v Café Ballainvilliers (<CopyCoords coords="45.7754417N, 3.0866067E" />) s příjemnou obsluhou.</p>
          <p>Celý den jsme strávili ve městě — a tak nějak jsme úplně zapomněli vystoupat na sopku, která na nás čekala jen kousek od kempu. Příště snad!</p>
          <p>O Clermontu se říká, že byl zrozen z ohně, vody a vzduchu — vždyť je obklopen osmdesáti neaktivními sopkami. Město založili původně Keltové, poté je vystřídali Římané. V roce 1623 se zde narodil také proslulý matematik a fyzik Blaise Pascal. Dnešní název skrývá zajímavý příběh: až do roku 1630 šlo o dvě soupeřící města — biskupský Clermont a hraběcí Montferrand, jejichž rivalita trvala staletí, než bylo nařízeno jejich spojení. Architektonickou dominantou je gotická katedrála Notre-Dame de l'Assomption, postavená z tmavého sopečného čediče z nedalekých lomů ve Volvicu. Právě černá barva kamene dává historickému centru nezvyklou a trochu tajemnou atmosféru. Druhou velkou památkou je bazilika Notre-Dame du Port, jedna z nejstarších románských staveb ve Francii a nejcennější sakrální památka celé Auvergne.</p>
          <p>Město je ale také neodmyslitelně spjato se značkou Michelin. V roce 1889 zde bratři Édouard a André Michelinovi přebudovali rodinný podnik a pustili se do výroby pneumatik.</p>
        </div>
      </TripStop>

      <TripStop id="DunePyla" title="Dune du Pilat" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Dune Pyla" />
          <p>Po dvou nocích v Royatu vyrážíme směrem k pobřeží. Naší další zastávkou je něco, co jsme chtěli vidět už dlouho — největší evropská písečná duna, Dune du Pilat.</p>
          <p>Kempy se táhnou podél celé duny, takže zkoušíme štěstí popořadě. První je plný, ve druhém — Camping de la Dune (<CopyCoords coords="44.5817831N, 1.2131347W" />) — nás naštěstí ubytují. Camp je moc hezký, jen příště dáme větší pozor na výběr místa. Večer je blízko společenského prostoru opravdu hlučno.</p>
          <p>A duna samotná? Skutečně obrovský kopec písku. My jsme překvapení, děti jsou absolutně unesené. Přejít ho k moři je pěkná makačka, ale výhled z vrcholu za to stojí — na jedné straně oceán, na druhé nekonečný borový les. A západ slunce... to si musíte vyzkoušet sami. Původní plán počítal se dvěma nocemi, nakonec zůstáváme o několik dní déle.</p>
          <p>Důvodem je i příjemná cyklostezka táhnoucí se podél pobřeží na sever i na jih, navíc prakticky bez lidí. Na jih jsme dojeli na oběd do Chez Aldo (<CopyCoords coords="44.5585531N, 1.2400964W" />) — jedno z nejlepších tuna poké, co jsem kdy měl. Na sever pak leží městečko Arcachon s příjemnou promenádou plnou zajímavých restaurací (<CopyCoords coords="44.6417169N, 1.2044364W" />).</p>
          <p>S dunou se loučíme neradi. Vyrážíme na sever podél pobřeží, ale v hlavách se nám už rodí myšlenka se sem někdy vrátit a pokračovat tentokrát dále na jih. V oblasti tehdy zuřily dost silné požáry — a vůbec nás nenapadlo, co nás tam bude čekat, až přijedeme příště.</p>
          <p>Dune du Pilat leží u vstupu do arcachonské zátoky na jihozápadním pobřeží Francie a je nejvyšší písečnou dunou v Evropě — její výška se pohybuje kolem 103 metrů, délka přes 2,9 kilometru a obsahuje přibližně 55 milionů kubických metrů písku. Geologové odhadují, že duna vznikla před zhruba čtyřmi tisíci lety. Nejde přitom o statický útvar — duna se každoročně posouvá směrem do vnitrozemí průměrně o jeden až pět metrů a na východní straně postupně pohřbívá přilehlý borový les. Její název pochází z gaskonského slova pilàt, což znamená prostě „kopec" nebo „hromada". Dnes patří mezi nejnavštěvovanější přírodní památky celé Francie — každoročně sem přijde téměř dva miliony návštěvníků, čímž se řadí na úroveň zátoky Mont-Saint-Michel.</p>
        </div>
      </TripStop>
      <TripStop id="LeGrandCrohot" title="Le Grand Crohot" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Le Grand Crohot" />
          <p>Dokonale nasyceni dunami vyrážíme na sever. Objíždíme Arcachonský záliv a mapy ukazují zajímavé místo v borových lesích u moře — Le Grand Crohot, kemp Camping Brémontier (<CopyCoords coords="44.7975422N, 1.2256783W" />). Když se ptáme, jestli mají volné místo, ochotný majitel vzal kolo a šel se podívat. V menších kempech to takhle zpravidla funguje: jakmile se dostanete dovnitř, můžete zůstat, jak dlouho chcete. Ráno pak buď zaplatíte další noc či dvě, nebo odjedete. Pokud přijedete dopoledne, nejdřív se podívají, jestli někdo odjel, a podle toho nabídnou místo. Pokud ne, požádají vás, abyste počkali do obvyklé doby odjezdu (cca do 12:00), a pak vám ukáží volná stanoviště. Z toho také samozřejmě plyne, že si v těchto kempech místo dopředu nelze zarezervovat. Tedy né v hlavní sezóně.</p>
          <p>Kemp je opravdu hezký — celý ve stínu borovic. Moře bylo tentokrát divoké, až jsme měli obavy o děti, i když na pláži byla hlídka. Cyklostezky vedou klasicky na sever, na jih i do vnitrozemí, ve stínu lesa a podél pláže. My vyrážíme na jih do Cap Ferret a obědváme v restauraci Pokepoke (<CopyCoords coords="44.7244586N, 1.2022978W" />).</p>
          <p>Postupně zjišťujeme, že pobřeží Gaskoňska tvoří nekonečné bílé pláže přecházející v borové lesy — panuje tu příjemný klid. Gaskoňsko (Gascogne) je historický název oblasti, která se rozkládá většinou na území Nové Akvitánie a části Okcitánie, mezi řekami Garonne a Adour až k úpatí Pyrenejí. Osobně preferuji název Gaskoňsko — kdo by neznal dva slavné gaskoňce, d'Artagnana a Cyrana z Bergeracu? A samozřejmě nesmíme zapomenout na místní gastronomii: kachna a husa v podobě foie gras, confit de canard nebo magret jsou tady povinností.</p>
        </div>
      </TripStop>
      <TripStop id="SoulacSurMer" title="Soulac-sur-Mer" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Soulac-sur-Mer" />
          <p>A pokračujeme dále na sever. Během cesty se nám přihodila nepříjemnost – projíždějící obytný vůz urazil zpětné zrcátko na straně řidiče. V autě typu alkovna není tím pádem prakticky vidět, a navíc se z okénka nedá natáhnout, takže jsem musel improvizovat: posadil jsem spolujezdce na protisměrnou lavici za mnou a udělal z něj „živé" zrcátko. Naštěstí má Fiat hustou servisní síť. Ve Francii mi pomohli v servisu spolupracujícím s Renaultem – byli velmi ochotní. Nejprve nabídli výměnu celého zrcátka, ale objednávka by trvala týden. Nakonec v jejich skladu našli zaprášené dílčí zrcátko, přilepili ho páskou na torzo a bez problémů jsme s tím dojeli dál.</p>
          <p>V Soulac-sur-Mer jsme kempovali v Camping Le Palace (<CopyCoords coords="45.5005631N, 1.1320583W" />). Byl to spíš luxusnější areál, který nás nijak zvlášť neuchvátil – hodně lidí, rozsáhlý aquapark. Bylo to snad jediné místo, kde ráno nabízeli rozpékané pečivo místo čerstvého. Tradičně jsme vyráželi na kole po okolí i na jih, odpoledne strávili na pláži u vln. Oběd jsme si dali v příjemné restauraci O GRAIN DE SEL LE VERDON SUR MER (<CopyCoords coords="45.5661325N, 1.0659342W" />).</p>
          <p>Po dobrém obědě jsem se pustil do opravy světla. Na YouTube jsem našel návod, jak z Ducata světlo vyšroubovat, a při svých manuálních schopnostech jsem byl z výsledku patřičně pyšný.</p>
          <p>Soulac leží na slavné poutní cestě Camino de Santiago (Svatojakubská cesta). Koncem 19. století bylo město velmi módním letoviskem. Bohatí bordeauxští měšťané si zde nechávali stavět nádherné vily ve stylu Belle Époque – mnoho z nich stojí dodnes a dodávají městu romantický, trochu nostalgický charakter. Soulac má velmi vážný problém – atlantské pobřeží zde každoročně ustupuje o 1 až 3 metry. Jednou z největších zajímavostí je Bazilika Notre-Dame de la Fin des Terres (Panny Marie na konci světa). Tento románský kostel ze 12. století byl postupně zcela pohlcen přesypovými dunami – až do 19. století byl ukryt pod vrstvou písku. Teprve v roce 1860 byl vykopán a restaurován. Dnes je zapsán na seznam UNESCO.</p>
        </div>
      </TripStop>
      <TripStop id="IleOleron" title="Ile d'Oléron" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Ile d'Oléron" />
          <p>Naše další zastávka: Île d'Oléron. Do Royanu jedeme trajektem — ušetříme si tím návrat po mostě přes Gironde a získáme víc času na objevování ostrova. Během cesty voláme do kempu Huttopia Les Chênes Verts (<CopyCoords coords="45.8862778N, 1.2736611W" />). Máme dobrou zkušenost s řetězcem Huttopia: když zavoláme během dne a oznámíme příjezd, často nám místo rezervují bezplatně. Tentokrát se nám místo podařilo získat. Ovšem při příjezdu nás překvapili tím, že pro velikost našeho bydlíku místo nemají. Po krátké debatě jsem jim demonstroval, že se na plácek vejdeme — auto trochu zapíchl do křoví a bylo to cajk. Typická „né to se tam nevejde / ale vejde / oups / vidíš" situace s happy endem.</p>
          <p>Na ostrově nás lákaly hlavně pláže a surf. Vyrazili jsme na kolech na sever a na oběd zastavili v restauraci L'Assiette Du Capitaine (<CopyCoords coords="45.9155394N, 1.3306847W" />) — mořské plody vynikající. Většina zátok byla klidná a mělká; místní hlídka nám potvrdila, že na ostrově jsou i skvělé surfové místa. Když jsme se vrátili do kempu, zahlédli jsme surfaře se prknem a vyrazili za ním — chvíli nás obcházel, až nakonec sjel z cyklostezky a dovedl nás na fantastické místo (<CopyCoords coords="45.8697803N, 1.2586803W" />). Klidné moře, a přesto každých pár minut přicházela velká vlna ideální k surfování — prostě pecka. Poté jsme se vrátili pro děti a sledovali rozvernou plážovou scénu: jedna paní se pokoušela vlézt do vody, vlna jí srolovala a vyplivla bez horní části plavek. Vše brala s humorem. Nedaleko kempu je pak mělká, klidná pláž, výborná pro rodiny s dětmi.</p>
          <p>Druhý den jsme projeli ostrov na opačnou stranu. Tam koupání to nebylo tak příjemné, ale krajina a trasa stály za to. Cestou jsme projížděli mezi solnými pánvemi a může se vám po cestě naskytnout stánek s ústřicemi. Oběd jsme si dali v Le Café de la Place (<CopyCoords coords="45.8867625N, 1.1958931W" />). Nakonec jsme pobyt o pár dní prodloužili a udělali z něj pohodové odpočinkové soustředění plné kol, moře a místních pochoutek.</p>
        </div>
      </TripStop>
      <TripStop id="PevnostBoyard" title="Pevnost Boyard" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Pevnost Boyard" />
          <p>Naším dalším cílem byla pevnost Boyard, která stojí severně od ostrova Île d'Oléron. Zastavili jsme v Boyardville, odkud vyplouvají výlety k pevnosti. Místo je turistické, ale najdete tu několik možností denního parkování pro obytné vozy. Ukazatelé vás navedou. Rezervovali jsme si plavbu a nalodili se — cestu zpříjemňovala ikonická hudba známé televizní soutěže. Do pevnosti samotné se bohužel nedá vstoupit, plavby jsou pouze okružní, protože objekt je soukromý a nepřístupný veřejnosti. I tak to byl krásný den a ještě jsme se krátce vylodili na ostrově Île d'Aix.</p>
          <p>Nakonec jsme objevili příjemný stellplatz připojený ke kempu Camping Fort Royer (<CopyCoords coords="45.9617706N, 1.2462789W" />), klidné místo s možností využít sociální zařízení kempu.</p>
          <p>Myšlenka pevnosti vznikla už za vlády Ludvíka XIV., ale realizace byla kvůli technickým a finančním překážkám odkládána. Stavba začala v roce 1801 za Napoleona I. a byla dokončena až kolem roku 1857. Pevnost s oválným půdorysem má masivní kamenné zdi a několik pater s kasárnami, sklady a dělostřeleckými postaveními. Výstavba na mělčině byla technicky náročná a vyžádala obrovské množství kamene a speciálních zakládacích technik. Ačkoliv měla být moderní obrannou stavbou své doby, rychlý vývoj dělostřelectva její vojenský význam snížil; v 19. a na počátku 20. století sloužila i jako posádka, vězení či sklad munice.</p>
        </div>
      </TripStop>
      <TripStop id="Saumur" title="Saumur" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Saumur" />
          <p>Ráno už nabíráme kurz domov. Ale pozor, ještě nekončíme. Další zastávka je v našem oblíbeném řetězci, Huttopia Saumur (<CopyCoords coords="47.2933211N, 0.1419081W" />). Na oběd zastavujeme po cestě na zajímavém místě. Taková ta hodně ospalá vesnice ve vnitrozemí Francie, ale tanhle restaurace byla opravdu skvělá: Auberge de l'Étain (<CopyCoords coords="45.9609375N, 0.8219403W" />). A ty dezerty!</p>
          <p>Kemp Huttopia je jako vždy zahlcen zelení. Do města vede cyklostezka podél řeky La Loire, ovšem z větší části sdílená se silnicí. Podél cesty je pak několik zajímavých míst, kde se dá ochutnat a případně nakoupit víno šumivé či tiché. Prošli jsme město a poobědvali v restauraci Le CRISTAL Restaurant (<CopyCoords coords="47.2600411N, 0.0751100W" />).</p>
          <p>Saumur leží na řece Loire v regionu Pays de la Loire a je součástí údolí řeky Loire zapsaného na seznamu UNESCO. Město je známé svým hradem, vínem, jezdeckou tradicí a podzemními „troglodytickými" prostorem. Hrad Château de Saumur pochází z 10.–11. stol. a byl postupně přestavován, sloužil jako pevnost, sídlo šlechticů i vězení. Dnes je dominantou města a sídlem muzeí. Saumur hrálo strategickou roli díky poloze na Loire, během středověku i novověku tu probíhaly vojenské a obchodní aktivity. Místní stavební materiál – tuffeau (měkký vápencový kámen) formoval architekturu a umožnil vznik rozsáhlých podzemních prostor. Oblast Saumur patří mezi významné vinařské oblasti (AOC Saumur, Saumur‑Champigny), vína jsou převážně z odrůd Chenin Blanc a Cabernet Franc, vyrábí se i Crémant de Loire, šumivé víno.</p>
        </div>
      </TripStop>
      <TripStop id="SullySurLoire" title="Sully-sur-Loire" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Sully-sur-Loire" />
          <p>Naší další zastávkou je Sully‑sur‑Loire. Po cestě se zastavujeme v klášteře Abbaye de Fontevraud; parkujeme na místě pro obytné vozy (<CopyCoords coords="47.1845119N, 0.0494367E" />). Nocovat tu neplánujeme, ale stellplatz nabízí servisní zázemí pro obytná auta.</p>
          <p>Abbaye de Fontevraud patří k nejrozsáhlejším a nejlépe dochovaným cisterciáckým souborům v Evropě. Klášter založil v roce 1101 Robert z Arbrisselu jako společenství sester i mnichů pod vedením jediné převorky — netypický model pro svou dobu. Díky podpoře rodu Anjou‑Plantagenêt klášter rychle získal význam a bohatství, v areálu jsou pohřbeni členové dynastie Plantagenêt, včetně Jindřicha II., Eleonory Akvitánské a jejich syna Richarda Lví srdce. Po zrušení za Francouzské revoluce sloužil objekt například jako věznice. Památkové obnovy proběhly v 19.–20. století. Zajímavé jsou krypty, kapitula, klášterní zahrady a rozsáhlé prostory vytesané z místního tuffeau. Po návštěvě jsme si dali oběd v restauraci Chez Mimie Fontevraud (<CopyCoords coords="47.1819539N, 0.04963E" />) a pokračovali dál.</p>
          <p>Kemp Le Jardin de Sully (<CopyCoords coords="47.7708617N, 2.3627272E" />) je příjemné ubytování u Loiry, jen pár minut pěšky od vodního hradu Château de Sully‑sur‑Loire. Opačným směrem vede nesdílená cyklostezka směrem ke klášteru Fleury ve Saint‑Benoît‑sur‑Loire. Klášter Fleury (Saint‑Benoît‑sur‑Loire) má kořeny v 7.–8. století a dochovaná románská bazilika pochází z 11.–12. století; historicky uchovával relikvie sv. Benedikta a byl významným duchovním centrem.</p>
          <p>V okolí nás zaujala vegetariánská restaurace À la table des célestes (<CopyCoords coords="47.8106247N, 2.3059856E" />), dobrá volba pro lehčí jídlo po dni stráveném památkami.</p>
        </div>
      </TripStop>
      <TripStop id="Legoland" title="Legoland" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Legoland" />
          <p>Po roční pauze se vracíme k modelu zábava nakonec. Poslední zastávkou je LEGOLAND Deutschland v Německu. Park nabízí pouze denní parkování pro obytné vozy (<CopyCoords coords="48.4254781N, 10.2957756E" />), proto přespáváme před cílem na stellplatzu Weilheim an der Teck (<CopyCoords coords="48.6205217N, 9.5351864E" />). Vyřešení platby nám zabralo chvilku — platí se přes aplikaci. Nainstaloval jsem si dvě, než to klaplo. Alternativou je platba na nejbližší benzince, ale ta musí být otevřená při příjezdu. Stellplatz je příjemný a klidný.</p>
          <p>Samotný LEGOLAND je ideální především pro menší děti — očekávali jsme více technických atrakcí a zábavy pro dospělé, navíc bylo horko. Park jsme opustili pozdě odpoledne a vyrazili směr domov.</p>
          <p>Poslední noc trávíme na Festplatz Schwandorf (<CopyCoords coords="49.3318547N, 12.1020947E" />). To, co vypadalo jako příjemný plácek u řeky bylo vykoupeno množstvím komárů a vajglů na zemi. No co už no. Jdeme spát.</p>
        </div>
      </TripStop>
    </>
  )
}
