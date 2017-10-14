import React from 'react';
import Article from '../home/Article';

import Keynotesect from '../past/Keynotesect';

import {Row} from 'react-bootstrap';
export default class Page1 extends React.Component{

  componentDidMount(){
  }

  render(){

    return(
      <div>
        <Row>
          
          <Article>
            <Keynotesect year="2015">
            <strong>Keynote Session:</strong> Separation bubbles on airfoils and tonal noise production <br/><br/>
            <strong>Prof. Serhiy Yarusevych</strong><br/><br/>
            Recent advancements in small and medium scale wind turbines as well as unmanned aerial vehicles brought about an increased interest in airfoil operation at low chord Reynolds numbers (below about 500,000). Airfoil performance in this domain of Reynolds numbers differs significantly from that common to high Reynolds number flows. In particular, a laminar boundary layer on the suction side of the airfoil often separates even at low angles of attack. The shear layer is inherently unstable and undergoes transition to turbulence downstream of separation. The transition process plays a key role in the overall flow development, as it can lead to flow reattachment and the formation of a separation bubble. Recent results from a series of experimental studies will be presented to provide a new outlook on the attendant transition process and the associated separation bubble dynamics. A combination of quantitative measurements, flow visualizations, and analytical tools is utilized to gain insight into development of unsteady disturbances in the separated shear layer and the role of coherent structures in the transition process. The improved understanding of the separation bubble dynamics provides a new outlook on the generation of tonal noise on airfoils operating at low Reynolds numbers.
           </Keynotesect>
          </Article>
        </Row>

        <Row>

          <Article>
          <Keynotesect year="2013">
            <strong>Keynote Session:</strong> Small-Scale Energy Harvesting in Aquatic Environments <br/><br/>
            <strong>Dr. Sean Peterson</strong><br/><br/>
            From the flapping of a fish tail to the act of speaking to underwater energy harvesting, the interaction of fluids with deformable or moving solid structures is integral to many natural and engineering phenomena. In some cases a moving structure imparts energy to the fluid to elicit an effect, as with fish propulsion, while in other instances the fluid plays a more active role by imparting energy to the structure, as in underwater energy harvesting. As a specific examples, this talk will focus on base excitation of a highly deformable cantilevered strip in a quiescent fluid, in which the fluid acts as a passive damper, as well as the mechanics of a vortex ring impacting a similar structure with the aim of harvesting energy from the fluid. By employing an electro-active polymer such as a piezoelectric or an ionic polymer metal composite, the mechanical energy in the plate can be transduced to electrical energy for powering micro-electronic devices, such as small sensors. Analytical models, numerical simulations, and experimental evidence of energy harvesting from a vortex ring will be presented and discussed.
            </Keynotesect>
          </Article>
        </Row>

        <Row>
          <Article>
          <Keynotesect year="2012">
            <strong>Keynote Session:</strong> Kinematics and dynamics of turbulent trailing-edge flow <br/><br/>
            <strong>Sina Ghaemi</strong><br/><br/>
            The prominent challenge of the trailing-edge noise of aircrafts is associated to the acoustic emissions of a large range of pressure fluctuations within the adjacent turbulent flow. In this study, the source of the trailing-edge noise is tackled through (a) identification of the coherent structures of the turbulent flow at a sharp symmetric trailing-edge followed by (b) the evaluation of PIV-based pressure technique to (c) characterize one of the relevant acoustic sources known as the high-amplitude pressure fluctuations.
            <br/><br/>
            The evolution of the turbulent boundary layer into the subsequent wake at the trailing-edge of NACA0012 airfoil is investigated using tomographic particle image velocimetry (Tomo-PIV). The high-speed streaks are observed to persist over a longer distance than the low-speed streaks within the wake region due to the vortical activities introduced here as “counter-hairpin” vortices. These vortices exhibit opposite features relative to the typical hairpin vortices of the turbulent boundary layer.
            <br/><br/>
            Identification of the acoustic sources requires access to the unsteady pressure field within the turbulent flow. In order to evaluate the pressure field, time-resolved three-dimensional velocity measurement using Tomo-PIV is apply in combination with the Poisson pressure equation. The pressure field is obtained within a turbulent boundary layer as a benchmark flow and is locally validated against surface pressure measurement using electret microphones.
            <br/><br/>
            Finally, the high-amplitude pressure fluctuations within the turbulent boundary layer are investigated as the major acoustic source contributing to the trailing-edge noise. Three-dimensional measurement of the velocity field along with the evaluated pressure field demonstrated the correspondence of the positive and negative high-amplitude pressure peaks to the shear layers and vortical structures of the turbulent boundary layer, respectively. The results point out possible control strategies for trailing-edge noise attenuations.
            </Keynotesect>
          </Article>
          
        </Row>
      </div>
    );
  }
}