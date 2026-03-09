import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

const stops = [
  { id: 'Auvergne', label: 'Auvergne - Clermont-Ferrand' },
  { id: 'DunePyla', label: 'Dune du Pilat' },
]

export default function Roadtrip2022() {
  return (
    <>
      <h1 className="main-title">Road trip 2022</h1>
      <h2 className="main-subtitle">Pobřeží Atlantiku od duny Pyla směr sever k pevnosti Boyard a Île d'Oléron</h2>

      <MapMenu mapImage="maptrip2022.png" mapAlt="ilustrační mapa" stops={stops} />

      <TripStop id="Auvergne" title="Auvergne - Clermont-Ferrand" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src="/images/Clip2Comic-macarons-brown.jpeg" alt="Zastávka 1" />
          <p>A opět přišla chvíle, na kterou se vždycky dlouho těšíme. Tentokrát poprvé s obytným vozem typu alkovna, který dětem konečně dopřeje trochu víc soukromí. Cesta je dlouhá, a tak jednu noc trávíme v Německu — na Stellplatzu v Sinsheim (<CopyCoords coords="49.2496261N, 8.8789675E" />). Příjemné místo kousek od dálnice, uprostřed městečka. Měli jsme štěstí — volné místo tam bylo.</p>
          <p>Druhý den vyrážíme do první skutečné destinace: Camping Huttopia Indigo Royat (<CopyCoords coords="45.7584231N, 3.0532747E" />), přímo u Clermont-Ferrand. Lákalo nás francouzské středohoří — kraj neaktivních sopek, kde se příroda zastavila v čase. Kemp leží doslova pod jednou z nich, obklopený zelení na okraji města. Pěšky se vydáváme do centra a odměnou je pohodový oběd v Café Ballainvilliers (<CopyCoords coords="45.7754417N, 3.0866067E" />) s příjemnou obsluhou.</p>
          <p>Celý den jsme strávili ve městě — a tak nějak jsme úplně zapomněli vystoupat na sopku, která na nás čekala jen kousek od kempu. Příště snad!</p>
          <p>O Clermontu se říká, že byl zrozen z ohně, vody a vzduchu — vždyť je obklopen osmdesáti neaktivními sopkami. Město založili původně Keltové, poté je vystřídali Římané. V roce 1623 se zde narodil také proslulý matematik a fyzik Blaise Pascal. Dnešní název skrývá zajímavý příběh: až do roku 1630 šlo o dvě soupeřící města — biskupský Clermont a hraběcí Montferrand, jejichž rivalita trvala staletí, než bylo nařízeno jejich spojení. Architektonickou dominantou je gotická katedrála Notre-Dame de l'Assomption, postavená z tmavého sopečného čediče z nedalekých lomů ve Volvicu. Právě černá barva kamene dává historickému centru nezvyklou a trochu tajemnou atmosféru. Druhou velkou památkou je bazilika Notre-Dame du Port, jedna z nejstarších románských staveb ve Francii a nejcennější sakrální památka celé Auvergne.</p>
          <p>Město je ale také neodmyslitelně spjato se značkou Michelin. V roce 1889 zde bratři Édouard a André Michelinovi přebudovali rodinný podnik a pustili se do výroby pneumatik.</p>
        </div>
      </TripStop>

      <TripStop id="DunePyla" title="Dune du Pilat" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src="/images/Clip2Comic-macarons-brown.jpeg" alt="Dune Pyla" />
          <p>Po dvou nocích v Royatu vyrážíme směrem k pobřeží. Naší další zastávkou je něco, co jsme chtěli vidět už dlouho — největší evropská písečná duna, Dune du Pilat.</p>
          <p>Kempy se táhnou podél celé duny, takže zkoušíme štěstí popořadě. První je plný, ve druhém — Camping de la Dune (<CopyCoords coords="44.5817831N, 1.2131347W" />) — nás naštěstí ubytují. Camp je moc hezký, jen příště dáme větší pozor na výběr místa. Večer je blízko společenského prostoru opravdu hlučno.</p>
          <p>A duna samotná? Skutečně obrovský kopec písku. My jsme překvapení, děti jsou absolutně unesené. Přejít ho k moři je pěkná makačka, ale výhled z vrcholu za to stojí — na jedné straně oceán, na druhé nekonečný borový les. A západ slunce... to si musíte vyzkoušet sami. Původní plán počítal se dvěma nocemi, nakonec zůstáváme o několik dní déle.</p>
          <p>Důvodem je i příjemná cyklostezka táhnoucí se podél pobřeží na sever i na jih, navíc prakticky bez lidí. Na jih jsme dojeli na oběd do Chez Aldo (<CopyCoords coords="44.5585531N, 1.2400964W" />) — jedno z nejlepších tuna poké, co jsem kdy měl. Na sever pak leží městečko Arcachon s příjemnou promenádou plnou zajímavých restaurací (<CopyCoords coords="44.6417169N, 1.2044364W" />).</p>
          <p>S dunou se loučíme neradi. Vyrážíme na sever podél pobřeží, ale v hlavách se nám už rodí myšlenka se sem někdy vrátit a pokračovat tentokrát dále na jih. V oblasti tehdy zuřily dost silné požáry — a vůbec nás nenapadlo, co nás tam bude čekat, až přijedeme příště.</p>
          <p>Dune du Pilat leží u vstupu do arcachonské zátoky na jihozápadním pobřeží Francie a je nejvyšší písečnou dunou v Evropě — její výška se pohybuje kolem 103 metrů, délka přes 2,9 kilometru a obsahuje přibližně 55 milionů kubických metrů písku. Geologové odhadují, že duna vznikla před zhruba čtyřmi tisíci lety. Nejde přitom o statický útvar — duna se každoročně posouvá směrem do vnitrozemí průměrně o jeden až pět metrů a na východní straně postupně pohřbívá přilehlý borový les. Její název pochází z gaskonského slova pilàt, což znamená prostě „kopec" nebo „hromada". Dnes patří mezi nejnavštěvovanější přírodní památky celé Francie — každoročně sem přijde téměř dva miliony návštěvníků, čímž se řadí na úroveň zátoky Mont-Saint-Michel.</p>
        </div>
      </TripStop>
    </>
  )
}
