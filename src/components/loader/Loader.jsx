import SyncLoader from "react-spinners/SyncLoader";
import css from "./Loader.module.css";

const Loader = ( { status }) => {
    return (
        <div className={css.loader}>
             <SyncLoader
        
        color={'#36d7b7'}
        loading={status}
        // cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
       
      />
        </div>
    );
};
export default Loader;