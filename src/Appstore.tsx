import React,{useState} from 'react'

interface AppStateValue{
  username:string,
  shoppingCart:{item:{id:number,name:string}[]}
}

const defaultContextValue:AppStateValue= {
  username:'阿莱克斯',
  shoppingCart:{item:[]}
}

export const appContext=React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext< React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined)
export const AppStateProvider= (props:any) => {
  const [state, setState] = useState(defaultContextValue);

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
