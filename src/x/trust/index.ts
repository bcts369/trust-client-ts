import { CosmosSDK } from "cosmos-client-ts/lib";

export module Trust {
  export function getScores(sdk: CosmosSDK, address: string, topicIDs: string[]) {
    return sdk.get(`/score/${address}`, {'topic-ids': topicIDs.join(',')})
  }
}
