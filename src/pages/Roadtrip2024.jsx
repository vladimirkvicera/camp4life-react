import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

// Stops for the in-page nav. Add a new object here when adding a new stop below.
const stops = [
  { id: 'Zastavka1', label: 'Kirchheim' },
  { id: 'Zastavka2', label: 'Paříž' },
  { id: 'Zastavka3', label: 'La Trinité sur Mer' },
  { id: 'Zastavka4', label: 'Notre Dame de Monts' },
  { id: 'Zastavka5', label: 'Île de Ré' },
  { id: 'Zastavka6', label: 'Asterix park' },
]

export default function Roadtrip2024() {
  return (
    <>
      <h1 className="main-title">Road trip 2024</h1>
      <h2 className="main-subtitle">Paříž, Carnac, pobřeží Atlantiku směr jih na Île de Ré</h2>

      <MapMenu
        mapImage="roadtrip2024-mapa.png"
        mapAlt="ilustrační mapa road tripu 2024"
        stops={stops}
      />

      <TripStop id="Zastavka1" title="Kirchheim" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Kirchheim.jpeg`} alt="Grilování ve vinici v Kirchheimu" />
          <div>
            <p>Rok utekl jako voda a my znovu vyrážíme směr Francie. Tentokrát jsem si dal opravdu záležet – detailní plán cesty, prověřené recenze, několik variant nocovišť i tipy na restaurace v okolí. Zkrátka příprava, za kterou bych si sám sobě dal jedničku. A jak se ukázalo, první pochvala přišla už během prvního večera.</p>
            <p>Naší první zastávkou je místo ještě v Německu: Weingut Rogenwieser Stellplatz <CopyCoords coords="49.5342983N, 8.1816428E" /></p>
            <p>Kouzelná vinice, klid, slunce a možnost zakoupit si přímo na místě skvělé alsaské víno – naše slabost. Cesta proběhla hladce, počasí přálo a večerní grilování mezi řádky vinné révy bylo přesně to, co si člověk představí pod pojmem „dokonalý start dovolené".</p>
            <p>Zakoupili jsme bedýnku vína a jednu láhev hned otestovali. A tady přichází první pochvala za moje precizní plánování. Idylka jako z katalogu.</p>
            <p>Jenže to bychom nebyli my, aby se něco nestalo. Uprostřed noci nás probudila bouřka a opravdu silný vítr. Než jsme stihli vyskočit z postele a zavřít stropní poklopy, jeden z nich už letěl směrem do vinice.</p>
            <p>Takže jsem kolem jedné ráno běhal v pyžamu mezi keři a sbíral jednotlivé kusy. Následovalo malé noční puzzle a improvizovaná oprava díry ve stropě – samozřejmě přímo nad naší postelí. Trochu to s námi otřáslo, ale přece jen už nejsme žádní nováčci.</p>
            <p>Ráno jsme se tomu už dokázali zasmát. Zvlášť dialogu, který celou situaci krásně shrnul:</p>
            <p>„Zavři zadní poklop."<br />„Jaký poklop?"<br />„Jak to myslíš jaký poklop?"<br />„No tady žádný není."</p>
            <p>Po snídani jsme se sbalili, ještě jednou se pousmáli nad nočním dobrodružstvím a vyrazili dál – vstříc Paříži a dalším zážitkům.</p>
          </div>
        </div>
      </TripStop>

      <TripStop id="Zastavka2" title="Paříž" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Paříž1.jpeg`} alt="Eiffelova věž s olympijskými kruhy" />
          <div>
            <p>Paříž nás přivítala v plné olympijské parádě. Jako základnu volíme opět City Kemp <CopyCoords coords="48.8698217N, 2.2364244E" />. Ideální místo – v centru dění, na břehu Seiny, v klidném prostředí Boloňského lesíka. Jen je potřeba počítat s tím, že rezervace musí být udělaná několik dní dopředu.</p>
            <p>Večeře v místní restauraci je klasika tohoto řetězce: jednoduché pizzy, studené talíře a prkýnko s uzenými dobrotami. Nic přehnaného, ale po cestě potěší.</p>
            <p>Ráno sedáme na kola a míříme přes most na druhou stranu řeky. Podél Seiny vede příjemná, nesdílená cyklostezka, která nás dovede až k moderní čtvrti La Défense. Dostat se nahoru ke Grande Arche je menší výzva, ale stojí to za to. Cesta dolů po hlavní promenádě je naopak zážitek – cyklostezka se několikrát přesouvá z jedné strany na druhou, ale vše je dobře značené.</p>
            <p>La Défense je největší moderní obchodní čtvrť v Evropě. Více než 70 mrakodrapů, 3,5 milionu m² kanceláří a ikonická Grande Arche, která uzavírá slavnou pařížskou osu vedoucí od Louvru přes Champs-Élysées až sem. Výhled z Grande Arche na Vítězný oblouk je dechberoucí.</p>
            <p>Po sjezdu z promenády zastavujeme na oběd v Le Bouquet <CopyCoords coords="48.8830836N, 2.2646467E" /> a pokračujeme na „inspekci" olympijských sportovišť.</p>
            <img className="stop__img stop__img--right" src={`${import.meta.env.BASE_URL}images/Paříž2.jpeg`} alt="Grande Arche v La Défense" />
            <ul>
              <li>Invalidovna – připravená pro lukostřelbu</li>
              <li>Grand Palais – domov olympijského šermu</li>
              <li>Eiffelova věž – kulisa pro plážový volejbal</li>
            </ul>
            <p>Po celodenním ježdění už nohy protestují, takže míříme zpět do kempu.</p>
            <p>Druhý den testujeme shuttle bus z kempu, který nás doveze k metru. Cesta je pohodová, jen shuttle bývá trochu plný. Po vystoupení v Saint-Denis jako bychom se ocitli v jiném světě – živá, pestrá čtvrť s úplně jinou atmosférou než turistické centrum Paříže. Většina obyvatel je afrického původu. Míříme do Baziliky Saint-Denis – hrobky francouzských králů jsou nádherné a stojí za návštěvu.</p>
            <p>A protože jsme už měli hlad, zkoušíme místní kuchyni. Volba padla na Le Khédive <CopyCoords coords="48.9356928N, 2.3582964E" />. Arabská restaurace s výborným jídlem a netradičním způsobem servírování. Skvělé překvapení.</p>
            <p>Zpět jsme chtěli jet vlakem, ale příště raději zase metro – nádraží bylo dost divoké. Pak už jen najít správné přestupy v pařížském metru (což je disciplína sama o sobě) a stihnout shuttle zpět do kempu.</p>
            <p>Paříž jsme si užili naplno – na kole, pěšky i metrem. Olympijská atmosféra, moderní La Défense, historické Saint-Denis i sportovní kulisy dodaly městu úplně nový rozměr.</p>
            <p>Balíme a pokračujeme v cestě dál.</p>
          </div>
        </div>
      </TripStop>
      <TripStop id="Zastavka3" title="La Trinité sur Mer – Carnac" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-Carnac1.jpeg`} alt="Menhiry v Carnacu na kole" />
          <div>
            <p>Náš další kurz vede na západ — směr Bretaň. A hned po příjezdu máme jasno: tohle místo má styl. Ubytováváme se v krásném kempu Camping Baie <CopyCoords coords="47.5732397N, 3.0254753W" />, který nás vítá dokonale upravenými travnatými parcelami, oddělenými vysokými živými ploty. Soukromí jako doma, jen s vůní oceánu. Kemp má skvělou polohu, pár kroků od pláže, kousek na kole do přístavu a tam… každé ráno čerstvé úlovky na trhu.</p>
            <img className="stop__img stop__img--right" style={{maxWidth: '320px'}} src={`${import.meta.env.BASE_URL}images/Clip2Comic-Carnac2.jpeg`} alt="Čerstvé kraby na trhu v přístavu" />
            <p>A protože Bretaň umí překvapit, hned naproti kempu je malý obchůdek, kde si paní peče vlastní croissanty. A jsou přesně takové, jaké mají být — křupavé, voňavé, nebezpečně návykové.</p>
            <p>Vedle obchodu stojí restaurace Aux Terrasses <CopyCoords coords="47.5733089N, 3.0275600W" />. Výhled na moře, mořské plody jako z pohádky a atmosféra, která člověka donutí zpomalit. Zastávka, která stojí za každý kilometr cesty. A já si připisuji další pochvalu za plánování.</p>
            <p>Bretaň je jako stvořená pro cyklisty. Nesdílené cyklostezky vedou všude a člověk má pocit, že se může toulat donekonečna. A mezi tím vším — ikonické bretaňské menhiry, které se objevují na každém kroku. Po poctivé šichtě v sedle se odměňujeme v příjemné restauraci Ty Jeanne <CopyCoords coords="47.5837242N, 3.0790361W" /> v Carnacu.</p>
            <p>Carnac patří mezi nejvýznamnější prehistorická místa Evropy. Tisíce menhirů zde stojí už od neolitu (cca 4500–2000 př. n. l.) a každá kultura je využívala jinak:</p>
            <ul>
              <li>Keltové stavěli kamenné kruhy,</li>
              <li>Římané zde uctívali bohy,</li>
              <li>křesťané některé kameny otesali do tvaru křížů nebo nad mohylami postavili kostely.</li>
            </ul>
            <p>Účel menhirů zůstává záhadou. Nejčastěji se mluví o rituálních místech nebo astronomických orientacích. Archeologové se shodují alespoň na jednom: šlo o místa obřadů. A od roku 2025 jsou megality v Carnacu součástí UNESCO.</p>
            <p>Předpověď pro Bretaň je neúprosná: týden deště, teploty kolem 18 °C. Nic pro nás. Je to už podruhé, co nám Bretaň počasím nepřeje, ale rozhodně se sem ještě vrátíme. Tentokrát otáčíme směr na jih, kde má být alespoň o něco tepleji.</p>
          </div>
        </div>
      </TripStop>
      <TripStop id="Zastavka4" title="Notre Dame de Monts" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" style={{maxWidth: '256px'}} src={`${import.meta.env.BASE_URL}images/Clip2Comic-NotreDame2.jpeg`} alt="Tapas v restauraci Tap'as l'Œil" />
          <div>
            <img className="stop__img stop__img--right" style={{maxWidth: '256px'}} src={`${import.meta.env.BASE_URL}images/Clip2Comic-NotreDame1.jpeg`} alt="Slaná palačinka v restauraci La Pergola" />
            <p>Na cestě podél pobřeží Vendée jsme si vybrali kemp La Parée Chalons <CopyCoords coords="46.8422411N, 2.1390061W" />. Leží jen pár kroků od oceánu a celé místo působí příjemně ospalým dojmem. Okolí je protkané cyklostezkami — na sever i na jih se dá jet pohodlně po pobřeží a směrem do vnitrozemí se otevírají rozlehlé mokřady, které stojí za průzkum.</p>
            <p>Počasí sice nevypadalo úplně ideálně, ale rozhodli jsme se zůstat dvě noci a oblast projet na kole. A dobře jsme udělali.</p>
            <p>K obědu jsme zamířili do restaurace La Pergola <CopyCoords coords="46.8310375N, 2.1432003W" />. Výborné mořské plody, skvěle připravené ryby a slaná palačinka, která nás dostala. Ideální zastávka po dopoledním výletu.</p>
            <p>Druhý den jsme vyrazili o kus dál, do Saint-Jean-de-Monts. Cesta vede příjemným borovicovým lesem a končí u nádherné široké pláže se stylovými převlékacími domky. Oběd jsme si dali v útulné restauraci Tap'as l'Œil <CopyCoords coords="46.7860167N, 2.0770858W" />, kde mají skvělé tapas i příjemnou atmosféru.</p>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem'}}>
          <p style={{flex: 1, margin: 0}}>Pokud vyrazíte na kole na sever, můžete dojet až na ostrov Noirmoutier.</p>
          <img className="stop__img" style={{flex: '0 0 50%', maxWidth: '50%'}} src={`${import.meta.env.BASE_URL}images/Clip2Comic-NotreDame3.jpeg`} alt="Moules-frites v restauraci La Pergola" />
          <p style={{flex: 1, margin: 0}}>Ten je známý mimo jiné unikátní silnicí Passage du Gois — při přílivu se úplně schová pod vodou a projet ji lze jen v přesně daných časech. Jedinečný zážitek, který jinde nenajdete.</p>
        </div>
      </TripStop>

      <TripStop id="Zastavka5" title="Île de Ré" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-IleDeRe1.jpeg`} alt="Přístav Saint-Martin-de-Ré" />
          <div>
            <p>Počasí nám stále nepřálo, a tak jsme pokračovali dál na jih, kde nás zaujal ostrov Île de Ré – oblíbená, ale nepřeplněná destinace, kam se příště určitě vyplatí udělat rezervaci předem. Nakonec jsme měli štěstí a ubytovali se v příjemném kempu Camping Puma <CopyCoords coords="46.2035164N, 1.4509892W" /> se skvělou obsluhou a výbornou italskou restaurací, kde rozhodně stojí za ochutnání jejich ravioli.</p>
            <img className="stop__img stop__img--right" style={{maxWidth: '256px'}} src={`${import.meta.env.BASE_URL}images/Clip2Comic-IleDeRe2.jpeg`} alt="Ravioli na kempu" />
            <p>Ostrov je ideální pro cykloturistiku, protože cyklostezky vedou doslova všude a terén je dokonale rovinatý. Cesty vás provedou i kolem rozlehlých solných pánví, kde můžete sledovat tradiční výrobu soli nebo si koupit čerstvý vzorek. Atmosféra cyklistiky je tu úplně jiná než u nás – žádné dresy a závodní tempo, ale pohodové ježdění v běžném oblečení, často i v šatech. Z kempu se dá vyrazit několika směry a místo nás tak okouzlilo, že jsme pobyt prodloužili na celý týden. Restaurací je na ostrově spousta a kamkoli se vydáte, vždycky narazíte na něco dobrého. Nejvíce nás zaujalo historické město Saint‑Martin‑de‑Ré s unikátním Vaubanovým opevněním, které kdysi chránilo ostrov před Angličany.</p>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem'}}>
          <p style={{flex: 1, margin: 0}}>Île de Ré je také známé občasným výskytem tzv. čtvercových vln – jevu zvaného cross sea, kdy se na hladině setkají dva vlnové systémy pod téměř pravým úhlem a vytvoří pravidelný vzor připomínající šachovnici.</p>
          <img className="stop__img" style={{flex: '0 0 35%', maxWidth: '35%'}} src={`${import.meta.env.BASE_URL}images/IleDeRe3.png`} alt="Čtvercové vlny u majáku Phare des Baleines" />
          <p style={{flex: 1, margin: 0}}>Nejčastěji je vidět u majáku Phare des Baleines a přestože je to krásný přírodní úkaz, je zároveň nebezpečný pro plavce i malé lodě kvůli silným turbulencím a nečekaným proudům. Tento úkaz je možné pozorovat pouze na několika místech na planetě.</p>
        </div>
      </TripStop>

      <TripStop id="Zastavka6" title="Asterix park" color={true}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" style={{maxWidth: '240px'}} src={`${import.meta.env.BASE_URL}images/Clip2Comic-Asterix.jpeg`} alt="Horská dráha v parku Asterix" />
          <div>
            <p>A nakonec přišla na řadu tradiční zastávka pro děti – letos jsme zvolili park Asterix <CopyCoords coords="49.1329247N, 2.5718844E" /> u Paříže. Park bohužel neumožňuje noční parkování obytných vozů, takže jsme přenocovali na nejbližším vhodném místě po cestě, v našem oblíbeném řetězci stellplatzů Camping Car Park Nemours <CopyCoords coords="48.2711572N, 2.6917583E" />. Místo je velmi příjemné, přímo u řeky, respektive kanálu. Z jedné strany stály obytné vozy, z druhé houseboaty, což vytvářelo klidnou a hezkou atmosféru.</p>
            <p>Brzy ráno jsme vyrazili do zábavního parku. Park Asterix je v podstatě klasický zábavní areál se spoustou horských drah a atrakcí. Nic, co by nás vyloženě překvapilo nebo nadchlo, ale děti si to samozřejmě užily naplno.</p>
            <p>Pozdě odpoledne následoval přesun na Aire de camping-cars Château-Thierry <CopyCoords coords="49.0368078N, 3.3836425E" /> a poté už cesta domů, s jednou zastávkou na přespání v Německu.</p>
          </div>
        </div>
      </TripStop>
    </>
  )
}
