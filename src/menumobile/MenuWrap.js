import React from "react";
import MenuButton from 'menumobile/MenuButton';
import MenuPanel from 'menumobile/MenuPanel';
import MenuText from 'menumobile/MenuText';

class MenuWrap extends React.Component{
  render(){
	  return(
			<div>
        <MenuButton />
        <MenuPanel />
        <MenuText/>
			</div>
	  );
  }
}

export default MenuWrap;