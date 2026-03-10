import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

const stops = [
  { id: 'Strasbourg', label: 'Strasbourg' },
  { id: 'Champagne', label: 'Champagne' },
  { id: 'Paris', label: 'Paříž' },
  { id: 'HNorm', label: 'Horní Normandie' },
  { id: 'DNorm', label: 'Dolní Normandie' },
  { id: 'Michel', label: 'Mont-Saint-Michel' },
  { id: 'Malo', label: 'Saint-Malo' },
  { id: 'Britanny', label: 'Bretaň' },
  { id: 'Chenanceau', label: 'Chenanceau' },
  { id: 'Chambord', label: 'Chambord' },
]

export default function Roadtrip2021() {
  return (
    <>
      <h1 className="main-title">Road trip 2021</h1>
      <h2 className="main-subtitle">Strasbourg, Champagne, Paříž, Normandie, skoro Bretaň a zámky na Loiře</h2>

      <MapMenu mapImage="maptrip2021.jpg" mapAlt="ilustrační mapa" stops={stops} />

      <TripStop id="Strasbourg" title="Strasbourg" color={false}>
        <div className="stop__2pictures">
          <div className="stop__2act-pictures">
            <img className="stop__img stop__img--hidden" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Macarons.jpeg`} alt="makronky" />
            <img className="stop__img" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Strasbourg-bikes.jpeg`} alt="Strasbourg na kole" />
          </div>
          <p>Asi nejnudnější část cesty přes Německo máme za sebou. Kolem sedmé hodiny večer jsme dorazili do kempu ve Strasbourgu, kde jsme se ubytovali na dvě noci (<CopyCoords coords="48.5744189N, 7.7181089E" />). Kemp patří ke známému řetězci CityKemp, který úzce spolupracuje s naším oblíbeným řetězcem Huttopia. Před kempem vede nesdílená cyklostezka, která vás zavede přímo do centra města.</p>
          <p>Strávili jsme odpoledne procházkou historickým centrem města – Grande Île (Staré Město) – a navštívili gotickou Katedrálu Notre-Dame de Strasbourg. Mimochodem, většina kostelů a katedrál ve Francii nosí jméno Notre Dame, nejen ta, která shořela v Paříži.</p>
          <p>Nejkrásnější část procházky byla oblast La Petite France (Malá Francie) s vodními kanály, zvedacími mosty a starými hrázděnými domy. U katedrály jsme si dali oběd a poprvé ochutnali makronky – měli jsme z nich opravdu radost, protože to značilo, že jsme konečně ve Francii. Následoval příjemný oběd v Rumors Pâtisserie (<CopyCoords coords="48.5821656N, 7.7419700E" />).</p>
          <p>Co se týká ubytování v kempu, tak rezervace je doporučena – za poplatek, nebo je možné zavolat v den příjezdu, a někdy vám poplatek nebudou účtovat. Pokud nemají volné místo a nemáte rezervaci, nabídnou vám přespání na jejich menším parkovišti před kempem – i to je zpoplatněno.</p>
          <p>Nejlepší zážitek z jídla? No přece ty makronky!</p>
        </div>
      </TripStop>

      <TripStop id="Champagne" title="Champagne" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Champagne.jpeg`} alt="vinice Champagne" />
          <p>Naše druhá zastávka nás zavedla do kempu La Sauleraie (<CopyCoords coords="48.1990069N, 4.6315339E" />), který provozuje rodina <a className="random-ref" href="https://www.champagne-perron-beauvineau.com">Perron-Beauvineau</a>, výrobce šampaňského. Každý večer tu pořádají malé ochutnávky, kdy servírují tři různé vzorky, a zároveň nabízí zajímavé povídání o výrobě šampaňského.</p>
          <p>My jsme odtud odnesli šest lahví, a dodnes vzpomínáme na jednu, kterou považujeme za nejlepší šampaňské, jaké jsme kdy pili. I když mám raději brut nebo brut natur, ta jejich extra dry byla skutečná pecka. A nenechte se mýlit – extra dry je sladší než brut.</p>
          <p>V této oblasti je všude spousta cedulí lákajících podívat se do „sklepů" a nakoupit si přímo od zdroje.</p>
          <p>Kemp je velmi krásný, nabízí jen několik míst u jezírka obklopeného zelení. Je to taková malá oáza klidu. Není zde žádný bazén, obchod ani recepce. Nachází se mimo zástavbu, u vinic, a k ubytování je potřeba nejdříve dojet do centra vesnice za majiteli, případně se domluvit po telefonu.</p>
          <p>Místo je opravdu kouzelné – vyrazili jsme na procházku mezi vinicemi po kopcích a bylo zamračené počasí, což celé scenérii dodalo poetický nádech. Porovnávala jsem zdejší vinohrady s jihomoravskými a ty místní jsou nižší, ale velmi bujné.</p>
          <p>Strávili jsme tu pouze jednu noc, věnovali jsme se jen „tastingu" a procházce vinicemi, a poté jsme pokračovali dál směrem na Paříž.</p>
          <p>Než jsme odjeli, zastavili jsme se na oběd v doporučené restauraci Le Val Moret (<CopyCoords coords="48.1765564N, 4.4330236E" />). Měli jsme skvělé jídlo, krásné prostředí a bezproblémové parkování pro obytný vůz.</p>
        </div>
      </TripStop>

      <TripStop id="Paris" title="Paříž" color={false}>
        <div className="stop__2pictures">
          <div className="stop__2act-pictures">
            <img className="stop__img" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Paris-bikes-new.jpeg`} alt="Paříž na kole" />
            <img className="stop__img stop__img--hidden" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Moulin-Rouge.jpeg`} alt="Moulin Rouge" />
          </div>
          <p>Strávili jsme dvě noci v kempu Camping de Paris, který se nachází na břehu Seiny v Buloňském lesíku (<CopyCoords coords="48.8698217N, 2.2364244E" />). Z kempu jezdí každou hodinu jejich autobus do centra města a zpět. Nicméně kdo potřebuje bus, když je cyklostezka přímo u vchodu.</p>
          <p>Na jednu stranu vede přes řeku do moderní čtvrti La Défense, na druhou zase lesíkem do historického centra. Jen děti se ptaly, proč v lese stojí paní a slečny. Jenže Paříž je pro cyklo stvořená – z lesíku se dá přímo vyjet na bulvár pod Vítězným obloukem.</p>
          <p>My jsme zvládli celou okružní jízdu – projeli jsme kolem Louvru, podél Seiny, kolem Notre-Dame, přes náměstí Svornosti a pod Eiffelovkou. Vyfuněli jsme i na kopec k bazilice Sacré-Cœur. Do Louvru ani na Eiffelovku už jsme nešli, protože jsme tam byli naposledy při naší první cestě v roce 2019.</p>
          <p>Při cestě po městě hledáme typické pařížské bistro, abychom si dali dětmi oblíbený sendvič croque monsieur nebo jeho dámskou variantu croque madame, typickou francouzskou, či spíše pařížskou pochoutku.</p>
        </div>
      </TripStop>

      <TripStop id="HNorm" title="Rouen a horní Normandie" color={true}>
        <div className="stop__2pictures">
          <div className="stop__2act-pictures">
            <img className="stop__img stop__img--hidden" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Normandy-Scenery-lighthouse.jpeg`} alt="Normandie scenérie" />
            <img className="stop__img" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Normandy-Moules.jpeg`} alt="slávky" />
          </div>
          <p>Z Paříže jsme vyjeli směr Normandie k Atlantiku. Zastavili jsme na pár hodin v Rouenu na příhodně postaveném parkovišti pro obytné vozy na říčním ostrůvku (<CopyCoords coords="49.4301150N, 1.1058119E" />), podívat se na katedrálu a památník Johanky z Arku, která tady byla upálena. Upřímně, děti to vůbec nezajímalo. Můj zážitek z Rouenu: oběd přímo před katedrálou, takže úžasný výhled … a ten salát byl taky v pohodě.</p>
          <p>Dojeli jsme navečer přímo k Atlantiku a zaparkovali na Stellplatzu kousek od majáku (<CopyCoords coords="49.8724289N, 0.7088769E" />). Je to spíše parkoviště, nejde roztáhnout markýza, večeře proběhla za autem na trávě. Ale to místo je fantastické. Pod kolmým křídovým útesem slyšíte řvoucí racky a dunící oceán. Druhý den se děti máchaly v příšerně studeném oceánu, sami. Tím vyprovokovali usměvavou pobřežní hlídku, aby si sedli ven a koukali na ně. A začala gastronomická série mušlí na všechny způsoby - tour de les moules. Nechápu, proč to podávají s hranolkama, když s pečivem by to bylo lepší. Dospělí dostanou velký hrnec a děti malý. Nejradši je mám s omáčkou s modrým sýrem. A klasické marinieres? No, jsou to takové špagety s kečupem - celkem dobré, ale je mnoho lepších variací.</p>
          <p>Tady u majáku v městečku Saint-Valery-en-Caux bylo moc pěkně. Měli tu ráno kouzelný rybí trh, krásně tu fouká, je to takové svěží. No a ty mušle v poledne v restauraci Le Bains (<CopyCoords coords="49.8687878N, 0.7126925E" />)!</p>
          <p>Při přejezdu z horní do dolní Normandie jsme jeli přes deltu Seiny, to je úžasná podívaná.</p>
        </div>
      </TripStop>

      <TripStop id="DNorm" title="Dolní Normandie" color={false}>
        <div className="stop__2pictures">
          <div className="stop__2act-pictures">
            <img className="stop__img" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Screaming-Eagles.jpeg`} alt="Pomník Screaming Eagles" />
            <img className="stop__img stop__img--hidden" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Normandy-Cemetery.jpeg`} alt="Vylodění v Normandii US hřbitov" />
          </div>
          <p>Pokračujeme směrem do oblasti vylodění v Normandii. Hned po překročení Seiny jsme se ještě na noc ubytovali v malém městečku Honfleur, které působí jako ze středověku – s malebným přístavem a množstvím restaurací. Je dokonce zachyceno na pohledech a malbách od malířů impresionismu jako Monet či Boudin. Přístav byl také výchozím bodem pro výpravy do Nového světa.</p>
          <p>Nachází se zde velký stellplatz (<CopyCoords coords="49.4191181N, 0.2433619E" />) a je to jen pár minut pěšky od přístavu.</p>
          <p>Naším cílem byla pláž Utah, avšak počasí nám příliš nepřálo – pršelo a bylo chladno. Ubytovali jsme se v kempu Le Utah Beach (<CopyCoords coords="49.4190639N, 1.1827006W" />), který je velmi pěkný a má i bazén. Od kempu je to k pláži i k památníku vylodění jen na krátkou procházku.</p>
          <p>Prošli jsme si památník, koupili jsme dětské tričko se řvoucím orlem legendární 101. výsadkové divize a pak jsme zamířili do místní restaurace ve stylu Amerika – La Roosevelt (<CopyCoords coords="49.4155781N, 1.1759622W" />). I zde bylo na stole alespoň jedno jídlo s mušlemi.</p>
          <p>Před odjezdem z Normandie jsme se ještě vrátili na pláž Omaha, kterou jsme minuli a která rozhodně stojí za zastávku. A vyrážíme dál směr Bretaň.</p>
        </div>
      </TripStop>

      <TripStop id="Michel" title="Mont-Saint-Michel" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Mont-St-Michel.jpeg`} alt="Klášter Mont-Saint-Michel" />
          <p>Večer jsme dorazili k Mont-Saint-Michel. K dispozici je velké parkoviště, jehož část je vyhrazena pro obytné vozy (<CopyCoords coords="48.6087247N, 1.5051819W" />) a umožňuje i přenocování, což je ideální pro včasné prohlídky této ikonické destinace. Lze tu i doplnit vodu a vylít odpady. Od stellplatzu je to pouhá krátká procházka k ostrovu.</p>
          <p>Mont-Saint-Michel je ostrovní komplex a jedno z nejnavštěvovanějších turistických míst Francie. Tento ostrov je proslulý svým impozantním klášterem, který se tyčí na vrcholu skalnatého vrchu a je obklopený starobylými hradbami, úzkými uličkami a kouzelnými zákoutími.</p>
          <p>Historie Mont-Saint-Michel sahá až do 8. století, kdy zde bylo založeno poutní místo. Během staletí se z něj stalo významné církevní, vojenské a hospodářské centrum, což je patrné na zachovalé architektuře a pevnostech.</p>
        </div>
      </TripStop>

      <TripStop id="Malo" title="Saint-Malo" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-San-Malo.jpeg`} alt="San Malo" />
          <p>Následuje denní zastávka v historickém přístavním městě na pobřeží, známé svými mohutnými hradbami, starým městem a bohatou námořní historií. Město se nachází na ostrově a je obklopeno pevninou s pouze několika úzkými přístupovými cestami.</p>
          <p>Staré město, nazývané také Intra-Muros, je opevněné a plné úzkých uliček, malých náměstí, historických budov a kostelů. Do města vedou impozantní hradby, které nabízí nádherný výhled na oceán a okolní krajinu.</p>
          <p>Saint-Malo je proslulé jako místo, odkud vyráželi slavní mořeplavci, včetně Frédérica de la Motte-Picqueta, či pirátů, kteří zde v minulosti operovali.</p>
          <p>I přestože je město poměrně plné turistů, našli jsme si v místním ruchu výtečnou restauraci Fidelis (<CopyCoords coords="48.6500194N, 2.0234117W" />).</p>
          <p>Parkování obytného vozu bylo také bez problémů, celkem blízko historického centra. Několik parkovišť je vyznačeno na <a className="random-ref" href="https://park4night.com/en">park4night</a>.</p>
        </div>
      </TripStop>

      <TripStop id="Britanny" title="Bretaň" color={true}>
        <div className="stop__2pictures">
          <div className="stop__2act-pictures">
            <img className="stop__img" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Bay-Low-Tide.jpeg`} alt="Bretaň odliv" />
            <img className="stop__img stop__img--hidden" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Brittany-Bay-Walk.jpeg`} alt="Bretaň pobřeží" />
          </div>
          <p>Pokračujeme podél severního pobřeží Bretaně. Po několika neúspěšných telefonátech s dotazem na volné místo v kempu jsme konečně uspěli v kempu Les 4 Vaulx – malém 2**, kousek od Saint-Cast-le-Guildo, ukrytém v odlehlé zátoce (<CopyCoords coords="48.5938444N, 2.2263117W" />). Měl zvláštní atmosféru, skoro jako kdyby tady dávaly lišky dobrou noc. Zpočátku to nevypadalo nijak zvlášť, ale toto místo jsme si nějak postupně zamilovali.</p>
          <p>Hlavním zážitkem byla nádherná procházka na sever po cestě kopírující pobřeží – částečně lesem, zčásti po skaliscích s výhledem na oceán a zátoky. A právě při této cestě přišel odliv a odkryl pod hladinou poklady – sádky na ústřice a slávky. Ústřice se chovají na speciálních paletách, zatímco slávky na dřevěných kůlech. Jakmile voda úplně opadla, začalo se kolem nich hemžit množství loděk na kolečkách – pravděpodobně šlo o sklizeň nebo péči o sádky. Byla to nádherná podívaná. Zhruba po 3 km cesty na vás pak čekala příjemná pláž a koupání (pro děti, ty vlezou do čehokoli, pro nás to bylo studené).</p>
          <p>Když jsme se vraceli zpět do kempu, vydali jsme se podívat na sádky. A najednou začal příliv. Je neuvěřitelné, jakou rychlostí voda stoupá – změřili jsme to, během dvou minut jsme ze suché nohy měli kotníky ponořené ve vodě. No on to fičák být musí, protože rozdíl hladiny odlivu a přílivu je tu 12 výškových metrů. Lodě na kolečkách prchaly z vody. U kempu rybář prodával čerstvé ústřice a slávky přímo na místě. Koupili jsme si pár ústřic. Rybář nám poradil, jak se dostat dovnitř a já ty chudinky nasilím nůžkami vypáčil. Nutno dodat, že pro děti to pochoutka rozhodně není.</p>
          <p>Všiml jsem si, že základní výbava každého obytného vozu obsahuje hrnec na slávky, venkovní plynový vařič a lopatku – a při odlivu vyrážejí na pláž cestovatelé s lopatkou pro večeři. Následně to pak na venkovním vařiči připravují.</p>
          <p>V té době jsme si uvědomili, jak jsme daleko od Česka a že bychom nestihli projet celou Bretaň, ani jí věnovat tolik času, kolik by si zasloužila. Za slib, že se sem určitě někdy zase vrátíme, jsem souhlasila se zámky na Loiře, které jsou na cestě zpět.</p>
        </div>
      </TripStop>

      <TripStop id="Chenanceau" title="Zámek Chenonceau" color={false}>
        <div className="stop__2pictures">
          <div className="stop__2act-pictures">
            <img className="stop__img" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Chenanceau.jpeg`} alt="Zámek Chenanceau" />
            <img className="stop__img stop__img--hidden" src={`${import.meta.env.BASE_URL}images/Clip2Comic-paddleboard-Cher.jpeg`} alt="Paddleboard na řece Cher" />
          </div>
          <p>Z chladné Bretaně, v ponožkách a mikině, jsme dorazili do teplejšího vnitrozemí s teplotou kolem 30 stupňů. Kemp Le Moulin Fort (<CopyCoords coords="47.3274153N, 1.0875033E" />) patří mezi nejlepší, kde jsme zatím byli. Při telefonické domluvě jsme sice narazili na menší problém—začali jsme mluvit anglicky, a telefon nám zavěsili. Pár základních frází ve francouzštině však situaci nakonec vyřešilo: domluvili jsme se na komunikaci mailem.</p>
          <p>Kemp se nachází na břehu říčky Cher, která je přítokem Loiry, a nedaleko od zámku Chenonceau. Řeka Cher má oproti Loiře velkou výhodu, umožňuje koupání! Plácek jsme měli přímo u vody, nafoukli paddle board a jeli na něm přímo pod hlavní sál zámku. Bylo to fantastické.</p>
          <p>V kempu si můžete zakoupit vynikající místní víno a luxusní dezerty. Nejlepší éclair, jaký jsem kdy jedla, mi zůstal v paměti. Možná to všechno jen dotvářela magická atmosféra… Ale skutečně tam bylo nádherně. Jídlo v restauraci přímo v kempu bylo také velmi dobré.</p>
          <p>Zámek Chenonceau je jedním z nejkrásnějších a nejznámějších francouzských zámků. Tento historický palác je známý svou unikátní architekturou, která přesahuje řeku, a nádhernými zahradami, jež ho obklopují. Je často nazýván „zámkem dam" kvůli ženským postavám, které významně ovlivnily jeho historii a vzhled, například Diane de Poitiers a Catherine de Medici.</p>
          <p>Do zámku je nutné koupit vstupenky s předstihem na určitý čas, jsou tam na to automaty. My si koupili vstupenky a šli se zeptat, jestli můžeme jít hned a ne až odpoledne. Problém v tom nebyl. Prohlídka je bez průvodce, ostatně jako ve většině památek ve Francii.</p>
        </div>
      </TripStop>

      <TripStop id="Chambord" title="Amboise a Chambord" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-picnic-Chambord.jpeg`} alt="Piknik u zámku Chambord" />
          <p>Na cestě do naší poslední zastávky jsme se zastavili ve městě Amboise. Parkování bylo bez problémů na parkovišti podél silnice kousek od centra (<CopyCoords coords="47.4098831N, 0.9729150E" />). Na místním trhu probíhala ochutnávka vín od místních vinařů, a tak jsme si tentokrát odvezli domů celou bedýnku. Samozřejmě jsme si také zopakovali oblíbené makronky.</p>
          <p>Královský zámek Amboise je malebné město na řece Loiře, které je domovem Château Royal d'Amboise, královského zámku, kde pobývali francouzští panovníci. Zámek nabízí úchvatné výhledy na řeku a město. Další zajímavostí je Château du Clos Lucé, poslední domov Leonarda da Vinciho, kde můžete vidět jeho vynálezy a díla.</p>
          <p>Naší poslední zastávkou byl kemp ze sítě Huttopia – Les Chateaux (<CopyCoords coords="47.5491408N, 1.5355417E" />). Z něj jsme na kolech lesní cyklostezkou podnikli výpravu k impozantnímu zámku Chambord, i celou rozsáhlou zahradu jsme projeli na kole, včetně pohodového pikniku s výhledem na samotný zámek.</p>
          <p>Château de Chambord je jedním z největších a nejimpozantnějších zámků v oblasti Loire. Zámek je mistrovským dílem renesanční architektury a je obklopen rozsáhlým parkem, ideálním pro procházky, cyklo a obdivování přírody.</p>
          <p>No, a pak už směr domov … strávili jsme jednu noc na pěkném zeleném stellplatzu (<CopyCoords coords="49.4694739N, 8.1676103E" />) kousek od dálnice v Německu.</p>
        </div>
      </TripStop>
    </>
  )
}
