import Banner from "./Components/HomePage/Banner";
import CalltoAction from "./Components/HomePage/CalltoAction";
import About from "./Components/HomePage/About";
import Services from "./Components/HomePage/Services";
import styles from "../app/styles/CustomColors.module.css";


export default function Home() {
  return (
   <>
   <div className={styles.bodyBackground}>
   <Banner></Banner>
   <About></About>
   <Services></Services>
   <CalltoAction></CalltoAction>

   </div>
  
   
   </>
  );
}
