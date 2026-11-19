import { MainContainer , ListAllCard , InfoContainer} from "./styled";
import { useEffect, useState } from "react";
import axios from "axios"

export function Main() {
    


    const fetchData = async () => {
        const response = await axios.get("http://[::1]:3000/itens?page=1")
        
    }

    return (
        <MainContainer>
            <InfoContainer>
                <ListAllCard>
                    <h1>List All</h1>
                </ListAllCard>
            </InfoContainer>
        </MainContainer>
    )
}