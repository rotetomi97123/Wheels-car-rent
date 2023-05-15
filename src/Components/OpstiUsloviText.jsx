import React from 'react'
import styled from 'styled-components'

const OpstiUsloviText = () => {
  return (
    <MainDiv>
    <span>

      <h1>Osnovni uslovi za najam rent a car vozila:</h1>
      <p>Osnovni uslovi za najam rent a car vozila: <br />

      Vozilo mogu iznajmiti osobe starije od 21 godine koje poseduju vozačku dozvolu najmanje 2 godine.<br />

      Iznajmljeno vozilo ne sme biti upotrebljavano:<br />
      - pod uticajem alkohola, sredstava za umirenje, narkotika, sredstava za spavanje ili drugih lekova;<br />
      - u protivzakonite svrhe (npr. krivična dela, carinski i devizni prekršaji...);<br />
      - za plaćeni prevoz putnika ili robe;<br />
      - za bilo koje takmičenje, brzinske probe ili trke;<br />
      - za pogon ili vuču drugih vozila, prikolica ili bilo kog predmeta;<br />
      - kada nije u voznom stanju;<br />
      - za obuku vozača.<br />

      Korisnik usluga je obavezan:<br />
      - da iznajmljeno vozlio ne optereti osobama ili predmetima preko dozvoljene težine;<br />
      - da iznajmljenim vozilom ne prelazi granicu Srbije bez dozvole Tantum rent a car-a;<br />
      - da snosi troškove utrošenog goriva;<br />
      - da za produženje ugovorenog perioda korišćenja vozila traži saglasnost Tantum rent a car-a 48 sati pre isteka roka vraćanja vozila;<br />
      - da odmah obustavi vožnju ako se za vreme korišćenja pokvari brojač kilometara i o kvaru brojača najbržim putem obavesti Tantum rent a car;<br />
      - da vozilo uredno održava i čuva za vreme korišćenja;<br />
      - da iznajmljeno vozilo vrati u dogovorenom roku ili ranije na zahtev Tantum rent a car-a;<br />
      - da vozilo koristi samo za vlastite potrebe i da ga ne iznajmi ili posudi trećem licu;<br />
      - da plati sve iznose novčanih kazni izrečenih protiv njega u vezi korišćenja vozila, a prouzrokovane njegovom ličnom krivicom (kršenje saobraćajnih propisa);<br />
      - da u slučaju nezgode štiti interese Tantum rent a car-a i njegovog osiguravajućeg društva time:<br />
      -- što će zabeležiti imena i adrese učesnika i svedoka nezgode;<br />
      -- što neće napustiti oštećeno vozilo dok ga nije sklonio sa mesta nezgode i osigurao;<br />
      -- što će o šteti, čak i kada je neznatna, odmah najbržim putem obavestiti Tantum rent a car;<br />
      -- što će u slučaju većeg oštećenja na vozilu ili ako u nezgodi ima povređenih lica (čak i kada je očigledna krivica drugih lica) odmah pozvati i sačekati dolazak organa saobraćajne milicije radi izvršenja službenog uviđaja;<br />
      -- što će podneti pismeni izveštaj o nezgodi Tantum rent a car-u.<br />

      Minimum na koji izdajemo vozila je 3 dana.</p><br />
    </span>
  </MainDiv>
  )
}
const MainDiv = styled.div`
  margin: 3rem 0;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  h1{
    font-size: 2rem;
  }
  p{
    font-size: 1.2rem:
  }
  span{
    border:1px solid darkgray;
    border-radius: 1rem;
    padding: 1rem 1rem;
  }
`
export default OpstiUsloviText