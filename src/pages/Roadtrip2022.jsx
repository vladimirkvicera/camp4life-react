import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

const stops = [
  { id: 'Auvergne', label: 'Auvergne - Clermont-Ferrand' },
  { id: 'DunePyla', label: 'Dune du Pilat' },
  { id: 'LeGrandCrohot', label: 'Le Grand Crohot' },
  { id: 'SoulacSurMer', label: 'Soulac-sur-Mer' },
  { id: 'IleOleron', label: "Ile d'Oléron" },
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
          <p></p>
        </div>
      </TripStop>
    </>
  )
}
