import React from 'react';
import Article from '../home/Article';
import Yearsect from '../past/Yearsect';

import {Row, Col} from 'react-bootstrap';

import AjithAirody2015 from '../abstracts/2015/AjithAirody.pdf';
import DuyLee2015 from '../abstracts/2015/DuyLee.pdf';
import EugeneZivkov2015 from '../abstracts/2015/EugeneZivkov.pdf';
import GurkanYesiloz2015 from '../abstracts/2015/GurkanYesiloz.pdf';
import HuangruiMo2015 from '../abstracts/2015/HuangruiMo.pdf';
import JeffreyMcClure2015 from '../abstracts/2015/JeffreyMcClure.pdf';
import KevinLee2015 from '../abstracts/2015/KevinLee.pdf';
import PegahPezeshkpour2015 from '../abstracts/2015/PegahPezeshkpour.pdf';
import SepehrMohaddes2015 from '../abstracts/2015/SepehrMohaddes.pdf';

import AmiraliAshrafizadeh2013 from '../abstracts/2013/AmiraliAshrafizadeh.pdf';
import BrianKettlewell2013 from '../abstracts/2013/BrianKettlewell.pdf';
import ChrisMorton2013 from '../abstracts/2013/ChrisMorton.pdf';
import GhobadAmini2013 from '../abstracts/2013/GhobadAmini.pdf';
import JenniferBook2013 from '../abstracts/2013/JenniferBook.pdf';
import JungyiWang2013 from '../abstracts/2013/JungyiWang.pdf';
import ManpreetBansal2013 from '../abstracts/2013/ManpreetBansal.pdf';
import NigelBinnema2013 from '../abstracts/2013/NigelBinnema.pdf';

import AhmedAbdelrahman2012 from '../abstracts/2012/AhmedAbdelrahman.pdf';
import ChekemaPrince2012 from '../abstracts/2012/ChekemaPrince.pdf';
import DavidSommer2012 from '../abstracts/2012/DavidSommer.pdf';
import DominicMa2012 from '../abstracts/2012/DominicMa.pdf';
import FangLiu2012 from '../abstracts/2012/FangLiu.pdf';
import FarzanMemarian2012 from '../abstracts/2012/FarzanMemarian.pdf';
import HollyNeatby2012 from '../abstracts/2012/HollyNeatby.pdf';
import JeffLabahn2012 from '../abstracts/2012/JeffLabahn.pdf';
import RahelehGivehchi2012 from '../abstracts/2012/RahelehGivehchi.pdf';
import YusukeKoda2012 from '../abstracts/2012/YusukeKoda.pdf';

export default class Past extends React.Component{

  componentDidMount(){
  }

  render(){
    const title={
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom:"25px",
      fontFamily:"Roboto, Helvetica",

    }
    const content={
      fontFamily:"Helvetica",

    }

    const dl={
      fontWeight:"bold",
    }
    const seminarinfo={
      
    }
    return(
      <div>
          
          <Yearsect 
          year="2015"
          organizer="Jeff McClure"
          date="Wednesday, October 28, 2015"
          time="9:30am - 2:30pm"
          place="E5-2004"
          >
          <a href={HuangruiMo2015} download style={dl}>A ghost-cell immersed boundary method for complex and dynamic shock-particle interactions</a> <br/>
          Huangrui Mo<br/>
          Advisor: Prof. Fue-Sang Lien <br/><br/>


          <a href={SepehrMohaddes2015} download style={dl}>A new technique for characterizing multi-temperature convection</a> <br/>
          Sepehr Mohaddes<br/>
          Advisor: Prof. John Wright<br/><br/>

          <a href={EugeneZivkov2015} download style={dl}>Experimental investigation of the interactions of a vortex dipole with a cantilevered plate</a> <br/>
          Eugene Zivkov<br/>
          Advisor: Prof. Sean Peterson and Prof. Serhiy Yarusevych<br/><br/>

          <a href={DuyLee2015} download style={dl}>Assessment of the capabilities of FireFoam for simulations of large scale fire in confined compartments</a> <br/>
          Duy Le<br/>
          Advisor: Prof. Cecile Devaud<br/><br/>

          <a href={PegahPezeshkpour2015} download style={dl}>Development and application of an improved model for microfluid transport in protein and DNA separation</a>  <br/>
          Pegah Pezeshkpour<br/>
          Advisor: Prof. Gerry Schneider and Prof. Carolyn Ren<br/><br/>

          <a href={AjithAirody2015} download style={dl}>Design optimization of a vaneless "fish-friendly" swirl injector small water turbines</a>  <br/>
          Ajith Airody<br/>
          Advisor: Prof. Sean Peterson<br/><br/>

          <a href={KevinLee2015} download style={dl}>Application of conditional source-term extimation (CSE) to a turbulent non-premixed methanol bluff-body flame</a>  <br/>
          Kevin Lee<br/>
          Advisor: Prof. Cecile Devaud<br/><br/>

          <a href={JeffreyMcClure2015} download style={dl}>Planar pressure PIV error optimization with applications to structural loading on a circular cylinder</a>  <br/>
          Jeffery McClure<br/>
          Advisor: Prof. Serhiy Yarusevych<br/><br/>

          <a href={GurkanYesiloz2015} download style={dl}>High-throughput droplet sensing platform for pharmaceutical and bioengineering applications using microwave technology</a>  <br/>
          Gurkan Yesilov<br/>
          Advisor: Prof. Carolyn Ren<br/><br/>


        </Yearsect>

          <Yearsect year="2013"
          organizer="Chris Morton"
          date="Thursday, October 23, 2013"
          time="10:00am - 2:00pm"
          place="E5-2004">
          <a href={BrianKettlewell2013} download style={dl}>Semi-analytical investigation of vortex shedding within the glottis an concomitant effect on vocal fold dynamics</a><br/> 
          Brian Kettlewell<br/>
          Advisor: Dr. Sean Peterson<br/><br/>
            
          <a href={JenniferBook2013} download style={dl}>Investigating the impact of external leg compression on venous return to the heart</a><br/>
          Jennifer Book<br/>
          Advisor: Dr. Sean Peterson<br/><br/>
          
          <a href={JungyiWang2013} download style={dl}>Modelling and experiment of dying process of catalyst ink droplet</a> <br/>
          Jingyi Wang<br/>
          Advisor: Dr. Xianguo Li<br/><br/>
          
          <a href={GhobadAmini2013} download style={dl}>Optimum viscous flow in pressure-swirl atomizers</a> <br/>
          Ghobad Amini<br/><br/>
          
          <a href={ChrisMorton2013} download style={dl}>Tomographic PIV measurements in the wakes of cylindrical bodies</a> <br/>
          Chris Morton<br/>
          Advisor: Dr. Serhiy Yarusevych<br/><br/>
          
          <a href={NigelBinnema2013} download style={dl}>Use of HD Video to investigate stall on a wind turbine</a> <br/>
          Nigel Swytink-Binnema<br/>
          Advisor: Dr. David Johnson<br/><br/>
          
          <a href={ManpreetBansal2013} download style={dl}>A flow visualization study of flow through a cluster of three equispaced cylinders at various orientation angles</a> <br/>
          Manpreet Bansal<br/>
          Advisor: Dr. Serhiy Yarusevych<br/><br/>
          
          <a href={AmiraliAshrafizadeh2013} download style={dl}>A Jacobian-free Newton-Krylov method applied to multi-phase flows</a> <br/>
          Amirali Ashrafizadeh <br/>
          Advisor: Dr. Cecile Devaud<br/><br/>
        </Yearsect>

          <Yearsect year="2012"
          organizer="Chris Morton"
          date="Thursday, October 26, 2012"
          time="10:00am - 2:00pm"
          place="E5-2004">
          <a href={HollyNeatby2012} download style={dl}>Developing a reliable method of estimating drag from far field measurements</a> <br/>
          Holly Neatby<br/>
          Advisor: Prof. Serhiy Yarusevych<br/><br/>
            
          <a href={AhmedAbdelrahman2012} download style={dl}>Experimental measurement of wind turbine performance through blade element theory</a> <br/>
          Ahmed Abdelrahman<br/>
          Advisor: Prof. David Johnson<br/><br/>
          
          <a href={ChekemaPrince2012} download style={dl}>A CFD study of steady flow of a Newtonian and non-Newtonian fluid through a mildly curved tube 
          with stent-like wall protrusions patterns</a> <br/>
          Chekema Prince<br/>
          Advisor: Prof. Sean Peterson<br/><br/>
          
          <a href={DavidSommer2012} download style={dl}>A coupled experimental-numerical framework for fluid-structure interaction studies:
           towards a pseudo-self-oscillating vocal fold facility</a> <br/>
          David Sommer<br/>
          Advisor: Prof. Sean Peterson<br/><br/>
          
          <a href={JeffLabahn2012} download style={dl}>RANS simulation of a confined turbulent jet diffusion flame using conditional source estimation</a> <br/>
          Jeff Labahn<br/>
          Advisor: Prof. Cecile Devaud<br/><br/>
          
          <a href={DominicMa2012} download style={dl}>Turbulent non-premixed combustion modeling using conditional moment closure including the effects of differential diffusion</a> <br/>
          Dominic Man Ching Ma<br/>
          Advisor: Prof. Cecile Devaud<br/><br/>
          
          <a href={FarzanMemarian2012} download style={dl}>Transient heat transfer effects in low-fluence Laser Induced Incandescence</a> <br/>
          Farzan Memarian<br/>
          Advisor: Prof. Kyle Daun<br/><br/>
          
          <a href={YusukeKoda2012} download style={dl}>Implementation of the lattice Boltzmann method on the graphics processing unit</a> <br/>
          Yusuke Koda<br/>
          Advisor: Prof. Fue Sang Lien<br/><br/>
          
          <a href={RahelehGivehchi2012} download style={dl}>Indoor airborne nanoparticle measurement by Diffusive Charging (DC) and Aerodynamic 
          Particle Focusing (APF): Characterization of the performance of the corona charger</a> <br/>
          Raheleh Givehchi<br/>
          Advisor: Prof. Zhongchao Tan<br/><br/>
          
          <a href={FangLiu2012} download style={dl}>Extraction of 5-HMF using mixed solvents from simulated hydrothermal conversion product</a> <br/>
          Fang Liu<br/>
          Advisor: Prof. Zhongchao Tan<br/><br/>
        </Yearsect>

        
          <Yearsect year="2011"
          organizer="Chris Morton"
          date="Thursday, October 27, 2011"
          time="10:00am - 2:00pm"
          place="E5-2004"
          >
          Unsteady Flow Investigation around a Pitching Wind Turbine Blade <br/>
          Kobra Gharali<br/>
          Advisor: Dr. David Johnson<br/><br/>
          
          Experimental study of vortex dynamics in the wake of a dual step cylinder <br/>
          Chris Morton<br/>
          Advisor: Dr. Serhiy Yarusevych<br/><br/>
            
          A numerical study of steady flow through a curved tube with wavy walls <br/>
          Chekema Prince<br/>
          Advisor: Dr. Sean Peterson<br/><br/>
          
          Irregular Vocal Fold Dynamics Incited by Asymmetric Fluid Loading in a Model of Recurrent Laryngeal Nerve Paralysis <br/>
          David Sommer<br/>
          Advisor: Dr. Sean Peterson<br/><br/>
          
          Simulation of a turbulent premixed methane-air flame <br/>
          Daniele Dovizio<br/>
          Advisor: Dr. Cecile Devaud<br/><br/>
          
          Fire Testing Standards for Transportation Applications: A Global Comparison <br/>
          Brenda Prine<br/>
          Advisor:  E.J. Weckman<br/><br/>
          
          Droplet Sorting at a T-junction under Asymmetric Geometries and Flow Conditions <br/>
          Tom Glawdel and Caglar Elbuken<br/>
          Advisor: Carolyn L. Ren<br/><br/>
          
          Rarefaction effects on the catalytic oxidation of hydrogen in microchannels <br/>
          Azad Qazi Zade<br/>
          Advisor: Dr. Metin Renksizbulut<br/><br/>
          
          Molecular Simulation of Chemically Reacting Flows in Microchannels and Nanochannels <br/>
          Amir Ahmadzadegan<br/>
          Advisor: Dr. Metin Renksizbulut and Dr. John Wen<br/><br/>
          
          Measurements and flow pattern visualizations of two-phase flow boiling in single channel microevaporators <br/>
          Elmer Galvis<br/>
          Advisor: Dr. Richard Culham<br/><br/>
          
          Removal of nitric oxide from flue gas in a spray tower <br/>
          Hesheng Yu<br/>
          Advisor: Zhongchao Tan<br/><br/>
          
          Hydrothermal conversion of biomass into value-add chemical 5-HMF <br/>
          Fang Liu<br/>
          Advisor: Zhongchao Tan<br/><br/>
        </Yearsect>

   


      </div>
    );
  }
}