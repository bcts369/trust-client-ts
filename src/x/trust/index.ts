import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { EvaluateReq } from "./types/evaluate-req";
import { DistributeByScoreReq } from "./types/distribute-by-score-req";
import { DistributeByEvaluationReq } from "./types/distribute-by-evaluation-req";

export module Trust {
  /*

## GetScores

`GET` `/trust/scores/{address}`

### Request

```TypeScript
{
  topic_ids: string[];
}
```

`topic-ids`: `,`で区切った`topic-id`。`^[a-z]([a-z]|-)*$`

### Response

```TypeScript
{ [topicID: string]: number; }
```

Goで言うところの`map[string]float64`。
  */
  export function getScores(sdk: CosmosSDK, address: string, topicIDs: string[]) {
    return sdk.get(`/trust/scores/${address}`, { 'topic-ids': topicIDs.join(',') })
  }

  export function evaluate(sdk: CosmosSDK, address: string, params: EvaluateReq) {
    return sdk.post<StdTx>(`/trust/evaluate/${address}`, params);
  }

  export function distributeByScore(sdk: CosmosSDK, address: string, params: DistributeByScoreReq) {
    return sdk.post<StdTx>(`/trust/distribute-by-score/${address}`, params);
  }

  export function distributeByEvaluation(sdk: CosmosSDK, address: string, params: DistributeByEvaluationReq) {
    return sdk.post<StdTx>(`/trust/distribute-by-evaluation/${address}`, params);
  }
}
