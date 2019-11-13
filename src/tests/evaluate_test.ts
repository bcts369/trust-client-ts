import { CosmosSDK } from "cosmos-client-ts";
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Trust } from "./../x/trust/index"
import { EvaluateReq } from "./../x/trust/types/evaluate-req"



const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";

// export interface EvaluateReq {
//     base_req: BaseReq; // cosmos-client-ts
//     topic_id: string;
//     from_address: string;
//     to_address: string;
//     weight1000: number;
// }

class MyCoin implements Coin {
    denom = "stake";
    amount = "200000";
}

class MyDecCoin implements DecCoin {
    denom = "";
    amount = "0";
}

let defaultValues = (): BaseReq => ({
    from: address,
    memo: "",
    chain_id: chainId,
    account_number: "0",
    sequence: "0",
    fees: [new MyCoin()],
    gas_prices: [new MyDecCoin()],
    gas: "0",
    gas_adjustment: "",
    simulate: false
});

async function getEvaluate() {
    // TODO: weight1000 をstringに変更する
    const params: EvaluateReq = {
        topic_id: "",
        from_address: "",
        to_address: "",
        weight1000: 0,
        base_req: defaultValues()
    }

    try {
        let result = await Trust.evaluate(sdk, params)

        console.log(result)
    } catch (error) {
        console.error("*** Error:", error);
    }
}

getEvaluate()
