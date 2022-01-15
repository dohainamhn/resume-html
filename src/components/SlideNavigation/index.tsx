import i18next from "../../i18n";
import { Select } from "../Select";
import { SlideNavItem } from "../SlideNavItem";
import { SwitchColor } from "../SwitchColor";
import './style.scss'
interface Props {
  nav:boolean,
  t:any

}

const data = [{text:"vn", value:"vn"}, {text:"en", value:"en"}]

const SlideNavigation = (props: Props) => {
  const {nav, t} = props;
  
  
  return (
    <div className={nav ? `slide-nav active` : `slide-nav`} >
      <div className="slide-logo header__title">Bac</div>
      <Select data ={data} />
     
      <SwitchColor />
      <ul className="slide-block">
        {t('data', { returnObjects: true }).map((item:{text:string,icon:string}, index:number) => { 

          return (
            <SlideNavItem
              icon={<i className={item.icon}></i>}
              text={item.text}
              key={index}
            />
          );
        })}
      </ul>
      <div className="slide-bottom">
      © 2020 Bac Template.
      </div>
    </div>
  );
};
export default SlideNavigation;