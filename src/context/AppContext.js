import { createContext, useState} from "react";
const AppContext = createContext();
function Provider({ children }) {
const [componentsToggele, setComponentsToggele] = useState(false);

const handleComponentsToggele = () => {
    setComponentsToggele(!componentsToggele);
    console.log(componentsToggele)
}


    const valueToShare={
        handleComponentsToggele,
        componentsToggele,

    }
    return (
        <AppContext.Provider value={valueToShare}>
          {children}
        </AppContext.Provider>
      );
   



}
export { AppContext, Provider };
