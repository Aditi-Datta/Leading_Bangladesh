import Image from "next/image";
import web from "@/../public/coding.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/CustomColors.module.css";

function Services() {
  return (
    <>

    <div className="grid grid-cols-3 gap-4 py-16  ">
    
    

      <div className="card  w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={web}
            width={200}
            alt="Background"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Web Development!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button  className={styles.ServicesBtn}>Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
      
      
      <div className="card  w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={web}
            width={200}
            alt="Background"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Web Development!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button  className={styles.ServicesBtn}>Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
      
      
      <div className="card  w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={web}
            width={200}
            alt="Background"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Web Development!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button  className={styles.ServicesBtn}>Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
      
      
      <div className="card  w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={web}
            width={200}
            alt="Background"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Web Development!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button  className={styles.ServicesBtn}>Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
      
      
      <div className="card  w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={web}
            width={200}
            alt="Background"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Web Development!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button  className={styles.ServicesBtn}>Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
      
      
      <div className="card  w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={web}
            width={200}
            alt="Background"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Web Development!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button  className={styles.ServicesBtn}>Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
      </div>
      
      
      
      
      
      </div>
    </>
  );
}

export default Services;
