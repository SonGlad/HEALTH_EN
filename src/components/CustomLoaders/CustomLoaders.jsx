import RingLoader from "react-spinners/RingLoader";
import PulseLoader from "react-spinners/PulseLoader";
import {RingLoaderStyled, DataLoaderStyled } from "./CustomLoaders.styled";



export const Loading = () => {
    return (
        <RingLoaderStyled>
            <RingLoader 
                color={"#36d7b7"} 
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};


export const RefreshLoading = () => {
    return (
        <RingLoaderStyled
            style={{backgroundColor: 'rgba(0, 0, 0, 0.8)',}}
        >
            <RingLoader 
                color={"#36d7b7"}
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};


export const DataLoading = () => {
    return (
        <DataLoaderStyled>
            <PulseLoader 
                color={"#36d7b7"}
                loading = {true} 
                size={30}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </DataLoaderStyled>
    );
};