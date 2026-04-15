import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

const stops = [
  { id: 'Stop1', label: 'Bodamské jezero' },
  { id: 'Stop2', label: 'Turín přes Lichtenštejnsko' },
  { id: 'Stop3', label: 'Albenga' },
  { id: 'Stop4', label: 'Nice' },
  { id: 'Stop5', label: 'Hyères' },
  { id: 'Stop6', label: 'Camargue' },
  { id: 'Stop7', label: 'Fontvieille' },
  { id: 'Stop8', label: 'Europa Park Rust' },
]

export default function Roadtrip2023() {
  return (
    <>
      <h1 className="main-title">Road trip 2023</h1>
      <h2 className="main-subtitle">Na jih k moři přes Turín, Albenga, Nice, Hyeres, Martigues, Camargue a Avignon</h2>

      <MapMenu mapImage="maptrip2023.png" mapAlt="ilustrační mapa" stops={stops} />

      <TripStop id="Stop1" title="Bodamské jezero" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Bodamske-jezero.jpeg`} alt="Bodamské jezero" />
          <p>Rok se s rokem sešel a opět vyrážíme na pouť, tentokrát na jih a první zastávka je plánována u Bodamského jezera. Vytipovali jsme místo v Park‑Camping Lindau (<CopyCoords coords="47.5373486N, 9.7299964E" />) a zkušeně už jedeme na blind. Bez problému mají místo, je začátek prázdnin. Koupání v jezeře nás tentokrát příliš nenadchlo, ale kompenzovaly to krásné cyklostezky kolem břehu — oddělené od silnice, perfektní pro rodinné vyjížďky.</p>
          <p>Sundali jsme kola a zamířili do Lindau. Počasí nám přálo, na oběd jsme dali thajskou kuchyni v Thung Thong Thai (<CopyCoords coords="47.5465703N, 9.6857336E" />).</p>
          <p>Lindau je malebné bavorské město ležící na ostrově na východním cípu jezera. Město má středověké jádro a bohatou historii: v minulosti bylo svobodným říšským městem (Reichsstadt) ve Svaté říši římské a po napoleonských proměnách bylo začleněno do Bavorska. Mezi nejznámější památky patří přístav s výraznou bílou sochou Bavorské lvice a majákem (Neue Leuchtturm), románsko‑gotické kostely, renesanční a gotické radniční budovy a pečlivě zachované historické centrum. Dvě noci nám stačily a vyrážíme dál.</p>
        </div>
      </TripStop>

      <TripStop id="Stop2" title="Turín přes Lichtenštejnsko" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Turin.jpeg`} alt="Turín" />
          <p>Pokračujeme do Turína, přičemž po cestě plánujeme krátkou zastávku ve Vaduzu, Lichtenštejnsko. Sjíždíme z dálnice směrem do centra, projíždíme městem, ale nedaří se nám najít vhodné místo na zaparkování obytného auta. Nakonec parkujeme na parkovišti u fotbalového stadionu (<CopyCoords coords="47.1390439N, 9.5106667E" />), odkud je to přibližně 15 minut pěšky do centra.</p>
          <p>Ve Vaduzu mě zaujalo malé muzeum, kde je vystaveno Fabergého vejce a měsíční kámen. Kámen mi přišel menší, než jsem očekával, musel jsem si kvůli němu nasadit brýle.</p>
          <p>Historie Lichtenštejnska má spojitost s Českou republikou, knížecí rod Lichtenštejnů si území dnešního státu doslova koupil, v roce 1699 panství Schellenberg a v roce 1712 hrabství Vaduz, aby získal přímou podřízenost císaři a knížecí titul. Lichtenštejnsko je zároveň posledním státním celkem, který zůstal z původní Svaté říše římské v téměř nezměněné podobě, říše zanikla v roce 1806. Armádu zrušili v roce 1868. Podle jedné historky na poslední misi v roce 1866 poslali 80 vojáků a vrátilo se jich 81, prý se k nim cestou přidal italský „přítel".</p>
          <p>Dále pokračujeme do Turína a ubytováváme se na stellplatzu Caio Mario (<CopyCoords coords="45.0286378N, 7.6405375E" />). Místo je velké, přesto tam v době našeho příjezdu stály jen čtyři či pět obytných vozů, zvláštní zejména v letní sezóně. Necítili jsme se tam zcela komfortně. Je ale důrazně doporučeno neparkovat mimo placené stání kvůli riziku návštěvy nezvaného hosta během nepřítomnosti. Příště bych volil placený kemp nebo stellplatz mimo město s dobrým autobusovým spojením do centra. Tramvaj vás však z tohoto místa pohodlně doveze až do centra.</p>
          <p>Hlavním cílem naší prohlídky bylo turínské plátno — bohužel je vystavena pouze kopie, což bylo poměrně zklamání. Den nám ale zpříjemnila fantastická pizza v restauraci MAGNO (<CopyCoords coords="45.0690669N, 7.6927281E" />) a příjemná procházka centrem až k nejdelší italské řece Pád.</p>
          <p>Turín byl prvním hlavním městem sjednocené Itálie (1861–1865), je domovem ikonické Mole Antonelliana, vysoké věže a symbolu města. Dnes v ní sídlí Národní filmové muzeum. Centrum města lemuje téměř 18 kilometrů podloubí. Byla postavena proto, aby se královská rodina Savojských mohla procházet městem i za deště, aniž by si namočila šaty. Město je domovem automobilky FIAT (Fabbrica Italiana Automobili Torino) a také místem vzniku giandujy — směsi čokolády a lískových oříšků, která vznikla během nedostatku kakaa za Napoleona, z níž později vznikla i Nutella.</p>
        </div>
      </TripStop>

      <TripStop id="Stop3" title="Albenga" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Albenga.jpeg`} alt="Albenga" />
          <p>A jedeme dál na jih — plánujeme několik nocí u moře v Itálii a vychutnat si italskou kuchyni. Ubytovali jsme se v kempu Campeggio Italia (<CopyCoords coords="44.0399558N, 8.2183294E" />) — příjemný keming s milou obsluhou. Teče tam pouze studená voda, na teplou se dá dokoupit čip. Zaujalo nás, že do kempu jezdí mnoho stálých hostů, někteří i přes 20 let a více generací, což mu dodává klidnou rodinnou atmosféru. Turín nás nijak zvlášť nenadchl, takže jsme byli rádi za moře a pohodu místa.</p>
          <p>Okolí není ideální na výlety na kole, spíš na procházky a výlety do městečka. Doporučujeme kavárnu a restauraci Coffee Storming (<CopyCoords coords="44.0481097N, 8.2180494E" />) — tam jsme zajeli dvakrát. Výborně se najíte i v restauraci v kempu Brezza Albenga (<CopyCoords coords="44.0389833N, 8.2169244E" />). Naprostým gastronomickým zážitkem byla ovšem italská zmrzlina v La Casa del Gelato (<CopyCoords coords="44.0469325N, 8.2200531E" />) — pistáciová byla nejlepší, co jsem kdy ochutnal. Zajímavé bylo, že podruhé už mi tuto zmrzlinu prodat paní nechtěla a něco se mě snažila vysvětlit. Třikrát jsem jí zopakoval, že tu zmrzlinu fakt chci a jelikož jsme si nerozuměli, tak zakulila svýma černýma italskýma očima, pak je zvedla v sloup a zmrzlinu mě prodala. No a já naznal, že je čas se začít učit italsky.</p>
          <p>Albenga se nazývala Albium Ingaunum a byla důležitým osídlením kmene Ingaunů už v předřímském období. Později se stala římským městem na trase Via Julia Augusta. Ve středověku tu sídlily bohaté rodiny, které stavěly obytné věže, podobně jako v Pise či San Gimignanu. Albenga měla původně desítky věží; dnes jich část stále dominuje panoramatu města. Město a okolí jsou známé produkcí zeleniny, zvláště slavné jsou albengské fialové artyčoky — Carciofo violetta di Albenga.</p>
        </div>
      </TripStop>

      <TripStop id="Stop4" title="Nice" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Nice2.jpeg`} alt="Koupání v Azurovém pobřeží" />
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Nice1.jpeg`} alt="Nice — Promenade des Anglais na kole" />
          <p>Po pobřeží dál — tentokrát do Francie. Plán byl jednoduchý: najít ubytování někde v blízkosti Monaka nebo Nice. Jak to ale v praxi bývá, realita lehce překreslila mapu. U obou těchto měst není po kempu ani parkovišti pro obytná vozidla ani stopy, a tak jsme se ocitli ve Villeneuve-Loubet, kousek za Antibes.</p>
          <p>Kemp La Vieille Ferme (<CopyCoords coords="43.6200722N, 7.1264206E" />) překvapil příjemným zázemím a hlavně polohou — pláž je odtud doslova pár minut pěšky. Ale to nejdůležitější přišlo hned při první návštěvě moře: ten odstín modré. To musíte to vidět na vlastní oči, abyste pochopili, proč si tahle část Středomoří vysloužila přívlastek „azurová".</p>
          <p>Z kempu vede podél pobřeží nenápadná, ale výborně vedená cyklostezka — nesdílená s auty, takže naprosto bezpečná a příjemná. Trasa míří přímo do Nice. Po cestě lze kdykoliv zastavit, slézt dolů k moři a skočit do vody. Žádný spěch, žádné plánování — jen spontánní koupání tam, kde se zrovna zachce.</p>
          <p>Nice samotné pak nabízí přesně to, co se od francouzského přímořského města čeká: nepřeberné množství restaurací, živou atmosféru a promenádu, kde čas plyne vlastním tempem.</p>
          <p>Nice, původně řecká Nikaia založená kolem 4.–3. století př. n. l., je perla Francouzské riviéry známá svou slavnou Promenade des Anglais, malebným starým městem (Vieux Nice) s úzkými barevnými uličkami a trhem Cours Saleya, velkolepým karnevalem, bohatou uměleckou scénou (muzea Matisse a Chagall), a místními specialitami jako socca a salade niçoise; město, které bylo roku 1860 připojeno k Francii, nabízí panoramatické výhledy z Colline du Château, významné letiště Nice Côte d'Azur a unikátní směs francouzských, italských a ligurských vlivů.</p>
        </div>
      </TripStop>

      <TripStop id="Stop5" title="Hyères" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Hyeres1.jpeg`} alt="Hyères — laguny s plameňáky" />
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Hyeres2.jpeg`} alt="Hyères — staré město" />
          <p>A pokračujeme do Hyères, kde hlavní atrakcí jsou plameňáci. Náš preferovaný kemp měl plno, ubytovali jsme se proto v sousedním Camping Bernard (<CopyCoords coords="43.0998897N, 6.1677086E" />). Kemp je zelený a příjemný, ale velmi hlučný — každý večer probíhá animační program pro dospělé, který zní napříč areálem. Restaurace v kempu je vynikající, doporučujeme si večer rezervovat místo.</p>
          <p>Ráno vyrážíme k plameňákům a zkoušíme, zda není někde lepší koupání než u kempu. Našli jsme dlouhou, malebnou pláž (<CopyCoords coords="43.0615906N, 6.1317672E" />) s parkováním na obou koncích; my jsme dorazili na kolech, uprostřed je přehodili přes malou dunu a byli téměř sami. Cestou lze pozorovat hejna plameňáků. Z pláže vede cyklostezka do centra Hyères, ale je částečně sdílená s frekventovanou silnicí. Existují však i klidnější, ale o něco delší trasy. Město samotné je malebné, s úzkými středověkými uličkami a spoustou obchodů, kde by si člověk dokázal představit, že si něco koupí. Ne takové ty turistické cetky. A tak naše dámy nakoupily plážové oblečení.</p>
          <p>Hyères (Hyères‑les‑Palmiers) na Azurovém pobřeží, oblast osídlená už v antice, je proslulé svým mírným mikroklimatem a palmovými alejemi, které v 19. století přilákaly evropskou smetánku; malebné staré město Vieux Hyères s hradními zříceninami a úzkými uličkami kontrastuje s modernistickou Villou Noailles, zatímco v okolí najdete ostrovy Porquerolles a přírodní rezervaci Port‑Cros, soliny a laguny obývané plameňáky — ideální kombinace historie, přírody a středomořského života.</p>
        </div>
      </TripStop>

      <TripStop id="Stop6" title="Camargue" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Camargue2.jpeg`} alt="Camargue — kaktus" />
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Camargue1.jpeg`} alt="Camargue — pláž a útesy" />
          <p>Čeká nás poslední zastávka u pobřeží, než změníme kurz na sever. Místo jsme našli v Camping Marius (<CopyCoords coords="43.3344608N, 5.0669911E" />). Kemp je velmi pěkně upravený, parcely jsou odděleny živými ploty, což zaručuje soukromí. Personál je vstřícný, dokonce kvůli nám ořezali větve, aby jsme mohli vjet s alkovnou. Ze zadní branky se dostanete přímo na útesy a po krátkém sestupu na malebnou písečnou pláž. Za slunečných dní bývá plná, ale podél pobřeží lze najít i klidné oblázkové zátoky. V kempu je také výborná restaurace. Okolí je spíše vhodné pro pěší procházky podél moře než cyklistiku. Oblast je známá svými impozantními calanques. Jsou to unikátní bílé vápencové skalní útvary připomínající úzké fjordy, které se zařezávají hluboko do pevniny, kontrastující s tyrkysově modrou a křišťálově čistou vodou.</p>
          <p>Camargue je deltovitá oblast v jižní Francii u ústí Rhôny, známá svými rozsáhlými mokřady, slanými lagunami a písečnými plážemi. Je to důležité hnízdiště ptactva, zejména růžových plameňáků, domov typických bílých koní camarguais a černých býků, místo tradičního pasteveckého života gardians, s činnostmi jako chov dobytka, rybolov, těžba soli a pěstování rýže. Většina území je chráněna v Parc naturel régional de Camargue a je oblíbená pro pozorování ptáků, jízdu na koni a ekologický turismus.</p>
        </div>
      </TripStop>

      <TripStop id="Stop7" title="Fontvieille" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Macarons.jpeg`} alt="Stop 7" />
          <p>Text zastávky 7.</p>
        </div>
      </TripStop>

      <TripStop id="Stop8" title="Europa Park Rust" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Stop 8" />
          <p>Text zastávky 8.</p>
        </div>
      </TripStop>
    </>
  )
}
