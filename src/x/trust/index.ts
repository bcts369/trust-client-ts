import { CosmosSDK } from "cosmos-client-ts";

export module Trust {
  export function getScores(sdk: CosmosSDK, address: string, topicIDs: string[]) {
    return sdk.get(`/trust/scores/${address}`, {'topic-ids': topicIDs.join(',')})
  }
}
