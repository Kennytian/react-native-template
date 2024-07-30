export interface IExtraData {
  name: string;
  age: number;
}

export type NavigationProps = {
  route: {
    params?: Record<string, any>;
  };
  navigation?: {
    navigate: (screen: string, params?: Record<string, any>, merge?: boolean) => void;
    goBack: () => void;
    setOptions: (options: Record<string, any>) => void;
    addListener: (type: string, func: () => void) => void;
  };
  setParams?: (params: Record<string, any>) => void;
};
