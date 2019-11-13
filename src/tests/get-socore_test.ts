import { CosmosSDK } from "cosmos-client-ts";

import { Trust } from "./../x/trust/index"


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";

async function getScores() {
    try {
        let result = await Trust.getScores(sdk, address, [])

        console.log(result)
    } catch (error) {
        console.error("*** Error:", error);
    }
}

getScores()
