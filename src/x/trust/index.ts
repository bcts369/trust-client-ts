import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { EvaluateReq } from "./types/evaluate-req";
import { DistributeByScoreReq } from "./types/distribute-by-score-req";
import { DistributeByEvaluationReq } from "./types/distribute-by-evaluation-req";

export module Trust {

  export function getScores(sdk: CosmosSDK, address: string, topicIDs: string[]) {
    return sdk.get<{ [topicID: string]: number }>(`/trust/scores/${address}`, { 'topic-ids': topicIDs.join(',') })
  }

  export function evaluate(sdk: CosmosSDK, params: EvaluateReq) {
    return sdk.post<StdTx>(`/trust/evaluate}`, params);
  }

  export function distributeByScore(sdk: CosmosSDK, params: DistributeByScoreReq) {
    return sdk.post<StdTx>(`/trust/distribute-by-score`, params);
  }

  export function distributeByEvaluation(sdk: CosmosSDK, params: DistributeByEvaluationReq) {
    return sdk.post<StdTx>(`/trust/distribute-by-evaluation`, params);
  }
}
